<?php

    include_once '../helpers/ConnectToDB.php';

    function getUsers($sort_order = 'ASC'){
        $conn = connectToDB();
        $data = $conn -> query("SELECT * FROM users ORDER BY created_at $sort_order");
        return $data -> fetchAll();
    }

?>