<?php //By WMProject1217
@ include("../config.php");
@ include("$Wemakeli_OS_Root/assets/wmui/wmuiinit.php");
$WMUI_Page_Class = "life";
$WMUI_Page_Title = "生活";
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
?>
<h3>生活</h3>
[狗头] [离线使用]
<a href='./yuzu/'>合成大柚子</a><br>
[狗头] [离线使用]
<a href='./wm00/'>[WM00] Retworld for PHP</a><br>
[狗头] [离线使用]
<a href='../active/demo/audio/'>早期版本Wemakeli工程上的Audio DEMO</a><br>
[狗头] [在线使用]
<a href='../active/sfg/'>Create skin files for SkinsRestorer!</a><br>
[狗头] [离线使用]
<a href='../active/minecraftplus/'>Thank you for choosing Minecraft Plus! as your primary source of entertainment!</a><br>
[狗头] [离线使用]
<a href='../active/idnaconvert/example.php'>IDNA Convert</a><br>
[狗头] [离线使用]
<a href='../active/wil3d/'>WAITING IN LINE 3D</a><br>
[狗头] [离线使用]
<a href='../active/tinysynth/soundedit.html'>webaudio-tinysynth</a><br>
<?php
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php')=='1') {
    @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php');
}
?>