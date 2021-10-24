<?php //By WMProject1217
@ include("../config.php");
@ include("$Wemakeli_OS_Root/assets/wmui/wmuiinit.php");
$WMUI_Page_Class = "read";
$WMUI_Page_Title = "专栏";
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
echo "<h3>专栏列表</h3>";
echo "<pre>";
$readread = -1;
$readendfile = @ fopen("./readend.wmst", "r") or die("<title>Error 0x00000007</title>Error 0x00000007<br>Page data load unsuccessful.");
$readendun = @fgets($readendfile);
@ fclose($readendfile);
$readendsplit = explode(';',$readendun);
$readend = $readendsplit[0];
while ($readread<>$readend) {
    $readinfofile = @ fopen("./wr$readread/info.wmst", "r");
    $title = @ fgets($readinfofile);
    $outputtime = @ fgets($readinfofile);
    $uploadmaster = @ fgets($readinfofile);
    $readnumber= @ fgets($readinfofile);
    @ fclose($readinfofile);
    $readnumber = str_replace(array("\r\n", "\r", "\n"), "", $readnumber);
    $title = str_replace(array("\r\n", "\r", "\n"), "", $title);  
    $outputtime = str_replace(array("\r\n", "\r", "\n"), "", $outputtime);  
    $uploadmaster = str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);  
    if ($outputtime=="") {
        goto offechooutline;
    }
    echo "<a href='/read/$readnumber/'>[wr$readread]    $title [$outputtime][$uploadmaster]</a><br>";
    offechooutline:
    $readread = $readread + 1;
}
echo "</pre>";
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php')=='1') {
    @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php');
}
?>