<?php include "../../config/db.php"; ?>
<?php
if (isset($_POST)) {

    $aResponse = [
        'status' => false

    ];

    $data = file_get_contents("php://input");
    $movieID = json_decode($data);

    $id =  $movieID->movieid;
    $imageName = $movieID->imageName;
    $path = "../../uploads/" . $imageName;
    $remove = unlink($path);

    $sql = "DELETE FROM movie_data WHERE id = '$id'";

    $res = mysqli_query($conn, $sql);
    if ($res == true) {

        $aResponse = [
            'status' => true
            

        ];
    } else {
        $aResponse = [
            'status' => false
            

        ];
    }

    header('Content-Type: application/json');
echo json_encode($aResponse);
}






?>
