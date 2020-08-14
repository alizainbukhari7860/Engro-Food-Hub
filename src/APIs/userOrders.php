
<?php
include '../db.php';
date_default_timezone_set("Asia/Karachi");
$date =date('m');
$json = array();

        $sql = "SELECT engro.order.id,members.PersonalNumber,members.Username,GROUP_CONCAT(item.Name) as items,GROUP_CONCAT(item.Price) as prices,SUM(item.Price) as bill,GROUP_CONCAT(orderdetails.Quantity) as quantities,GROUP_CONCAT(item.Category) as categories,GROUP_CONCAT(item.PreparationTime) as pTime,engro.order.Date ,engro.order.User FROM engro.order join members on engro.order.User = engro.members.ID join orderdetails on engro.Order.ID=engro.orderdetails.Order join item on item.ID=orderdetails.Item WHERE engro.order.Served=0 and Month(CAST(engro.order.Date as DATE)) = '$date' GROUP by engro.order.id";


        $sth = $db->query($sql);

        $rowcount = $sth->num_rows;
        if ($rowcount > 0) {
           
            while ($result = mysqli_fetch_array($sth)) {


            $json[] = array(
                "ID" => $result['id'], "PersonalNumber" => $result['PersonalNumber'],
                "Username" => $result['Username'], "items" => $result['items'],
                "prices" => $result['prices'], "quantities" => $result['quantities'], "categories" => $result['categories'],
                "pTime" => $result['pTime'],
                "Date" => $result['Date'],
                "User" => $result['User'],
                "Bill" => $result['Bill']

            );
        }


            $jsonstring = json_encode($json);
            echo $jsonstring;
        } else {
            $json[] = array(
                "Message" => 'No orders this month'
            );
            $jsonstring = json_encode($json);
            echo $jsonstring;
        }

        ?>