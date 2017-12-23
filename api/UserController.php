<?php

header('Content-type: application/json; charset=utf-8');
require_once "db_conn.php";
require_once "Clean.php";

class UserController
{
    private $dbConn;
    private $query_result = [];
    private $get_data = null;
    private $insert_data = null;
    private $cleaner = null;
    private $responce = [];

    function __construct($get_data = null,$insert_data = null)
    {
        global $DB;
        $this->dbConn = $DB;
        $this->get_data = $get_data;
        $this->insert_data = $insert_data;
    }

    private function generatePasswordHash($password) {
        $options = [
            'cost' => 10,
            'salt' => '9.Rb#ugq6uWqV?b"*av(3m',
        ];
        $password_hash =  password_hash($password, PASSWORD_BCRYPT, $options);
        return $password_hash;
    }
    private function generateToken() {
        $date = date('Y/m/d H:i:s');
        $salt = substr(strtr(base64_encode(openssl_random_pseudo_bytes(22)), '+', '.'), 0, 22);
// 2y is the bcrypt algorithm selector, see http://php.net/crypt
// 12 is the workload factor (around 300ms on my Core i7 machine), see http://php.net/crypt
        $hash = crypt($date, '$2y$12$' . $salt);
        return $hash;
    }

    public function checkUserExist($login, $password) {
        $query = "SELECT * FROM users WHERE name = ? AND password = ?";

        $args = [$login,$password];
        $this->query_result = $this->dbConn->query($query,$args);
        $this->dbConn->CloseConnection;
        return $this->query_result;
    }
    public function checkTokenExist($token) {
        $query = "SELECT * FROM users WHERE token = ?";

        $args = [$token];
        $this->query_result = $this->dbConn->query($query,$args);
        $this->dbConn->CloseConnection;
        return $this->query_result;
    }
    private function updateUserToken($new_token,$user_id) {
        $query = "UPDATE users SET token = ? WHERE id = ?";

        $args = [$new_token,$user_id];
        $this->query_result = $this->dbConn->query($query,$args);
        $this->dbConn->CloseConnection;
        return $this->query_result;
    }

    private function createNewUser($user){
        $query = "INSERT INTO users(id,email,name,password,role,token) VALUES(:id,:email,:name,:password,:role,:token)";
        $args = $user;
        $this->query_result = $this->dbConn->query($query,$args);
        $this->dbConn->CloseConnection;
        return $this->query_result;
    }

    private function getAllUsersTokens() {
        $query = "SELECT token FROM users";
        $args = [];
        $this->query_result = $this->dbConn->query($query,$args);
        $this->dbConn->CloseConnection;
        return $this->query_result;
    }

    private function getAllUsers() {
        $query = "SELECT * FROM users";
        $args = [];
        $this->query_result = $this->dbConn->query($query,$args);
        $this->dbConn->CloseConnection;
        return $this->query_result;
    }



    public function get_data() {

        if (property_exists($this->get_data,"user_token")) {

            $result = $this->checkTokenExist($this->get_data->user_token);

            if (count($result) == 1) {
                $user_id = $result[0]['id'];
                $new_token = $this->generateToken();
                $this->updateUserToken($new_token,$user_id);
                $result[0]['token'] = $new_token;

                $this->responce["response"] = $result;
                $this->responce["status"] = "success";
            }
            else {
                $this->responce["response"] = "Current token i'snt exist!";
                $this->responce["debug"] = $result;
                $this->responce["status"] = "error";
            }

        }
        else if (property_exists($this->get_data, "get_tokens")) {

            $result = $this->getAllUsersTokens();
            if (count($result) > 0) {
                $this->responce["response"] = ['users_tokens' => $result ];
                $this->responce["status"] = "success";
            }
            else {
                $this->responce["response"] = "No users in DB!";
                $this->responce["debug"] = $result;
                $this->responce["status"] = "error";
            }
        }
        else if (property_exists($this->get_data,"auth_user")) {
            $user_data_obj = $this->get_data->auth_user;
            $result = $this->checkUserExist($user_data_obj->user_login,$this->generatePasswordHash($user_data_obj->user_password));
            if (count($result) > 0) {
                $user_id = $result[0]['id'];
                $new_token = $this->generateToken();
                $this->updateUserToken($new_token,$user_id);
                $result[0]['token'] = $new_token;

                $this->responce["response"] = ['auth_user' => ['user_id' => $result[0]['id'], 'user_token' => $result[0]['token']] ];
                $this->responce["status"] = "success";
            }
            else {
                $this->responce["response"] = "User with this auth data i'snt exist!";
                $this->responce["debug"] = $result;
                $this->responce["status"] = "error";
            }
        }
        else {
            $this->responce["response"] = "Incorrect get_data params!";
            $this->responce["status"] = "error";
        }

        return json_encode($this->responce);

    }

    public function insert_data() {
        $this->cleaner = new Clean();
        $comment_args = [];

        if (property_exists($this->insert_data,"email") && property_exists($this->insert_data,"name") && property_exists($this->insert_data,"password")) {
            $comment_args["id"] = null;
            $comment_args["email"] = $this->cleaner->simple_clean($this->insert_data->email);
            $comment_args["name"] = $this->cleaner->simple_clean($this->insert_data->name);
            $comment_args["password"] = $this->generatePasswordHash($this->cleaner->simple_clean($this->insert_data->password));
            $comment_args["role"] = $this->insert_data->role;
            $comment_args["token"] = $this->generateToken();

            $result = $this->createNewUser($comment_args);

            if ($result) {
                $this->responce["response"] = "User was created!";
                $this->responce["status"] = "success";
            }
            else {
                $this->responce["response"] = "Create user error!";
                $this->responce["debug"] = $result;
                $this->responce["status"] = "error";
            }

        }
        else {
            $this->responce["response"] = "Incorrect create user params!";
            $this->responce["status"] = "error";
        }

        return json_encode($this->responce);

    }
}
//$_POST["get_data"] = json_encode((object) [
//    'auth_user' => ['user_login' => 'admin', 'user_password' => 'admin'],
//    'get_tokens' => 'get_tokens'
//]);

//var_dump($_POST["get_data"]);

if(gettype(json_decode($_POST["get_data"])) === "object") {
    $hotels = new UserController(json_decode($_POST["get_data"]),null);
    echo $hotels->get_data();
    die;
}
elseif(gettype(json_decode($_POST["insert_data"])) === "object") {
    $hotels = new UserController(null,json_decode($_POST["insert_data"]));
    echo $hotels->insert_data();
    die;
}
else {
    echo json_encode(["response" => "Invalid request params!", "status" => "error"] );
}
