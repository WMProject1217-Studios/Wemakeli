<?php //By WMProject1217
@ include("../config.php");
@ include("$Wemakeli_OS_Root/assets/wmui/wmuiinit.php");
$WMUI_Page_Class = "talk";
$WMUI_Page_Title = "聊天";
$WMUI_Page_JavaScript_Looker = 1;
$wmui_backpath = "../";
$wmui_jumpoffheadbar = 1;
$wmui_jumpoffbottombar = 1;
echo "<head>";
@ include("$Wemakeli_OS_Root/assets/wmui/pagehead.php");
echo "</head>";
echo "<body>";
?>
<style>
.WMTalk_Leftbar_Backer {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 30%;
    /*max-width: 30%;*/
    height: 100%;
    background-color: #66CCFF;
}
.WMTalk_Rightbar_Backer {
    position: absolute;
    top: 0px;
    left: 30%;
    width: 70%;
    height: 100%;
    background-color: #39C5BB;
}
</style>
<div class="WMTalk_Leftbar_Backer">
</div>
<div class="WMTalk_Rightbar_Backer">
</div>
<?php
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php')=='1') {
    @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php');
}
?>