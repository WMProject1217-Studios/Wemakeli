<?php
// Because any error , the code for choose WMUI Style by user has been stopped.
/*if (isset($_COOKIE["WMUI_Style"])) {
    $WMUI_Style = $_COOKIE['WMUI_Style'];
} else {
    $WMUI_Style = $WMUI_Style_Default;
}*/
if (isset($_COOKIE["username"])) {
    $wmsys_userlogon="1";
    $wmsys_username=$_COOKIE['username'];
    $wmsys_useruid=$_COOKIE['useruid'];
    $wmsys_userfolder=$wmsys_sysroot . "/user/$wmsys_useruid";
}
$WMUI_Style = $WMUI_Style_Default;
$WMUI_Style = str_replace(array("\r\n", "\r", "\n"), "", $WMUI_Style);
$WMUI_Style = str_replace(array("..","/"), "", $WMUI_Style);
$WMUI_Style = str_replace(array("<",">"), "", $WMUI_Style);
if ($WMUI_Style == "") {
    $WMUI_Style = "vanilla";
}
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/')<>'1') {
    $WMUI_Style = "vanilla";
}
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/config.wmst')<>'1') {
    die('WMUI Style config file error !<br>');
}
$WMUI_Style_Config_File_fopen = @ fopen($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/config.wmst', "r")or die('Kernel Panic ![WMUI Style config file fopen]');
while(!feof($WMUI_Style_Config_File_fopen))
{
    $WMUI_Style_Config_File_fgets = @ fgets($WMUI_Style_Config_File_fopen);
    if (substr($WMUI_Style_Config_File_fgets,0,2)=='##') {
        goto WMUI_Style_Config_File_endofloop;
    }
    if (substr($WMUI_Style_Config_File_fgets,0,2)=='!#') {
        $WMUI_Style_Config_File_tempa = str_replace(array("\r\n", "\r", "\n"), "", $WMUI_Style_Config_File_fgets);
        $WMUI_Style_Config_File_tempa = substr($WMUI_Style_Config_File_tempa,2);
        $WMUI_Style_Config_File_tempa = str_replace("##_Wemakeli_Web_Root_##", $Wemakeli_Web_Root, $WMUI_Style_Config_File_tempa);
        $WMUI_Style_Config_File_tempa = str_replace("##_WMUI_StyleFolder##", $WMUI_Style, $WMUI_Style_Config_File_tempa);
        $WMUI_Style_Config_File_tempb = explode('=',$WMUI_Style_Config_File_tempa);
        ${'WMUI_Style_' . $WMUI_Style_Config_File_tempb[0]} = $WMUI_Style_Config_File_tempb[1];
    }
    WMUI_Style_Config_File_endofloop:
}
@ fclose($WMUI_Style_Config_File_fopen);
/*if (isset($_COOKIE['WMUI_Style_RT_Class'])) {
    if (isset(${'WMUI_Style_' . $_COOKIE['WMUI_Style_RT_Class']})) {
        $WMUI_Style_RT_Class = $_COOKIE['WMUI_Style_RT_Class'];
    } else {
        if (isset($WMUI_Style_Rule_DayNight)) {
            if (isset($_COOKIE['WMUI_Style_NightMode'])) {
                if ($_COOKIE['WMUI_Style_NightMode']=="1") {
                    $WMUI_Style_RT_Class_tempa = explode(',',$WMUI_Style_Rule_DayNight);
                    $WMUI_Style_RT_Class = $WMUI_Style_RT_Class_tempa[1];
                    $WMUI_Style_NightMode = "1";
                } else {
                    $WMUI_Style_RT_Class_tempa = explode(',',$WMUI_Style_Class);
                    $WMUI_Style_RT_Class = $WMUI_Style_RT_Class_tempa[0];
                }
            } else {
                $WMUI_Style_RT_Class_tempa = explode(',',$WMUI_Style_Class);
                $WMUI_Style_RT_Class = $WMUI_Style_RT_Class_tempa[0];
            }
        } else {
            $WMUI_Style_RT_Class_tempa = explode(',',$WMUI_Style_Class);
            $WMUI_Style_RT_Class = $WMUI_Style_RT_Class_tempa[0];
        }
    }
} else {
    if (isset($WMUI_Style_Rule_DayNight)) {
        if (isset($_COOKIE['WMUI_Style_NightMode'])) {
            if ($_COOKIE['WMUI_Style_NightMode']=="1") {
                $WMUI_Style_RT_Class_tempa = explode(',',$WMUI_Style_Rule_DayNight);
                $WMUI_Style_RT_Class = $WMUI_Style_RT_Class_tempa[1];
                $WMUI_Style_NightMode = "1";
            } else {
                $WMUI_Style_RT_Class_tempa = explode(',',$WMUI_Style_Class);
                $WMUI_Style_RT_Class = $WMUI_Style_RT_Class_tempa[0];
            }
        } else {
            $WMUI_Style_RT_Class_tempa = explode(',',$WMUI_Style_Class);
            $WMUI_Style_RT_Class = $WMUI_Style_RT_Class_tempa[0];
        }
    } else {
        $WMUI_Style_RT_Class_tempa = explode(',',$WMUI_Style_Class);
        $WMUI_Style_RT_Class = $WMUI_Style_RT_Class_tempa[0];
    }
}
$WMUI_Style_Class_File_fopen = @ fopen($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/' . ${'WMUI_Style_Class_' . $WMUI_Style_RT_Class}, "r")or die('Kernel Panic ![WMUI Style class config file fopen]');
while(!feof($WMUI_Style_Class_File_fopen))
{
    $WMUI_Style_Class_File_fgets = @ fgets($WMUI_Style_Class_File_fopen);
    if (substr($WMUI_Style_Class_File_fgets,0,2)=='##') {
        goto WMUI_Style_Class_File_endofloop;
    }
    if (substr($WMUI_Style_Class_File_fgets,0,2)=='!#') {
        $WMUI_Style_Class_File_tempa = str_replace(array("\r\n", "\r", "\n"), "", $WMUI_Style_Class_File_fgets);
        $WMUI_Style_Class_File_tempa = substr($WMUI_Style_Class_File_tempa,2);
        $WMUI_Style_Class_File_tempa = str_replace("##_Wemakeli_Web_Root_##", $Wemakeli_Web_Root, $WMUI_Style_Class_File_tempa);
        $WMUI_Style_Class_File_tempa = str_replace("##_WMUI_StyleFolder##", $WMUI_Style, $WMUI_Style_Class_File_tempa);
        $WMUI_Style_Class_File_tempb = explode('=',$WMUI_Style_Class_File_tempa);
        ${'WMUI_Style_Class_' . $WMUI_Style_Class_File_tempb[0]} = $WMUI_Style_Class_File_tempb[1];
    }
    WMUI_Style_Class_File_endofloop:
}
@ fclose($WMUI_Style_Class_File_fopen);*/
$WMUI_Style_Class_RT_css = $Wemakeli_Web_Root . '/assets/wmui/style/' . $WMUI_Style . '/vanilla.css';
$WMUI_Style_Class_RT_js = $Wemakeli_Web_Root . '/assets/wmui/style/' . $WMUI_Style . '/vanilla.js';


//This part is a cache , it will be change or remove in the future
$langstr_WMUI_User_0='个人主页';
$langstr_WMUI_User_1='消息';
$langstr_WMUI_User_2='创作中心';
$langstr_WMUI_User_3='动态';
$langstr_WMUI_User_4='登录';
$langstr_WMUI_tabs_0='主页';
$langstr_WMUI_tabs_1='视频';
$langstr_WMUI_tabs_2='音频';
$langstr_WMUI_tabs_3='专栏';
$langstr_WMUI_tabs_4='';
$langstr_WMUI_bar_about='关于';
$langstr_WMUI_logon_0='从其它区域登录';
$langstr_WMUI_logon_1='创建新用户';
$langstr_WMUI_logon_2='登录';
?>
<!DOCTYPE html>