<?php include "../../config/db.php"; ?>

<?PHP

    $aResponse = [
        'status' => false,
        'message' => 'Data not saved!',
        'data' => []
    ];

    if (isset($_POST)) {
        $data = file_get_contents("php://input");
        $userData = json_decode($data);

        $name =  $userData->name;
        

        $sql = "INSERT INTO category SET name='$name'";
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