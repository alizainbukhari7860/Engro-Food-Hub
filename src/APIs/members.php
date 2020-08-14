<?php
include '../db.php';


$json = array();

        $sql = "SELECT * FROM `members` WHERE `isDelete`=0";


        $sth = $db->query($sql);

        $rowcount = $sth->num_rows;
        if ($rowcount > 0) {
           
            while ($result = mysqli_fetch_array($sth)) {


            $json[] = array(
                "ID" => $result['ID'], "PersonalNumber" => $result['PersonalNumber'],
                "Username" => $result['Username'], "Designation" => $result['Designation'],
                "Address" => $result['Address'], "Email" => $result['Email'], "PhoneNumber" => $result['PhoneNumber'],
                "UserVehicleRegistrationNo" => $result['UserVehicleRegistrationNo'],
                "Password" => $result['Password']

            );
        }


            $jsonstring = json_encode($json);
            echo $jsonstring;
        } else {
            $json[] = array(
                "Message" => 'Error User Not Found'
            );
            $jsonstring = json_encode($json);
            echo $jsonstring;
        }