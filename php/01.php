<?php
$conn_string  =  "host=localhost port=5432 dbname=iadata user=postgres password=slf1739645445" ;
$dbconn = pg_connect($conn_string);

$sql =<<<EOF
      SELECT wendu from pytest;
EOF;

$results = array();

$ret = pg_query($dbconn, $sql);
if(!$ret){
    echo pg_last_error($dbconn);
    exit;
}
while($row = pg_fetch_array($ret)){
    $arr1=round($row['wendu'],2);
    $results[]=$arr1;
}
if($results){
    echo json_encode($results);
}else{
    echo pg_result_error();
}

pg_close($dbconn);

?>