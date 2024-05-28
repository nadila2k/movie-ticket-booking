<?php include "../../config/db.php"; ?>

<?php 
function index($conn) {

    $categoryData = [];

    // 1. Query all data from db
    $sql = "SELECT * FROM category"; 
    $res = mysqli_query($conn,$sql);
    while ($rows=mysqli_fetch_assoc($res)) {
        $categoryData[] = $rows;
    }

    header('Content-Type: application/json');
        echo json_encode($categoryData);

}

index($conn); 

?>

