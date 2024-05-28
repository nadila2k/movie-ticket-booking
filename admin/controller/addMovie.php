<?php
include "../../config/db.php";

$aResponse = [
    'status' => false,
    'message' => 'Data not saved!',
    'data' => []
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    if (isset($_POST['name'], $_POST['price'], $_POST['description'], $_POST['category'], $_POST['available'], $_FILES['image'])) {
        $name =  $_POST['name'];
        $price =  $_POST['price'];
        $description =  $_POST['description'];
        $category =  $_POST['category'];
        $available = $_POST['available']; 
        
        $image = $_FILES['image'];
        $imageName = $image['name'];
        $imagePath = '../../uploads/' . basename($image['name']);
        
        if (move_uploaded_file($image['tmp_name'], $imagePath)) {
            
            $sql = "INSERT INTO movie_data (name, price, description, category, image, available) VALUES ('$name', '$price', '$description', '$category', '$imageName', '$available')"; // Updated SQL query
            $res = mysqli_query($conn, $sql);

            if ($res) {
                $aResponse = [
                    'status' => true,
                    'message' => 'Movie added successfully!',
                    'data' => ['id' => mysqli_insert_id($conn)]
                ];
            } else {
                $aResponse['message'] = 'Database query failed!';
            }
        } else {
            $aResponse['message'] = 'Image upload failed!';
        }
    } else {
        $aResponse['message'] = 'Invalid input!';
    }

    header('Content-Type: application/json');
    echo json_encode($aResponse);
}
?>
