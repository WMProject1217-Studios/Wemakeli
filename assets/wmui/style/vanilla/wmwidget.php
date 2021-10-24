<?php
/*@ include($Wemakeli_OS_Root . '/assets/wmui/language/zh-cn/config.php');*/
//Draw UI
headbar:
if ($WMUI_Page_JumpOff_Headbar=="1"){
    goto bottombar;
}
echo "<table class='wmuiheadbar' id='wmuiheadbar'>";
echo "<tr>";
echo "<td>";
if ($WMUI_Page_Class<>"mainpage") {
    if ($_SERVER['HTTP_REFERER']<>"") {
        if (stripos($_SERVER['HTTP_REFERER'],"postlogon.php") == false) {
            if (stripos($_SERVER['HTTP_REFERER'],"postjoin.php") == false) {
                echo "<a class='wmuiheadbarbackbutton' href='" . $_SERVER['HTTP_REFERER'] . "'><</a>";
            }
        } else {
            echo "<a class='wmuiheadbarbackbutton' href='$WMUI_Page_BackPath'><</a>";
        }
    } else {
    echo "<a class='wmuiheadbarbackbutton' href='$WMUI_Page_BackPath'><</a>";
    }
    echo "<a class='wmuiheadbartimeblock' id='wmuiheadbartimeblock'>See this text means js error</a>";
}
echo "<div class='wmuiheadbartitle'>$WMUI_Page_Title</div>";
echo "</td>";
echo "</tr>";
echo "</table>";
bottombar:
if ($WMUI_JumpOff_Bottombar =="1"){
    goto enddrawui;
}
echo "<table class='wmuibottombar' id='wmuibottombar'>";
echo "<tr>";
echo "<td>";
if ($WMUI_Page_Class=="about") {
    echo "<a href='$Wemakeli_Web_Root/about/'><img src='$Wemakeli_Web_Root/library/image/common/websitelogotp.png' class='wmuibottombarlogo' title='$langstr_WMUI_bar_about Wemakeli'></img></a>";
} else {
    echo "<a href='$Wemakeli_Web_Root/about/'><img src='$Wemakeli_Web_Root/library/image/common/websitelogo.png' class='wmuibottombarlogo' title='$langstr_WMUI_bar_about Wemakeli'></img></a>";
}
if ($wmsys_userlogon=="1") {
    echo "<a href='" . 'javascript:wmuibottombaruserls()' . "'>";
    echo "<img src='$wmsys_userfolder/userimage.png' class='wmuibottombaruserimage' title='$wmsys_username' alt='$username'></img>";
    echo "<echo class='wmuibottombarusername'>$wmsys_username</echo>";
    echo "</a>";
    echo "<table class='wmuibottombaruserls' id='wmuibottombaruserls' style='display:none;'>";
    echo "<tr>";
    echo "<td>";
    echo "<a href='$Wemakeli_Web_Root/user/?useruid=$wmsys_useruid'><echo class='wmuibottombaruserbtfa'>$langstr_WMUI_User_0</echo></a>";
    echo "<a href='$Wemakeli_Web_Root/account/message.php'><echo class='wmuibottombaruserbtfb'>$langstr_WMUI_User_1</echo></a>";
    echo "<a href='$Wemakeli_Web_Root/account/platform.php'><echo class='wmuibottombaruserbtfc'>$langstr_WMUI_User_2</echo></a>";
    echo "<a href='$Wemakeli_Web_Root/account/dynamic.php'><echo class='wmuibottombaruserbtfd'>$langstr_WMUI_User_3</echo></a>";
    echo "</td>";
    echo "</tr>";
    echo "</table>";
} else {
    echo "<a href='$Wemakeli_Web_Root/account/logon.php'>";
    echo "<img src='$Wemakeli_Web_Root/library/image/common/user.png' class='wmuibottombaruserimage' title='$langstr_WMUI_User_4' alt='$langstr_WMUI_User_4'></img>";
    echo "<echo class='wmuibottombarusername'>$langstr_WMUI_User_4</echo>";
    echo "</a>";
}
if ($WMUI_Page_Class=="mainpage") {
    echo "<a href='$Wemakeli_Web_Root/'>";
    echo "<echo class='wmuibottombarfta'>$langstr_WMUI_tabs_0</echo>";
    echo "</a>";
} else {
    echo "<a href='$Wemakeli_Web_Root/'>";
    echo "<echo class='wmuibottombargta'>$langstr_WMUI_tabs_0</echo>";
    echo "</a>";
}
if ($WMUI_Page_Class=="video") {
    echo "<a href='$Wemakeli_Web_Root/video/'>";
    echo "<echo class='wmuibottombarftb'>$langstr_WMUI_tabs_1</echo>";
    echo "</a>";
} else {
    echo "<a href='$Wemakeli_Web_Root/video/'>";
    echo "<echo class='wmuibottombargtb'>$langstr_WMUI_tabs_1</echo>";
    echo "</a>";
}
if ($WMUI_Page_Class=="audio") {
    echo "<a href='$Wemakeli_Web_Root/audio/'>";
    echo "<echo class='wmuibottombarftc'>$langstr_WMUI_tabs_2</echo>";
    echo "</a>";
} else {
    echo "<a href='$Wemakeli_Web_Root/audio/'>";
    echo "<echo class='wmuibottombargtc'>$langstr_WMUI_tabs_2</echo>";
    echo "</a>";
}
if ($WMUI_Page_Class=="read") {
    echo "<a href='$Wemakeli_Web_Root/read/'>";
    echo "<echo class='wmuibottombarftd'>$langstr_WMUI_tabs_3</echo>";
    echo "</a>";
} else {
    echo "<a href='$Wemakeli_Web_Root/read/'>";
    echo "<echo class='wmuibottombargtd'>$langstr_WMUI_tabs_3</echo>";
    echo "</a>";
}
if ($WMUI_Page_Class=="life") {
    echo "<a href='$Wemakeli_Web_Root/life/'>";
    echo "<echo class='wmuibottombarfte'>$langstr_WMUI_tabs_4</echo>";
    echo "</a>";
} else {
    echo "<a href='$Wemakeli_Web_Root/life/'>";
    echo "<echo class='wmuibottombargte'>$langstr_WMUI_tabs_4</echo>";
    echo "</a>";
}
echo "</td>";
echo "</tr>";
echo "</table>";
enddrawui:

//Draw Page
if ($WMUI_Page_JumpOff_Headbar=="1") {
    echo "<table class='wmuipagemainl'>";
} else {
    echo "<table class='wmuipagemain'>";
}
echo "<div class='wmuinotify-container'></div>";
echo "<div class='wmuidialog-container' id='wmuidialog-container'></div>";
echo "<tr>";
echo "<td>";
?>