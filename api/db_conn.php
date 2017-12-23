<?php
define('HOST_NAME', 'localhost');
define('HOST_LOGIN', 'root');
define('HOST_PASSWORD', '');
define('BASE_NAME', 'tyrist');

require(dirname(__FILE__)."/DB.class.php");

$DB = new Db(HOST_NAME, BASE_NAME, HOST_LOGIN, HOST_PASSWORD );