<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <form action="orders.php" method="post">
        <input type="text" name="itemArray[0][0]" placeholder="item name">
        <input type="text" name="itemArray[0][1]" placeholder="item QUANTITY">
        <input type="text" name="itemArray[1][0]" placeholder="item name">
        <input type="text" name="itemArray[1][1]" placeholder="item QUANTITY">
        <input type="text" name="itemArray[2][0]" placeholder="item name">
        <input type="text" name="itemArray[2][1]" placeholder="item QUANTITY">
        <input type="text" name="itemLength" VALUE="3" placeholder="TOTAL ITEM THERE THEY ARE 3">
        <input type="text" name="cTime" placeholder="CANCELATION TIME BASED ON PREPARATION TIME">
        <input type="text" name="pTime" id="SUM OF ITEM PREPARATION TIME">
        <input type="text" name="bill" id="SUM OF PRICE ">
        <input type="text" name="userId" placeholder="fOREGIN KEY OF USER ID">
        <button type="submit">SUBMIT</button>
    </form>
</body>

</html>