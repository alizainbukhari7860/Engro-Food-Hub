<?php
include '../db.php';
date_default_timezone_set("Asia/Karachi");
$d = date("Y-m-d H:i:s");

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    $user = $_POST['userId'];
    $bill = $_POST['bill'];
    $preparationtime = $_POST['pTime'];
    $item_lenght = $_POST["itemLength"];
    $item = $_POST["itemArray"];

    $sql = "INSERT INTO `order` (`ID`, `User`, `Date`, `Bill`, `Served`, `TotalPreparationTime`) VALUES (NULL, '$user', '$d', '$bill', '0', '$preparationtime') ";
    $sth = $db->query($sql);
    $sql1 = "SELECT * FROM `order` WHERE `User`=$user ORDER BY ID Desc";
    $sth1 = $db->query($sql1);

    $result = mysqli_fetch_array($sth1);
    $order = $result["ID"];

    for ($row = 0; $row < $item_lenght; $row++) {
        $itemname = $item[$row][0];
        $itemquantity = $item[$row][1];
        echo $itemname;
        echo $itemquantity;
        echo $order;
        $sql1 = "INSERT INTO `orderdetails` (`ID`, `Order`, `Item`, `Quantity`) VALUES (NULL, '$order', '$itemname','$itemquantity')";
        $sth1 = $db->query($sql1);
    }
}
