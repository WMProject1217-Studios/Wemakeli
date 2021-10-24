<?php
echo "<meta name='Description' Content='$Wemakeli_Web_Meta_Description'>";
echo "<meta name='Keywords' Content='$Wemakeli_Web_Meta_Keywords'>";
echo "<link href='$Wemakeli_Web_Root/favicon.ico' rel='icon' type='image/ico'>";
echo "<link rel='stylesheet' href='$WMUI_Style_Class_RT_css'>";
echo "<link rel='stylesheet' href='$Wemakeli_Web_Root/assets/wmui/slide.css'>";
echo "<link rel='icon' href='$Wemakeli_Web_Root/favicon.ico' type='image/x-icon'/> ";
echo "<script src='$Wemakeli_Web_Root/assets/js/jquery-3.4.1.js'></script>";
echo "<script src='$Wemakeli_Web_Root/assets/wmui/wmui.js'></script>";
echo "<script src='$Wemakeli_Web_Root/assets/wmui/slide.js'></script>";
echo "<script src='$WMUI_Style_Class_RT_js'></script>";
echo "<title>$WMUI_Page_Title - $Wemakeli_Web_Name</title>";
if ($WMUI_Page_JavaScript_Looker==1) {
    echo "<script>WMUI_Page_JavaScript_Looker();</script>";
}
?>