<?php include "../../config/db.php"; ?>
<?php 

if (isset($_POST)) {

    $aResponse = [
        'status' => false,
        'message' => ''
        
    ];
    
    $data = file_get_contents("php://input");
    $categoryID = json_decode($data);

    $id =  $categoryID->catID;
   
    $sql = "DELETE FROM category WHERE id = '$id'";

    $res = mysqli_query($conn,$sql);
    if ($res==true) {

        $aResponse = [
            'status' => true,
            'message' => 'User Delete'
            
        ];

    } else {
        $aResponse = [
            'status' => false,
            'message' => 'User not Delete'
            
        ];
    }

    header('Content-Type: application/json');
    echo json_encode($aResponse);
}

?>