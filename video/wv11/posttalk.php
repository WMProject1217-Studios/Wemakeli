<?php
$useruid = $_COOKIE['useruid'];
$usertalk = $_POST['usertalk'];
$timesc = (date('Y') - 1616) * 365.25 + (date('n') - 12) * (365.25 / 12) + (date('j') - 17);
$timesc = $timesc * 24 * 60 * 60;
$timesc = $timesc + (date('G')- 7) * 60 * 60 + (date('i') - 12) * 60 + date('s');
$timesc = $timesc * 1000;
$timesc = floor($timesc / 1024);
$ssc = ($timesc / 32 - floor($timesc / 32)) * 32;
$timesc = floor($timesc / 32) + 12;
$msc = ($timesc / 256 - floor($timesc / 256)) * 256;
$timesc = floor($timesc / 256) + 7;
$hsc = ($timesc / 64 - floor($timesc / 64)) * 64;
$timesc = floor($timesc / 64) + 17;
$dsc = ($timesc / 128 - floor($timesc / 128)) * 128;
$timesc = floor($timesc / 128) + 12;
$mosc = ($timesc / 64 - floor($timesc / 64)) * 64;
$timesc = floor($timesc / 64);
$ysc = $timesc + 1616;
$timesc = $ysc . "/" . $mosc . "/" . $dsc . "-" . $hsc . ":" . $msc . ":" . $ssc;
$text = "\n{" . '"authorid":"' . $useruid . '","time":"' . $timesc . '","data":"' . $usertalk . '","parent":"NULL"' . "}";
echo $text;
$filename = fopen("talk.json", "a");
fwrite($filename, $text);
?>
<meta http-equiv='refresh' content=1;url='./index.php'>