<?php
echo "<pre>";
include('../assets/wmscript/wmscript.php');
$text = preg_replace('{^\xEF\xBB\xBF|\x1A}', '', $_GET['code']);
$text = preg_replace('{\r\n?}', "\n", $text);
$text = str_replace('//endl//',"\n",$text);
$text = str_replace('//rem//',"##",$text);
echo wmscript($text);
echo "</pre>";
?>