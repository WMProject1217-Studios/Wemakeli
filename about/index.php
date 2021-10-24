<?php //By WMProject1217
$WMConfig_Request_Base = TRUE;
$WMConfig_Request_Plugin = TRUE;
$WMConfig_Request_Style = TRUE;
@ include("../config.php");
@ include("$Wemakeli_OS_Root/assets/wmui/wmuiinit.php");
$WMUI_Page_Class = "about";
$WMUI_Page_Title = "关于";
$WMUI_Page_JavaScript_Looker = 1;
$wmui_backpath = "../";
echo "<head>";
@ include("$Wemakeli_OS_Root/assets/wmui/pagehead.php");
echo "</head>";
echo "<body>";
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/wmwidget.php')=='1') {
    @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/wmwidget.php');
} else {
    @ include($Wemakeli_OS_Root . '/assets/wmui/wmwidget.php');
}
echo "<h3>$Wemakeli_Web_Name</h3>";
echo "<table border='1'>";
echo "<tr>";
echo "<td>";
echo "<h3>正在建设 " . $Wemakeli_Web_Name. " ...</h3>";
echo "<div class='WMUI_Page_Background_a'></div>";
echo "<button class='wmuibutton' onclick='WMUIBALLABOUT()'>一个普通的按钮</button><br>";
print "Build on " . "Wemakeli Danmaku Video Website System" . " [Version " . Wemakeli_System_Version_Main . "." . Wemakeli_System_Version_Second . " Build " . Wemakeli_System_Version_Build . "]" . "<br>By WMProject1217<br>";
print "已进入第 2 开发阶段,在此阶段主要将修复特性以及修复样式<br>";
print "奥利给!淦就完了!<br>我们遇到什么困难,也不要怕!微笑着面对它!消除恐惧的最好办法就是面对恐惧!坚持,才是胜利!加油,奥利给!<br>";
print "AMD YES<br>LBWNB LBWNB LBWNB LBWNB LBWNB LBWNB LBWNB LBWNB LBWNB LBWNB LBWNB LBWNB LBWNB LBWNB<br>";
echo "<img src='$Wemakeli_Web_Root/library/image/common/wmproject1217.png'> <img src='$Wemakeli_Web_Root/library/image/common/wemakeli.png'>";
echo "</td>";
echo "</tr>";
echo "</table>";
echo "<pre>";
readfile('./about.wmexsr');
echo "</pre>";
echo "<h3>开发日志</h3>";
readfile("$Wemakeli_OS_Root/assets/txt/mainmsg.txt");
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php')=='1') {
    @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php');
}
?>