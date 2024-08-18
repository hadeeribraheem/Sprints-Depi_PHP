<?php
    include_once '../helpers/ConnectToDB.php';

    function getCategories($sort_order = 'ASC'){
        $conn = connectToDB();
        $data = $conn -> query("SELECT * FROM categories ORDER BY created_at $sort_order");
        return $data -> fetchAll();
    }

?>