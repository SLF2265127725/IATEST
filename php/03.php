<?php
$conn_string  =  "host=localhost port=5432 dbname=iadata user=postgres password=slf1739645445" ;
$dbconn = pg_connect($conn_string);

$sql =<<<EOF
      SELECT time,wendu from pytest order by time desc limit 1;
EOF;

$results = array();

$ret = pg_query($dbconn, $sql);
if(!$ret){
    echo pg_last_error($dbconn);
    exit;
}
while($row = pg_fetch_array($ret)){
    $rzTime = strtotime($row['time']);
    $rzH = strftime('%H',$rzTime);
    $rzM = strftime('%M',$rzTime);
    $rzS = strftime('%S',$rzTime);
    $rzmonth = strftime('%m',$rzTime);
    $rzD = strftime('%d',$rzTime);
    $rzY = strftime('%Y',$rzTime);
    //将时间转换为时间戳
    $jsonArray = array(mktime($rzH,$rzM,$rzS,$rzmonth,$rzD,$rzY)*1000,round($row['wendu'],3));
    //文件输出为设置为 JSON
    header('Content-type: text/json');
    echo json_encode($jsonArray);
}
pg_close($dbconn);

?>
