<?php
header('Content-type: application/json; charset=utf-8');
require_once "db_conn.php";
class HotelsController
{
    private $dbConn;
    private $hotels = [];
    private $data_type = '';

    function __construct($data_type)
    {
        global $DB;
        $this->dbConn = $DB;
        $this->data_type = $data_type;
    }

    private function getHotelsData() {
        $query = "SELECT * FROM hotels";
        $args = [];
        $this->hotels = $this->dbConn->query($query,$args);
        $this->dbConn->CloseConnection;
        return $this->hotels;
    }

    public function getHotelsJson() {
        return json_encode($this->getHotelsData());
    }

    public function get_data() {
        switch ($this->data_type) {
            case "all_hotels":
                return json_encode(["response" => $this->getHotelsJson(), "status" => "success"] );
        }
        return json_encode(["response" => "Get property doesn\"t exist!", "status" => "error"] );
    }
}



if  (isset($_POST["get_data"])) {
    $hotels = new HotelsController($_POST["get_data"]);
    echo $hotels->get_data();
    die;
}
else {
    echo json_encode(["response" => null, "status" => "error"] );
}
//echo $hotels->getHotels();
