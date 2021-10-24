<?php 
header('Content-type:text/html;charset=utf8');
$danmaku=$_POST['danmaku'];
$danmakufile = fopen("./danmaku.wml", "a") or die("Can not write to danmaku database!");
$danmakuline = $danmaku . "\n";
fwrite($danmakufile, $danmakuline);
fclose($danmakufile);
?>