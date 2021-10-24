<?php
if ($_GET['noplace'] == 1) {
    echo "<link rel='stylesheet' href='../assets/wmui/style/vanilla/night.css'>";
    echo "<pre style='font-size: 24px;'>";
    $handle = fopen("X:/WMProject1217/WMBot/Memory/textout.wmst", "r");
    while (!feof ($handle)) {
        $buffer = fgets($handle);
        echo $buffer;
    }
    fclose ($handle);
    echo "</pre>";
} else {
    echo "<link rel='stylesheet' href='../assets/wmui/style/vanilla/night.css'>";
    echo "<pre style='font-size: 24px;'>";
    $handle = fopen("X:/WMProject1217/WMBot/Memory/textout.wmst", "r");
    while (!feof ($handle)) {
        $buffer = fgets($handle);
        echo str_replace(">",")",str_replace("<","(",$buffer));
    }
    fclose ($handle);
    echo "</pre>";
}
?>