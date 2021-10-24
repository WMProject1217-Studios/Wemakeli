<?php //By WMProject1217
@ include("../config.php");
@ include("$Wemakeli_OS_Root/assets/wmui/wmuiinit.php");
$WMUI_Page_Class = "audio";
$WMUI_Page_Title = "音频";
$WMUI_Page_JavaScript_Looker = 1;
$wmui_jumpoffheadbar = 1;
echo "<head>";
@ include("$Wemakeli_OS_Root/assets/wmui/pagehead.php");
echo "</head>";
echo "<body>";
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/wmwidget.php')=='1') {
    @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/wmwidget.php');
} else {
    @ include($Wemakeli_OS_Root . '/assets/wmui/wmwidget.php');
}
echo "<h3>音频列表</h3>";
echo "<pre>";
$audioread = -1;
$audioendfile = @ fopen("./audioend.wmst", "r") or die("<title>Error 0x00000007</title>Error 0x00000007<br>Page data load unsuccessful.");
$audioendun = @ fgets($audioendfile);
@ fclose($audioendfile);
$audioendsplit = explode(';',$audioendun);
$audioend = $audioendsplit[0];
while ($audioread<>$audioend) {
    $audioinfofile = @ fopen("./wa$audioread/info.wmst", "r");
    $title = @ fgets($audioinfofile);
    $outputtime = @ fgets($audioinfofile);
    $uploadmaster = @ fgets($audioinfofile);
    $audionumber= @ fgets($audioinfofile);
    @ fclose($audioinfofile);
    $audionumber = str_replace(array("\r\n", "\r", "\n"), "", $audionumber);
    $title = str_replace(array("\r\n", "\r", "\n"), "", $title);  
    $outputtime = str_replace(array("\r\n", "\r", "\n"), "", $outputtime);  
    $uploadmaster = str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);  
    if ($outputtime=="") {
        goto offechooutline;
    }
    echo "<a href='/audio/$audionumber/'>[wa$audioread]    $title [$outputtime][$uploadmaster]</a><br>";
    offechooutline:
    $audioread = $audioread + 1;
}
echo "</pre>";
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php')=='1') {
    @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php');
}
?>