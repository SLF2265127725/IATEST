<?php
header("content-type:text/json;charset=utf-8");
$conn_string  =  "host=localhost port=5432 dbname=iadata user=postgres password=slf1739645445" ;
$dbconn = pg_connect($conn_string);

$sql =<<<EOF
      SELECT wendu,humidity from pytest;
EOF;


$ret = pg_query($dbconn, $sql);
if(!$ret){
    echo pg_last_error($dbconn);
    exit;
}

while($row = pg_fetch_assoc($ret)){
    //echo json_encode($row,JSON_UNESCAPED_UNICODE).' ';
    echo json_encode($row).' ';

}

pg_close($dbconn);
?>
