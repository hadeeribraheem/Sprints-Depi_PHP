<?php

    include_once '../helpers/ConnectToDB.php';

    function getOrders($sort_order = 'ASC'){
        $conn = connectToDB();
        $data = $conn -> query("SELECT * FROM orders ORDER BY orderDate $sort_order");
        return $data -> fetchAll();
    }

?>