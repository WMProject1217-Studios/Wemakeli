<?php
echo "<pre>";
include('./wmscript.php');
echo wmscript(file_get_contents('test.wmscript'));
echo "</pre>";
?>