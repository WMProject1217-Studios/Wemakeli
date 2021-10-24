<?php //By WMProject1217
@ include("../config.php");
@ include("$Wemakeli_OS_Root/assets/wmui/wmuiinit.php");
$WMUI_Page_Class = "search";
$WMUI_Page_Title = "搜索";
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
$WMSearch_DB_Local_File = "./library/localfile.wmst";
$WMSearch_DB_Local_Web = "./library/localweb.wmst";
$WMSearch_DB_Net_Web = "./library/weblinks.wmst";
if ($_GET['string']<>'') {
        goto searchpage;
}
?>
<script>
    function search() {
        var searchvalue=document.getElementById("search").value;
        window.location.href='?string='+searchvalue;
    }
</script>
<div class="WMUISearchBox">
    <input type="search" name="search" id="search" placeholder="请输入关键字">
    <div class="WMUISearchBoxSearch" onclick="search();">搜索</div>
</div>
<br>
<?php
echo "<pre id='randombox'>
下面这行是随机的文本，建议多刷新几遍（<br>";
$arr = file($Wemakeli_OS_Root . "/assets/txt/splashes.txt");
$n = rand(0,count($arr));
if ($arr[$n]<>"") {
    echo $arr[$n];
} else {
    echo "真的有人会看这个吗？";
}
echo "</pre>";
goto endpage;
searchpage:
?>
<div class="WMUISearchBox">
    <input type="search" name="search" id="search" placeholder="请输入关键字">
    <div class="WMUISearchBoxSearch" onclick="search();">搜索</div>
</div>
<script>
document.getElementById("search").value='<?php echo $_GET['string']; ?>';
function search() {
    var searchvalue=document.getElementById("search").value;
    window.location.href='?string='+searchvalue;
}
</script>
<div id="totalnumber">114514</div>
<pre>
<?php
$searchword = $_GET['string'];
$finalnumbers = 0;

if ($searchword == "自杀") {
echo "<div class='content-container' style='font-size:1.2em;'><fieldset><h3>你不孤单，我们都在<br>这个世界虽然不完美，但总有人守护着你。</h3><div>如果需要帮助，请拨打全国24小时免费心理咨询热线。<br>全国24小时免费心理咨询 010-82951332</div></fieldset></div>";
echo "<div class='content-container' style='font-size:1.2em;'><fieldset><h3>你不必独自面对一切</h3><div>北京24小时免费心理危机咨询热线 : 010-8295-1332</div></fieldset></div>";
echo "<div class='content-container' style='font-size:1.2em;'><fieldset><h3>You're not alone<br></h3><div>National Suicide Prevention Lifeline : 1-800-273-8255<br>Emergency number : 911</div></fieldset></div>";
$finalnumbers = $finalnumbers + 3;
echo "<br>";
}


$arr = file($WMSearch_DB_Local_Web);
$number = count($arr);
$rnum = 0;
while($number > $rnum - 1) {
    $tempa = explode('=',$arr[$rnum]);
    if (stripos($tempa[0],$searchword,0)!==false) {
        $finalnumbers = $finalnumbers + 1;
        echo "<div class='SearchItem'><a href=" . str_replace("#$^#","=",$tempa[2]) . "target=" . '"_blank"' . ">" . str_replace("#$^#","=",$tempa[0]) . "\n" . str_replace("#$^#","=",$tempa[1]) . "\n" . str_replace("#$^#","=",$tempa[2]) . "</a></div>\n\n";
    } else if (stripos($tempa[1],$searchword,0)!==false) {
        $finalnumbers = $finalnumbers + 1;
        echo "<div class='SearchItem'><a href=" . str_replace("#$^#","=",$tempa[2]) . "target=" . '"_blank"' . ">" . str_replace("#$^#","=",$tempa[0]) . "\n" . str_replace("#$^#","=",$tempa[1]) . "\n" . str_replace("#$^#","=",$tempa[2]) . "</a></div>\n\n";
    }
    $rnum = $rnum + 1;
}

$arr = file($WMSearch_DB_Local_File);
$number = count($arr);
$rnum = 0;
while($number > $rnum - 1) {
    if (!stripos($arr[$rnum],$searchword,0)===false) {
        $finalnumbers = $finalnumbers + 1;
        $tempa = explode('=',$arr[$rnum]);
        echo "<div class='SearchItem'>" . str_replace("#$^#","=",$tempa[0]) . "\n" . str_replace("#$^#","=",$tempa[1]) . "\n" . str_replace("#$^#","=",$tempa[2]) . "</div>\n\n";
    }
    $rnum = $rnum + 1;
}

$arr = file($WMSearch_DB_Net_Web);
$number = count($arr);
while($number > -1) {
    $tempa = explode('=',$arr[$number]);
    if (stripos($tempa[0],$searchword,0)!==false) {
        $finalnumbers = $finalnumbers + 1;
        echo "<div class='SearchItem'><a href=" . str_replace("#$^#","=",$tempa[2]) . "target=" . '"_blank"' . ">" . str_replace("#$^#","=",$tempa[0]) . "\n" . str_replace("#$^#","=",$tempa[1]) . "\n" . str_replace("#$^#","=",$tempa[2]) . "</a></div>\n\n";
    } else if (stripos($tempa[1],$searchword,0)!==false) {
        $finalnumbers = $finalnumbers + 1;
        echo "<div class='SearchItem'><a href=" . str_replace("#$^#","=",$tempa[2]) . "target=" . '"_blank"' . ">" . str_replace("#$^#","=",$tempa[0]) . "\n" . str_replace("#$^#","=",$tempa[1]) . "\n" . str_replace("#$^#","=",$tempa[2]) . "</a></div>\n\n";
    }
    $number = $number - 1;
}
?>
</pre>
<script>
document.getElementById("totalnumber").innerHTML='共 <?php echo $finalnumbers; ?> 项';
</script>
<?php
echo "<pre id='randombox'>
下面这行是随机的文本，建议多刷新几遍（<br>";
$arr = file($Wemakeli_OS_Root . "/assets/txt/splashes.txt");
$n = rand(0,count($arr));
if ($arr[$n]<>"") {
    echo $arr[$n];
} else {
    echo "真的有人会看这个吗？";
}
echo "</pre>";
endpage:
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php')=='1') {
    @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php');
}
?>