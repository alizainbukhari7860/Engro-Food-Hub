<?php
include '../db.php';



$json = array();
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $pnum=$_GET['pnum'];
    $password=$_GET['password'];

        $sql = "SELECT * FROM `members` where PersonalNumber=$pnum and Password='$password'";

        $sth = $db->query($sql);

        if ($sth ) {
            $result = mysqli_fetch_object($sth);
            
            
            $jsonstring = json_encode($result);
            echo $jsonstring;
        }


         else {
            $json[] = array(
                "Message" => 'Error User Not Found'
            );
            $jsonstring = json_encode($json);
            echo $jsonstring;
        }
    }