<?php
header('Content-type: application/json; charset=utf-8');
require_once "db_conn.php";
require_once "Clean.php";

class CommentsController
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

    private function getHotelComments($hotel_id,$limit) {
        $query = "SELECT * FROM comments WHERE hotel_id = ?";
        if ($limit != -1) {
            $query.= " LIMIT ?";
        }
        $args = [$hotel_id, $limit];

        $this->query_result = $this->dbConn->query($query,$args);
        $this->dbConn->CloseConnection;
        return $this->query_result;
    }

    private function insertNewComment($comment){
        $query = "INSERT INTO comments(id,hotel_id,text,author,date,approved) VALUES(:id,:hotel_id,:text,:author,:date,:approved)";
        $args = $comment;
        $this->query_result = $this->dbConn->query($query,$args);
        $this->dbConn->CloseConnection;
        return $this->query_result;
    }

    private function getAllHotelComments() {
        $query = "SELECT * FROM comments";
        $args = [];
        $this->query_result = $this->dbConn->query($query,$args);
        $this->dbConn->CloseConnection;
        return $this->query_result;
    }



    public function get_data() {

        if (property_exists($this->get_data,"hotel_id") && property_exists($this->get_data,"amount")) {

            $result = $this->getHotelComments($this->get_data->hotel_id, $this->get_data->amount);

            if (count($result) >= 1) {
                $this->responce["response"] = $result;
                $this->responce["status"] = "success";
            }
            else {
                $this->responce["response"] = "No data in database for requested hotel!";
                $this->responce["debug"] = $result;
                $this->responce["status"] = "error";
            }

        }
        else {
            $this->responce["response"] = "Incorrect search params!";
            $this->responce["status"] = "error";
        }

        return json_encode($this->responce);

    }

    public function insert_data() {
        $this->cleaner = new Clean();
        $comment_args = [];

        if (property_exists($this->insert_data,"hotel_id") && property_exists($this->insert_data,"text") && property_exists($this->insert_data,"author")) {
            $comment_args["id"] = null;
            $comment_args["hotel_id"] = $this->insert_data->hotel_id;
            $comment_args["text"] = $this->cleaner->simple_clean($this->insert_data->text);
            $comment_args["author"] = $this->cleaner->simple_clean($this->insert_data->author);
            $comment_args["date"] = $this->insert_data->date;
            $comment_args["approved"] = $this->insert_data->approved;

            $result = $this->insertNewComment($comment_args);

            if ($result) {
                $this->responce["response"] = "Comment was added!";
                $this->responce["status"] = "success";
            }
            else {
                $this->responce["response"] = "Insert data error!";
                $this->responce["debug"] = $result;
                $this->responce["status"] = "error";
            }

        }
        else {
            $this->responce["response"] = "Incorrect insertion params!";
            $this->responce["status"] = "error";
        }

        return json_encode($this->responce);

    }
}


if(gettype(json_decode($_POST["get_data"])) === "object") {
    $hotels = new CommentsController(json_decode($_POST["get_data"]));
    echo $hotels->get_data();
    die;
}
elseif(gettype(json_decode($_POST["insert_data"])) === "object") {
    $hotels = new CommentsController(null,json_decode($_POST["insert_data"]));
    echo $hotels->insert_data();
    die;
}
else {
    echo json_encode(["response" => "Invalid request params!", "status" => "error"] );
}