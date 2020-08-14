<?php
// include '../usersession.php';
include '../db.php';

$sql1 = "SELECT * FROM `shift` WHERE `name` like 'Breakfast'";
$sth1 = $db->query($sql1);
$result1 = mysqli_fetch_array($sth1);
$breakfastStartHour = $result1['startHour'];
$breakfastEndtHour = $result1['endHour'];
$breakfastStartMinute = $result1['startMinute'];
$breakfastEndtMinute = $result1['endMinute'];

$sql1 = "SELECT * FROM `shift` WHERE `name` like 'Dinner'";
$sth1 = $db->query($sql1);
$result1 = mysqli_fetch_array($sth1);
$dinnerStartHour = $result1['startHour'];
$dinnerEndtHour = $result1['endHour'];
$dinnerStartMinute = $result1['startMinute'];
$dinnerEndtMinute = $result1['endMinute'];

$sql1 = "SELECT * FROM `shift` WHERE `name` like 'Lunch'";
$sth1 = $db->query($sql1);
$result1 = mysqli_fetch_array($sth1);
$lunchStartHour = $result1['startHour'];
$lunchEndtHour = $result1['endHour'];
$lunchStartMinute = $result1['startMinute'];
$lunchEndtMinute = $result1['endMinute'];

$sql1 = "SELECT * FROM `shift` WHERE `name` like 'Snacks'";
$sth1 = $db->query($sql1);
$result1 = mysqli_fetch_array($sth1);
$snacksStartHour = $result1['startHour'];
$snacksEndtHour = $result1['endHour'];
$snacksStartMinute = $result1['startMinute'];
$snacksEndtMinute = $result1['endMinute'];


$json = array();
date_default_timezone_set("Asia/Karachi");
$d = '13';
$m = '0';
//$d = date('H');
//$m = date('i');


if ($d >= $breakfastStartHour and $d <= $breakfastEndtHour ) {

    $sql = "SELECT item.id as ITEMID, item.Name as ITEMNAME,item.Price,item.Category,item.PreparationTime,item.Calories,categories.name as CATNAME, categories.*,menu.*,time.*,shift.* FROM `item` JOIN categories on categories.ID=item.Category JOIN menu on menu.ID=categories.Menu join time on time.MenuID=menu.ID join shift on shift.ID=time.Shift where shift.startHour>=$breakfastStartHour and shift.endHour<=$breakfastEndtHour and shift.endMinute<=$breakfastEndtMinute and shift.startMinute>=$breakfastStartMinute";
    $sth = $db->query($sql);
    $rowcount = $sth->num_rows;
    if ($rowcount > 0) {
        while ($result = mysqli_fetch_array($sth)) {

            $json[] = array(
                "ID" => $result['ITEMID'], "name" => $result['ITEMNAME'],
                "Price" => $result['Price'], "PreparationTime" => $result['PreparationTime'],"Calories" => $result['Calories'],
                "Category" => $result['CATNAME']
            );
        }


        $jsonstring = json_encode($json);
        echo $jsonstring;
    } else {
        $json[] = array(
            "Message" => 'Error Data Not Found'
        );
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
} else if ($d >= $dinnerStartHour and $d <= $dinnerEndtHour ) {

    $sql = "SELECT item.id as ITEMID, item.Name as ITEMNAME,item.Price,item.Category,item.PreparationTime,item.Calories,categories.name as CATNAME, categories.*,menu.*,time.*,shift.* FROM `item` JOIN categories on categories.ID=item.Category JOIN menu on menu.ID=categories.Menu join time on time.MenuID=menu.ID join shift on shift.ID=time.Shift where shift.startHour>=$dinnerStartHour and shift.endHour<=$dinnerEndtHour and shift.endMinute<=$dinnerEndtMinute and shift.startMinute>=$dinnerStartMinute";
    $sth = $db->query($sql);
    $rowcount = $sth->num_rows;
    if ($rowcount > 0) {
        while ($result = mysqli_fetch_array($sth)) {

            $json[] = array(
                "ID" => $result['ITEMID'], "name" => $result['ITEMNAME'],
                "Price" => $result['Price'], "PreparationTime" => $result['PreparationTime'],"Calories" => $result['Calories'],
                "Category" => $result['CATNAME']
            );
        }


        $jsonstring = json_encode($json);
        echo $jsonstring;
    } else {
        $json[] = array(
            "Message" => 'Error Data Not Found'
        );
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
} else if ($d >= $lunchStartHour and $d <= $lunchEndtHour) {

    $sql = "SELECT item.id as ITEMID, item.Name as ITEMNAME,item.Price,item.Category,item.PreparationTime,item.Calories,categories.name as CATNAME, categories.*,menu.*,time.*,shift.* FROM `item` JOIN categories on categories.ID=item.Category JOIN menu on menu.ID=categories.Menu join time on time.MenuID=menu.ID join shift on shift.ID=time.Shift where shift.startHour>=$lunchStartHour and shift.endHour<=$lunchEndtHour and shift.endMinute<=$lunchEndtMinute and shift.startMinute>=$lunchStartMinute";
    $sth = $db->query($sql);
    $rowcount = $sth->num_rows;
    if ($rowcount > 0) {
        while ($result = mysqli_fetch_array($sth)) {

            $json[] = array(
                "ID" => $result['ITEMID'], "name" => $result['ITEMNAME'],
                "Price" => $result['Price'], "PreparationTime" => $result['PreparationTime'],"Calories" => $result['Calories'],
                "Category" => $result['CATNAME']
            );
        }


        $jsonstring = json_encode($json);
        echo $jsonstring;
    } else {
        $json[] = array(
            "Message" => 'Error Data Not Found'
        );
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
} else if ($d >= $snacksStartHour and $d <= $snacksEndtHour ) {

    $sql = "SELECT item.id as ITEMID, item.Name as ITEMNAME,item.Price,item.Category,item.PreparationTime,item.Calories,categories.name as CATNAME, categories.*,menu.*,time.*,shift.* FROM `item` JOIN categories on categories.ID=item.Category JOIN menu on menu.ID=categories.Menu join time on time.MenuID=menu.ID join shift on shift.ID=time.Shift where shift.startHour>=$snacksStartHour and shift.endHour<=$snacksEndtHour and shift.endMinute<=$snacksEndtMinute and shift.startMinute>=$snacksStartMinute";
    $sth = $db->query($sql);
    $rowcount = $sth->num_rows;
    if ($rowcount > 0) {
        while ($result = mysqli_fetch_array($sth)) {

            $json[] = array(
                "ID" => $result['ITEMID'], "name" => $result['ITEMNAME'],
                "Price" => $result['Price'], "PreparationTime" => $result['PreparationTime'],"Calories" => $result['Calories'],
                "Category" => $result['CATNAME']
            );
        }


        $jsonstring = json_encode($json);
        echo $jsonstring;
    } else {
        $json[] = array(
            "Message" => 'Error Data Not Found'
        );
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
} else {
    $json[] = array(
        "Message" => 'Error! This is Not a Time for Breakfast,Lunch,Snacks or Dinner'
    );
    $jsonstring = json_encode($json);
    echo $jsonstring;
}