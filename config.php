<?php
//Wemakeli Danmaku Video Website System Config File
$Wemakeli_Web_Name = "Wemakeli";
if ($_SERVER['REQUEST_SCHEME'] == "https") {
    $Wemakeli_Web_Root = "https://" . $_SERVER['HTTP_HOST'];
} else {
    $Wemakeli_Web_Root = "http://" . $_SERVER['HTTP_HOST'];
}
$Wemakeli_OS_Root = "C:/Web/wemakeli.net.wm";
$Wemakeli_Web_Meta_Description = "Wemakeli 弹幕视频网";
$Wemakeli_Web_Meta_Keywords  = "Wemakeli,弹幕,视频,弹幕视频";
if ($WMConfig_Request_Base == TRUE) {
    include($Wemakeli_OS_Root . "/assets/config/base.php");
}
if ($WMConfig_Request_Channel == TRUE) {
    include($Wemakeli_OS_Root . "/assets/config/channel.php");
}
if ($WMConfig_Request_Plugin == TRUE) {
    include($Wemakeli_OS_Root . "/assets/config/plugin.php");
}
if ($WMConfig_Request_Style == TRUE) {
    include($Wemakeli_OS_Root . "/assets/config/style.php");
}
?>