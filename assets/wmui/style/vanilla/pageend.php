<?php
echo "<br>";
echo "<br>";
echo "<br>";
if ($WMUI_UI_Opacity==1) {
    echo "<style>";
    echo ".wmuiheadbar {";
    echo "    opacity:0.64;";
    echo "}";
    echo ".wmuibottombar {";
    echo "    opacity:0.64;";
    echo "}";
    echo "</style>";
}
echo "</body>";
if ($WMUI_Page_JumpOff_Headbar <>"1"){
    echo "<script>window.onload=function(){";
    echo "WMUIHeadbarNowTimeSC();";
    echo "setInterval('WMUIHeadbarNowTimeSC()',256);";
    echo "}</script>";
}
if ($_COOKIE['WMUI_Style_NightMode'] == 1) {
    echo "<script>document.getElementsByTagName('body')[0].className='WMUI_Page_Main_Night';</script>";
} else {
    echo "<script>document.getElementsByTagName('body')[0].className='WMUI_Page_Main_Day';</script>";
}
?>