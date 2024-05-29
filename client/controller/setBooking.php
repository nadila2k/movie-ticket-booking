<?php include "../../config/db.php"; ?>

<?php

$aResponse = [
    'status' => false,
    'message' => 'Data not saved!',
    'data' => []
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents("php://input");
    $userData = json_decode($data, true);

    if (isset($userData['seatNo']) && isset($userData['mId'])) {
        $seatArray = $userData['seatNo'];
        $movie_id = $userData['mId'];
        $seat_no = implode(",", $seatArray);

        $sql = "INSERT INTO booking_tbl SET filmID='$movie_id', seatNum='$seat_no'";
        $res = mysqli_query($conn, $sql);

        if ($res) {
            $aResponse = [
                'status' => true,
                'message' => 'Booking saved successfully'
            ];
        } else {
            $aResponse = [
                'status' => false,
                'message' => 'Failed to save booking'
            ];
        }
    } else {
        $aResponse = [
            'status' => false,
            'message' => 'Invalid input data'
        ];
    }

    header('Content-Type: application/json');
    echo json_encode($aResponse);
}
?>
