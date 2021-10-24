<?php //By WMProject1217
@ include("../config.php");
@ include("$Wemakeli_OS_Root/assets/wmui/wmuiinit.php");
echo "<head>";
if ($_GET['useruid'] == "") {
    $WMUI_Page_Class = "user";
    $WMUI_Page_Title = "个人主页";
    $wmui_backpath = "../";
if ($_COOKIE['useruid'] <> "") {
    $useruidw = $_COOKIE['useruid'];
} else {
    $useruidw = "-1";
}
$userinfofile = @ fopen("./" . $useruidw . "/userinfo.wmst", "r") or die("<title>Error 0x00000007</title>Error 0x00000007<br>User info load unsuccessful.<br>Maybe this user is not real.");
$tils_username = @ fgets($userinfofile);
$tils_addintime = @ fgets($userinfofile);
$tils_userid = @ fgets($userinfofile);
@ fclose($userinfofile);
$userinfofile = @ fopen("./" . $useruidw . "/usersettings.wmst", "r") or die("<title>Error 0x00000007</title>Error 0x00000007<br>User info load unsuccessful.<br>Maybe this user is not real.");
$tils_useraccout = @ fgets($userinfofile);
$tils_indexwords = @ fgets($userinfofile);
$tils_userlevel = @ fgets($userinfofile);
@ fclose($userinfofile);
$userspacesettings = @ fopen("./" . $useruidw . "/space.wmst", "r") or die("<title>Error 0x00000008</title>Error 0x00000008<br>This space visit disabled.<br>Maybe this user account has been locked.");
$tils_visitcontrol = @ fgets($userspacesettings);
@ fclose($userspacesettings);
$WMUI_Page_Class = "user";
$WMUI_Page_Title = "$tils_username";
$wmui_backpath = "../";
@ include("$Wemakeli_OS_Root/assets/wmui/pagehead.php");
echo "</head>";
echo "<body>";
@ include($Wemakeli_OS_Root . '/assets/wmui/style/vanilla/wmwidget.php');
echo "<style>.userimage{
    width:120px;
    height:120px;
}</style>";
echo "<img src='./" . $tils_userid . "/userimage.png' class=userimage></img>";
echo "<h3>$tils_username</h3>";
echo "<div>等级 : $tils_userlevel , 入站时间 : $tils_addintime , uid : $tils_userid</div>";
echo "<div>$tils_indexwords</div>";
echo "<div>此人发布的作品</div>";
echo "<pre>";
@ readfile("./" . $tils_userid . "/output.wmst");
echo "<br><b>Fatal error</b>:  Uncaught Error: Call to undefined function readlist() in C:\Wemakeli\user\index.php:41 Stack trace: #0 {main} thrown in <b>C:\Wemakeli\user\index.php</b> on line <b>114514</b><br>";
echo "</pre>";
} else {
$userinfofile = @ fopen("./" . $_GET['useruid'] . "/userinfo.wmst", "r") or die("<title>Error 0x00000007</title>Error 0x00000007<br>User info load unsuccessful.<br>Maybe this user is not real.");
$tils_username = @ fgets($userinfofile);
$tils_addintime = @ fgets($userinfofile);
$tils_userid = @ fgets($userinfofile);
@ fclose($userinfofile);
$userinfofile = @ fopen("./" . $_GET['useruid'] . "/usersettings.wmst", "r") or die("<title>Error 0x00000007</title>Error 0x00000007<br>User info load unsuccessful.<br>Maybe this user is not real.");
$tils_useraccout = @ fgets($userinfofile);
$tils_indexwords = @ fgets($userinfofile);
$tils_userlevel = @ fgets($userinfofile);
@ fclose($userinfofile);
$userspacesettings = @ fopen("./" . $_GET['useruid'] . "/space.wmst", "r") or die("<title>Error 0x00000008</title>Error 0x00000008<br>This space visit disabled.<br>Maybe this user account has been locked.");
$tils_visitcontrol = @ fgets($userspacesettings);
@ fclose($userspacesettings);
$WMUI_Page_Class = "user";
$WMUI_Page_Title = "$tils_username";
$wmui_backpath = "../";
@ include("$Wemakeli_OS_Root/assets/wmui/pagehead.php");
echo "</head>";
echo "<body>";
@ include($Wemakeli_OS_Root . '/assets/wmui/style/vanilla/wmwidget.php');
echo "<style>.userimage{
    width:120px;
    height:120px;
}</style>";
echo "<img src='./" . $tils_userid . "/userimage.png' class=userimage></img>";
echo "<h3>$tils_username</h3>";
echo "<div>等级 : $tils_userlevel , 入站时间 : $tils_addintime , uid : $tils_userid</div>";
echo "<div>$tils_indexwords</div>";
echo "<div>此人发布的作品</div>";
echo "<pre>";
@ readfile("./" . $tils_userid . "/output.wmst");
echo "<br><b>Fatal error</b>:  Uncaught Error: Call to undefined function readlist() in C:\Wemakeli\user\index.php:41 Stack trace: #0 {main} thrown in <b>C:\Wemakeli\user\index.php</b> on line <b>114514</b><br>";
echo "</pre>";
}
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php')=='1') {
    @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php');
}
?>