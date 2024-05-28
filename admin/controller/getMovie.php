<?php include "../../config/db.php"; ?>

<?php
function getMovie($conn)
{

    $movie = [];

    $sql = "SELECT * FROM movie_data";
    $res = mysqli_query($conn, $sql);
    while ($rows = mysqli_fetch_assoc($res)) {
        $movie[] = $rows;
    }

    header('Content-Type: application/json');
    echo json_encode($movie);
}

getMovie($conn);

?>