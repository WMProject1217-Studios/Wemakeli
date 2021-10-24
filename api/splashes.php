<?php
echo "<pre>";
$splashesfile = file("../assets/txt/splashes.txt");
$indexn = rand(0,count($splashesfile));
if ($splashesfile[$indexn]<>"") {
    echo str_replace(array("\r\n", "\r", "\n"),"",$splashesfile[$indexn]);
} else {
    echo "真的有人会看这个吗？";
}
echo "</pre>";
?>