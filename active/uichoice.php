<?php 
//By WMProject1217
//The config file for Wemakeli Danmaku Video Website System [Version 0.8.8 Build 1434]

//The basic values config
$wmsys_name = "Wemakeli";
$wmsys_sysroot = "http://" . $_SERVER['HTTP_HOST'];
$wmsys_sysrootr = "C:/Wemakeli";

//Use the request files
echo "<link href='$wmsys_sysroot/favicon.ico' rel='icon' type='image/ico'>";
echo "<script src='$wmsys_sysroot/assets/js/jquery-3.4.1.js'></script>";

//User logon check
if (isset($_COOKIE["username"])) {
    $wmsys_userlogon="1";
    $wmsys_username=$_COOKIE['username'];
    $wmsys_useruid=$_COOKIE['useruid'];
    $wmsys_userfolder=$wmsys_sysroot . "/user/$wmsys_useruid";
}

//WMUI Style Loader
if (isset($_COOKIE["WMUI_Style"])) {
    $WMUI_Style = $_COOKIE['WMUI_Style'];
} else {
    $WMUI_Style = "vanilla";
}
$WMUI_Style = str_replace(array("\r\n", "\r", "\n"), "", $WMUI_Style);
$WMUI_Style = str_replace(array("..","/"), "", $WMUI_Style);
$WMUI_Style = str_replace(array("<",">"), "", $WMUI_Style);
if (file_exists($wmsys_sysrootr . '/assets/wmui/style/' . $WMUI_Style . '/')<>'1') {
    $WMUI_Style = "vanilla";
}
if (file_exists($wmsys_sysrootr . '/assets/wmui/style/' . $WMUI_Style . '/config.wmst')<>'1') {
    die('WMUI Style config file error !<br>');
}
$WMUI_Style_Config_File_fopen = @ fopen($wmsys_sysrootr . '/assets/wmui/style/' . $WMUI_Style . '/config.wmst', "r")or die('Kernel Panic ![WMUI Style config file fopen]');
while(!feof($WMUI_Style_Config_File_fopen))
{
    $WMUI_Style_Config_File_fgets = @ fgets($WMUI_Style_Config_File_fopen);
    if (substr($WMUI_Style_Config_File_fgets,0,2)=='##') {
        goto WMUI_Style_Config_File_endofloop;
    }
    if (substr($WMUI_Style_Config_File_fgets,0,2)=='!#') {
        $WMUI_Style_Config_File_tempa = str_replace(array("\r\n", "\r", "\n"), "", $WMUI_Style_Config_File_fgets);
        $WMUI_Style_Config_File_tempa = substr($WMUI_Style_Config_File_tempa,2);
        $WMUI_Style_Config_File_tempa = str_replace("##_WMSYS_sysroot_##", $wmsys_sysroot, $WMUI_Style_Config_File_tempa);
        $WMUI_Style_Config_File_tempa = str_replace("##_WMSYS_StyleFolder##", $WMUI_Style, $WMUI_Style_Config_File_tempa);
        $WMUI_Style_Config_File_tempb = explode('=',$WMUI_Style_Config_File_tempa);
        ${'WMUI_Style_' . $WMUI_Style_Config_File_tempb[0]} = $WMUI_Style_Config_File_tempb[1];
    }
    WMUI_Style_Config_File_endofloop:
}
@ fclose($WMUI_Style_Config_File_fopen);
if (isset($_COOKIE['WMUI_Style_RT_Class'])) {
    if (isset(${'WMUI_Style_' . $_COOKIE['WMUI_Style_RT_Class']})) {
        $WMUI_Style_RT_Class = $_COOKIE['WMUI_Style_RT_Class'];
    } else {
        if (isset($WMUI_Style_Rule_DayNight)) {
            if (isset($_COOKIE['WMUI_Style_NightMode'])) {
                if ($_COOKIE['WMUI_Style_NightMode']=="1") {
                    $WMUI_Style_RT_Class_tempa = explode(',',$WMUI_Style_Rule_DayNight);
                    $WMUI_Style_RT_Class = $WMUI_Style_RT_Class_tempa[1];
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
$WMUI_Style_Class_File_fopen = @ fopen($wmsys_sysrootr . '/assets/wmui/style/' . $WMUI_Style . '/' . ${'WMUI_Style_Class_' . $WMUI_Style_RT_Class}, "r")or die('Kernel Panic ![WMUI Style class config file fopen]');
while(!feof($WMUI_Style_Class_File_fopen))
{
    $WMUI_Style_Class_File_fgets = @ fgets($WMUI_Style_Class_File_fopen);
    if (substr($WMUI_Style_Class_File_fgets,0,2)=='##') {
        goto WMUI_Style_Class_File_endofloop;
    }
    if (substr($WMUI_Style_Class_File_fgets,0,2)=='!#') {
        $WMUI_Style_Class_File_tempa = str_replace(array("\r\n", "\r", "\n"), "", $WMUI_Style_Class_File_fgets);
        $WMUI_Style_Class_File_tempa = substr($WMUI_Style_Class_File_tempa,2);
        $WMUI_Style_Class_File_tempa = str_replace("##_WMSYS_sysroot_##", $wmsys_sysroot, $WMUI_Style_Class_File_tempa);
        $WMUI_Style_Class_File_tempa = str_replace("##_WMSYS_StyleFolder##", $WMUI_Style, $WMUI_Style_Class_File_tempa);
        $WMUI_Style_Class_File_tempb = explode('=',$WMUI_Style_Class_File_tempa);
        ${'WMUI_Style_Class_' . $WMUI_Style_Class_File_tempb[0]} = $WMUI_Style_Class_File_tempb[1];
    }
    WMUI_Style_Class_File_endofloop:
}
@ fclose($WMUI_Style_Class_File_fopen);
echo "<script src='$WMUI_Style_Class_RT_js'></script>";
echo "<link rel='stylesheet' href='$WMUI_Style_Class_RT_css'>";

//WMUI Language Loader
if (isset($_COOKIE['WMUI_Language'])) {
    $WMUI_Language = $_COOKIE['WMUI_Language'];
} else {
    $WMUI_Language = "zh-cn";
}
if (file_exists($wmsys_sysrootr . '/assets/wmui/language/' . $WMUI_Language . '/')<>'1') {
    $WMUI_Language = "zh-cn";
}
if (file_exists($wmsys_sysrootr . '/assets/wmui/language/' . $WMUI_Language . '/config.php')<>'1') {
    die('WMUI Language config file error !<br>');
}
@ include($wmsys_sysrootr . '/assets/wmui/language/' . $WMUI_Language . '/config.php');

//This part is a cache , it will be change or remove in the future
$wmsys_assets = $wmsys_sysroot . "/assets";
$wmsys_assetsr = $wmsys_sysrootr . "/assets";
$wmsys_dbroot = $wmsys_sysroot . "/library";
$wmsys_dbrootw = $wmsys_sysrootr . "/library";
?>