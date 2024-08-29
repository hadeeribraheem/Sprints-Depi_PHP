<?php
include_once '../models/CategoriesModel.php';

// Determine sorting order from form submission
$sort_order = isset($_POST['sort']) && $_POST['sort'] == 'DESC' ? 'DESC' : 'ASC';

$categories = getCategories($sort_order);

// Determine the new sort order for the next button click
$new_sort_order = $sort_order == 'ASC' ? 'DESC' : 'ASC';
$button_label = $sort_order == 'ASC' ? 'Sort Descending' : 'Sort Ascending';

$employee_access = ['name','description','created_at'];

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
<body>
    <div class="container">
        <?php if(isset($categories) && sizeof($categories) > 0) { ?>
            <form method="post" class="mt-5 mb-3">
                <input type="hidden" name="sort" value="<?php echo $new_sort_order; ?>">
                <button type="submit" class="btn btn-primary"><?php echo $button_label; ?></button>
            </form>
            <table class="table table-bordered table-striped table-hover">
                <thead>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Created at</td>
                </thead>
                <tbody>
                    <?php
                    foreach($categories as $category){
                        echo '<tr>';
                        foreach($employee_access as $access){
                            echo '<td>'.$category[$access].'</td>';
                        }
                        echo '</tr>';
                    }
                    ?>
                </tbody>
            </table>
        <?php } else {
            echo '<p class="alert alert-danger text-center m-3">There is no data</p>';
        }?>
    </div>
</body>
</html>
