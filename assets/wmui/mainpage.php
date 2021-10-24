<?php //By WMProject1217
echo "<html>";
echo "<head>";
include('./config.php');
$wmui_classnow = "mainpage";
$wmui_title = "主页 - $wmsys_name";
$wmui_backpath = "./";
$wmui_jumpoffheadbar = "1";
if ($wmsys_fatalerror==1) {
    die("<title>Force Lock - $wmsys_name</title><div>Fatal Error<br>Website service report any errors : <br>[0]Safe data offset leaked unexpected.<br>[1]Host underlying data chain broken unexpected.<br>[2]Unknown connection trying read data in force mode.<br>We are fixing bugs and will reset data settings.</div>");
}
echo "<title>$wmui_title</title>";
echo "</head>";
include("$wmsys_assetsr\wmui\wmuifirload.php");
$asser = date("Y-m-d H:i:s");
?>
<style>
.debug{
    position:absolute;
    top:511px;
    z-index:0;
    color:#66CCFF;
    text-shadow: 1px 1px 3px #EE0000;
}
</style>
<!--table class='debug' border='1' style='display:none;'>
<tr>
<td>
<h3>Debug</h3>
<!-?php
//echo "<div id='wmuisctimeblock'>See this message means js error</div>";
/*
date()
Y - 完整表示年份（四位数字：2019）
y - 表示年份（两位数字：19）
F - 表示月份（完整的文本格式： January 或者 March）
M - 表示月份（3个字母：Jun）
m - 表示月份，有前导0（数字：04）
n - 表示月份，无前导0（数字：4）
d - 表示月份中的第几天，有前导0（01-31）
j -  表示月份中的第几天，无前导0（1-31）
D - 表示星期几（3字母：Wed）
l - 表示星期几（完整英文：Wednesday）
w - 表示星期中的第几天（数字，0表示星期天）
W - 表示一年中的第几周
z - 表示一年中的第几天（0-366）
H - 24小时格式，有前导0（08，18）
h - 12小时格式，有前导0（06，11）
G - 24小时格式，无前导0（9，17）
g - 12小时格式，无前导0（6，12）
i - 表示分钟，有前导0（00-59）
s - 表示秒，有前导0（00 -59）
A - 大写的午前和午后（AM 或 PM）
a - 小写的午前和午后（am 或 pm）
I - 判断是否为夏令时

$ert = explode(':',$asser);
if ($ert[3]=="pm") {
    $ert[0] = $ert[0] + 12 ;
}
*/
?-->
<script>
/*
window.onload=function(){
NowTimeSC();
setInterval("NowTimeSC()",16);
}
function NowTimeSC(){
var time=new Date();
var lyear=time.getFullYear();
var lmonth=time.getMonth()+1;
var lday=time.getDate();
var lh=time.getHours();
var lm=time.getMinutes();
var ls=time.getSeconds();
var lms=time.getMilliseconds();
a = parseInt(lyear) - 1616;
b = parseInt(lmonth) - 12;
c = parseInt(lday) - 17;
d = parseInt(lh) - 7;
e = parseInt(lm) - 12;
f = parseInt(ls);
g = parseInt(lms);
h = a * 365 * 24 * 3600000 + b * 30 * 24 * 3600000 + c * 24 * 3600000 + d * 3600000 + e * 60000 + f * 1000 + g;
h = parseInt(h);
i = h / 1024;
h = (i - parseInt(i)) * 1024;
i = parseInt(i);
j = i / 32 + 12;
i = (j - parseInt(j)) * 32;
j = parseInt(j);
k = j / 256 + 7;
j = (k - parseInt(k)) * 256;
k = parseInt(k);
l = k / 64 + 17;
k = (l - parseInt(l)) * 64;
l = parseInt(l);
m = l / 128 + 12;
l = (m - parseInt(m)) * 128;
m = parseInt(m);
n = m / 64 + 1616;
m = (n - parseInt(n)) * 64;
n = parseInt(n);
document.getElementById("wmuisctimeblock").innerHTML="Time : [SC]"+n+"年"+m+"月"+l+"日  "+k+":"+j+":"+i+":"+h;
}*/
WMUIWelcomeMessage();
notify.success('Wemakeli 弹幕视频网','<p><span style="background-color: #FAF20B;" class="glitch_p">「<span class="glitch">Welcome to Wemakeli</span>」</span> </p>',8)
notify.success('Buy Indihome now','IndiHome Paket Streamix<br>10 Mbps Rp320.000<br>20 Mbps Rp385.000<br>50 Mbps Rp615.000<br>100 Mbps Rp957.000' ,12);
wmuidefaulttitle = document.title;
var hidden, state, visibilityChange;
if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
    state = "visibilityState";
} else if (typeof document.mozHidden !== "undefined") {
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
    state = "mozVisibilityState";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
    state = "msVisibilityState";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
    state = "webkitVisibilityState";
}
document.addEventListener(visibilityChange, function() {
    if (document[state]=='hidden') {
        document.title = "|･ω･｀) 盯~";
    } else {
        document.title = "被发现了诶...";
        setTimeout(function () {
            document.title = wmuidefaulttitle;
        }, 1024);
    }
}, false);
</script>
<!--?php
echo "用户端应用程序 : " . $_SERVER['HTTP_USER_AGENT'] . "<br>";
echo "用户访问时 IP : " .  $_SERVER['REMOTE_ADDR'] . "<br>";
echo "用户访问时端口 : " .  $_SERVER['REMOTE_PORT'] . "<br>";
echo "用户页面跳转 : " .  $_SERVER['HTTP_REFERER'] . "<br>";
?>
<br><br><br><br><br><br><br>
</td>
</tr>
</table-->
<?php
/*echo "WMUI Style 信息<br>";
echo "名称 : $WMUI_Style_Name<br>";
echo "描述 : $WMUI_Style_Description<br>";
echo 'WMUI Style 类<br>';
echo "可用的类 : $WMUI_Style_Class<br>";
echo "当前的类 : $WMUI_Style_RT_Class<br>";
echo "当前的css : $WMUI_Style_Class_RT_css<br>";
echo "当前的js : $WMUI_Style_Class_RT_js<br>";*/
if (isset($WMUI_Style_Rule_DayNight)) {
    if ($WMUI_Style_NightMode == "1") {
        echo "显示模式 : Night<br>";
    } else {
        echo "显示模式 : Day<br>";
    }
    echo '/-记得刷新页面-/<br>';
?>
<button class="wmuibutton" onclick="NightModeStart();">打开黑夜模式</button>
<button class="wmuibutton" onclick="NightModeShutdown();">关闭黑夜模式</button>
<br>
<script>
function NightModeStart() {
    var exp = new Date();
    exp.setTime(exp.getTime() + 16777215*1000*60);
    document.cookie = "WMUI_Style_NightMode="+ escape('1') +";expires=" + exp.toGMTString();
}
function NightModeShutdown() {
    var exp = new Date();
    exp.setTime(exp.getTime() - 3600);
    document.cookie = "WMUI_Style_NightMode="+ escape('1') +";expires=" + exp.toGMTString();
}
</script>
<?php
}
/*
echo "配置已完成<br>";
echo "当前语言 : $WMUI_Language<br>";
echo "语言名称 : $WMUI_Language_Name<br>";
echo "配置已完成<br>";
*/
if ($_COOKIE['WMUIEVENTPASSID']<>'2') {
?>
<div id="wmuidialogarea" style="display:none;">
    <div id="wmuidialog-face">
    </div>
    <div id="wmuidialog">
        <div id="wmuidialog-wrapper">
            <div class="wmuidialog-header">
                <span>消息提示框(ID:NULL)</span>
            </div>
            <div class="wmuidialog-content">
            <pre>当前网站有非常多特性，如果发现特性请生成邮件发送到 Wemakeli@wmproject1217.onmicrosoft.com ，不一定会回复。</pre>
            单击 <a href='/active/2021-3-10/' style='font-size:24px;color:#66CCFF;'>此处</a> 查看紧急通知
            <br>有留言请发到 <a href='/talk/0/' style='font-size:24px;color:#66CCFF;'>公共聊天室</a>
            <div>由于发现严重特性，全站代码正在被重写。此过程将会持续一段时间</div>
            <div class="WMUICheckBoxShowerc">
  	        	<input type="checkbox" value="1" class='WMUICheckBox' id="checkboxeventshow" name="" />
                <label for="checkboxeventshow"></label>
            </div>
            <div style='position:relative;font-size:18px;color:#FFFFFF;top:-32px;left:100px;'>下次打开不再显示此消息</div>
            </div>
            <div class="wmuicenterutil" style='position:relative;top:-32px;'>
                <button class="wmuibutton" onclick="wmuieventchecker();wmuitoggledialog(false);">关闭</button>
                <button class="wmuibutton" onclick="alert(':(\nKernel Panic [index.php:146]');location.reload();">打开</button>
            </div>
        </div>
    </div>
</div>
<?php
}

echo "System fatal error during creating user interface , contant your system admin .<br>";
echo "正在重构User Interface ...";

include("$wmsys_assetsr\wmui\wmuilasload.php");
if ($_COOKIE['WMUIEVENTPASSID']<>'2') {
?>
<script>
wmuitoggledialog(true);
</script>
<?php
}
?>