<?php //By WMProject1217
$wmui_backpath = "./";
/*if ($wmsys_fatalerror==1) {
    die("<title>Force Lock - $wmsys_name</title><div>Fatal Error<br>Website service report any errors : <br>[0]Safe data offset leaked unexpected.<br>[1]Host underlying data chain broken unexpected.<br>[2]Unknown connection trying read data in force mode.<br>We are fixing bugs and will reset data settings.</div>");
}*/
$asser = date("Y-m-d H:i:s");
?>
<style>
.debug{
    position:flex;
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
?>
<div class="wmuirecmain">
<div style='position: flex;top:5px;left:0px;' id="slide"></div>
<!--div style='position: flex;top:5px;left:0px;' id="slide"></div-->
<script>
    new Slide('#slide', {
    imgs: [
        "./library/image/videotop/wv-1.png",
        "./library/image/videotop/wv0.png",
        "./library/image/videotop/wv1.png",
        "./library/image/videotop/wv2.png",
    ],            // pictures you need to slide
    texts: [
        "Bad Apple!!",
        "Never Gonna Give You Up",
        "[0CC-FamiTracker]Scarlet_Mist_Incident",
        "测试danmuplayer",
    ],            // texts you need to slide
    links: [
        "/video/wv-1/",
        "/video/wv0/",
        "/video/wv1/",
        "/video/wv2/",
    ],            // links you need to slide
    width: 459,          // the slide's width
    height: 202,         // the slide's height
    autoswitch: {
        open: true,     // switch the slide automatically
        delay: 5000      // delay time
    },
    animation: 'slideLeft' // animation while you slide, we have: slideUp, slideLeft, fade
})
</script>
<style>
.wmuishowerc {

    width: 170px;
    height: 96px;
}

.wmuishowerctop {
    position: absolute;
    z-index: 2700;
    width: 170px;
    height: 96px;
}

.wmuishowerctitle {
    position: absolute;
    z-index: 2701;
    color: #EE0000;
    font-size: 20px;
    margin-top: 40px;
    width: 170px;
    height: 37px;
    text-shadow: 1px 1px 3px #000000;
}

.wmuishowerctitlel {
    position: absolute;
    word-wrap: break-word;
    z-index: 2701;
    color: #EE0000;
    font-size: 16px;
    margin-top: 0px;
    width: 170px;
    height: 37px;
    text-shadow: 1px 1px 3px #000000;
}

.wmuishowercplaycount {
    position: absolute;
    z-index: 2701;
    color: #EEEE00;
    font-size: 16px;
    margin-top: 62px;
    width: 170px;
    height: 24px;
    text-shadow: 1px 1px 3px #000000;
}

.wmuishowercupmaster {
    position: absolute;
    z-index: 2701;
    color: #66CCFF;
    font-size: 16px;
    margin-top: 76px;
    width: 170px;
    height: 24px;
    text-shadow: 1px 1px 3px #000000;
}
</style>
<div style='position: relative;top:5px;left:462px;'>
<?php
$videoread = 5;
$videoend = 7;
while ($videoread<>$videoend) {
    $videoinfofile = @ fopen("./video/wv$videoread/info.wmst", "r");
    $title = @ fgets($videoinfofile);
    $outputtime = @ fgets($videoinfofile);
    $uploadmaster = @ fgets($videoinfofile);
    $videonumber= @ fgets($videoinfofile);
    @ fclose($videoinfofile);
    $videonumber = str_replace(array("\r\n", "\r", "\n"), "", $videonumber);
    $title = str_replace(array("\r\n", "\r", "\n"), "", $title);  
    $outputtime = str_replace(array("\r\n", "\r", "\n"), "", $outputtime);  
    $uploadmaster = str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);
    $countfile = @ fopen("./video/wv$videoread/count.wmst", "r");
    $playnumber = @ fgets($countfile);
    @ fclose($countfile);
    $danmakufile = @ fopen("./video/wv$videoread/danmaku.wml", "r");
    $danmakudata = @ fread($danmakufile,filesize("./video/wv$videoread/danmaku.wml"));
    if ($videoread == "6") {
        $danmakunumber = "-inf";
    } else if ($videoread == "7") {
        $danmakunumber = "-inf";
    } else {
        $danmakunumber = @ substr_count($danmakudata,"\n");
    }
    @ fclose($danmakufile);
    if ($outputtime=="") {
        goto offechooutlineb;
    }
    if ($playnumber > 10000) {
        if (floor($playnumber / 10000) > 10000) {
            $playnumber = floor($playnumber / 100000000) . " 亿";
            goto playnumberfixendb;
        }
        $playnumber = floor($playnumber / 10000) . " 万";
        playnumberfixendb:
    }
    echo "<div class='wmuishowerc'>";
    echo "<a href='/video/$videonumber/'>";
    echo "<img class='wmuishowerctop' src='/library/image/videotop/wv$videoread.png'></img>";
    if (mb_strlen($title) > 10) {
        echo "<div class='wmuishowerctitlel'>$title</div>";
    } else {
    echo "<div class='wmuishowerctitle'>$title</div>";
    }
    echo "<div class='wmuishowercplaycount'>播放 $playnumber 弹幕 $danmakunumber</div>";
    echo "<div class='wmuishowercupmaster'>UP : $uploadmaster</div></a>";
    echo "</div><br><br><br><br><br>";
    offechooutlineb:
    $videoread = $videoread + 1;
}
echo "<br><br></div>";
echo "<div style='position: flex;top:5px;left:642px;'>";
$videoread = 7;
$videoend = 9;
while ($videoread<>$videoend) {
    $videoinfofile = @ fopen("./video/wv$videoread/info.wmst", "r");
    $title = @ fgets($videoinfofile);
    $outputtime = @ fgets($videoinfofile);
    $uploadmaster = @ fgets($videoinfofile);
    $videonumber= @ fgets($videoinfofile);
    @ fclose($videoinfofile);
    $videonumber = str_replace(array("\r\n", "\r", "\n"), "", $videonumber);
    $title = str_replace(array("\r\n", "\r", "\n"), "", $title);  
    $outputtime = str_replace(array("\r\n", "\r", "\n"), "", $outputtime);  
    $uploadmaster = str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);
    $countfile = @ fopen("./video/wv$videoread/count.wmst", "r");
    $playnumber = @ fgets($countfile);
    @ fclose($countfile);
    $danmakufile = @ fopen("./video/wv$videoread/danmaku.wml", "r");
    $danmakudata = @ fread($danmakufile,filesize("./video/wv$videoread/danmaku.wml"));
    if ($videoread == "6") {
        $danmakunumber = "-inf";
    } else if ($videoread == "7") {
        $danmakunumber = "-inf";
    } else {
        $danmakunumber = @ substr_count($danmakudata,"\n");
    }
    @ fclose($danmakufile);
    if ($outputtime=="") {
        goto offechooutlinen;
    }
    if ($playnumber > 10000) {
        if (floor($playnumber / 10000) > 10000) {
            $playnumber = floor($playnumber / 100000000) . " 亿";
            goto playnumberfixendn;
        }
        $playnumber = floor($playnumber / 10000) . " 万";
        playnumberfixendn:
    }
    echo "<div class='wmuishowerc'>";
    echo "<a href='/video/$videonumber/'>";
    echo "<img class='wmuishowerctop' src='/library/image/videotop/wv$videoread.png'></img>";
    if (mb_strlen($title) > 10) {
        echo "<div class='wmuishowerctitlel'>$title</div>";
    } else {
    echo "<div class='wmuishowerctitle'>$title</div>";
    }
    echo "<div class='wmuishowercplaycount'>播放 $playnumber 弹幕 $danmakunumber</div>";
    echo "<div class='wmuishowercupmaster'>UP : $uploadmaster</div></a>";
    echo "</div><br><br><br><br><br>";
    offechooutlinen:
    $videoread = $videoread + 1;
}
echo "<br><br></div>";
echo "<div style='position: flex;top:5px;left:814px;'>";
$videoread = -1;
$videoend = 1;
while ($videoread<>$videoend) {
    $videoinfofile = @ fopen("./video/wv$videoread/info.wmst", "r");
    $title = @ fgets($videoinfofile);
    $outputtime = @ fgets($videoinfofile);
    $uploadmaster = @ fgets($videoinfofile);
    $videonumber= @ fgets($videoinfofile);
    @ fclose($videoinfofile);
    $videonumber = str_replace(array("\r\n", "\r", "\n"), "", $videonumber);
    $title = str_replace(array("\r\n", "\r", "\n"), "", $title);  
    $outputtime = str_replace(array("\r\n", "\r", "\n"), "", $outputtime);  
    $uploadmaster = str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);
    $countfile = @ fopen("./video/wv$videoread/count.wmst", "r");
    $playnumber = @ fgets($countfile);
    @ fclose($countfile);
    $danmakufile = @ fopen("./video/wv$videoread/danmaku.wml", "r");
    $danmakudata = @ fread($danmakufile,filesize("./video/wv$videoread/danmaku.wml"));
    if ($videoread == "6") {
        $danmakunumber = "-inf";
    } else if ($videoread == "7") {
        $danmakunumber = "-inf";
    } else {
        $danmakunumber = @ substr_count($danmakudata,"\n");
    }
    @ fclose($danmakufile);
    if ($outputtime=="") {
        goto offechooutlinel;
    }
    if ($playnumber > 10000) {
        if (floor($playnumber / 10000) > 10000) {
            $playnumber = floor($playnumber / 100000000) . " 亿";
            goto playnumberfixendl;
        }
        $playnumber = floor($playnumber / 10000) . " 万";
        playnumberfixendl:
    }
    echo "<div class='wmuishowerc'>";
    echo "<a href='/video/$videonumber/'>";
    echo "<img class='wmuishowerctop' src='/library/image/videotop/wv$videoread.png'></img>";
    if (mb_strlen($title) > 10) {
        echo "<div class='wmuishowerctitlel'>$title</div>";
    } else {
    echo "<div class='wmuishowerctitle'>$title</div>";
    }
    echo "<div class='wmuishowercplaycount'>播放 $playnumber 弹幕 $danmakunumber</div>";
    echo "<div class='wmuishowercupmaster'>UP : $uploadmaster</div></a>";
    echo "</div><br><br><br><br><br>";
    offechooutlinel:
    $videoread = $videoread + 1;
}
echo "<br><br></div>";
?>
<div style='position: flex;top:340px;'>
<?php
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
echo "Rebuilding User Interface ...</div></div>";

if ($_COOKIE['WMUIEVENTPASSID']<>'2') {
?>
<script>
wmuitoggledialog(true);
</script>
<?php
}
?>
<!--div class="b-wrap">
<div class="space-between">
<div class="rcmd-box-wrap">
    <div class="rcmd-box">
        <div class="video-card-reco">
            <div class="info-box">
                <a href="//www.bilibili.com/video/BV16v41187dP" target="_blank">
                <img src="https://i2.hdslb.com/bfs/archive/cff68b5c707b89965e2f42aaaed2bf1632c714f9.jpg@412w_232h_1c.jpg" alt="「山巅雪国的记忆」：《原神》龙脊雪山OST印象曲MV">
                <div class="info">
                    <p title="「山巅雪国的记忆」：《原神》龙脊雪山OST印象曲MV" class="title">「山巅雪国的记忆」：《原神》龙脊雪山OST印象曲MV</p>
                    <p class="up"><i class="bilifont bili-icon_xinxi_UPzhu"></i>原神</p>
                    <p class="play">18.1万播放</p>
                </div>
                </a>
            </div>
            <div class="watch-later-video van-watchlater black">
                <span class="wl-tips" style="display:none;"></span>
            </div>
        </div>
        <div class="video-card-reco">
            <div class="info-box">
                <a href="//www.bilibili.com/video/BV1tv41187kf" target="_blank">
                <img src="https://i1.hdslb.com/bfs/archive/58502356ab24a62ca98ab60cebac78ec6f3c024d.jpg@412w_232h_1c.jpg" alt="飞天大大大大大大 3.0【汽油桶快乐阴人流#9】">
                <div class="info">
                    <p title="飞天大大大大大大 3.0【汽油桶快乐阴人流#9】" class="title">飞天大大大大大大 3.0【汽油桶快乐阴人流#9】</p>
                    <p class="up"><i class="bilifont bili-icon_xinxi_UPzhu"></i>鲁大能</p>
                    <p class="play">14.8万播放</p>
                </div>
                </a>
            </div>
            <div class="watch-later-video van-watchlater black"><span class="wl-tips" style="display:none;"></span></div></div><div class="video-card-reco"><div class="info-box"><a href="//www.bilibili.com/video/BV1RK4y1T7Rg?spm_id_from=333.851.b_7265636f6d6d656e64.3" target="_blank"><img src="https://i0.hdslb.com/bfs/archive/53fc79522a775b5e4154fbec8eadf156a1588197.jpg@412w_232h_1c.jpg" alt="散人&amp;番茄《双人成行》 不离不弃的奇幻冒险（已更新至P2 钉锤双雄）"><div class="info"><p title="散人&amp;番茄《双人成行》 不离不弃的奇幻冒险（已更新至P2 钉锤双雄）" class="title">散人&amp;番茄《双人成行》 不离不弃的奇幻冒险（已更新至P2 钉锤双雄）</p><p class="up"><i class="bilifont bili-icon_xinxi_UPzhu"></i>逍遥散人</p><p class="play">25.2万播放</p></div></a></div><div class="watch-later-video van-watchlater black"><span class="wl-tips" style="display:none;"></span></div></div><div class="video-card-reco"><div class="info-box"><a href="//www.bilibili.com/video/BV14V411n71E?spm_id_from=333.851.b_7265636f6d6d656e64.4" target="_blank"><img src="https://i1.hdslb.com/bfs/archive/98b85378c794f6c6ebde5eac9839482716bb06c7.jpg@412w_232h_1c.jpg" alt="起底逍遥法外九年的传销骗局 请务必把这个视频转发到家人群【甜酱】"><div class="info"><p title="起底逍遥法外九年的传销骗局 请务必把这个视频转发到家人群【甜酱】" class="title">起底逍遥法外九年的传销骗局 请务必把这个视频转发到家人群【甜酱】</p><p class="up"><i class="bilifont bili-icon_xinxi_UPzhu"></i>天降呦呦</p><p class="play">7.9万播放</p></div></a></div><div class="watch-later-video van-watchlater black"><span class="wl-tips" style="display:none;"></span></div></div><div class="video-card-reco"><div class="info-box"><a href="//www.bilibili.com/video/BV1jv411877Q?spm_id_from=333.851.b_7265636f6d6d656e64.5" target="_blank"><img src="https://i1.hdslb.com/bfs/archive/b9e82a3a04e60ffa393303dc54e6b442490b4393.jpg@412w_232h_1c.jpg" alt="此片献给正处于迷茫期的你"><div class="info"><p title="此片献给正处于迷茫期的你" class="title">此片献给正处于迷茫期的你</p><p class="up"><i class="bilifont bili-icon_xinxi_UPzhu"></i>努力の巳宝宝</p><p class="play">9.6万播放</p></div></a></div><div class="watch-later-video van-watchlater black"><span class="wl-tips" style="display:none;"></span></div></div><div class="video-card-reco"><div class="info-box"><a href="//www.bilibili.com/video/BV19B4y1A73D?spm_id_from=333.851.b_7265636f6d6d656e64.6" target="_blank"><img src="https://i2.hdslb.com/bfs/archive/4a4884f9b99387f4e903e59e7105ff2895deb3a8.jpg@412w_232h_1c.jpg" alt="4月那些让人把持不住的游戏要来了！"><div class="info"><p title="4月那些让人把持不住的游戏要来了！" class="title">4月那些让人把持不住的游戏要来了！</p><p class="up"><i class="bilifont bili-icon_xinxi_UPzhu"></i>C酱です</p><p class="play">6.2万播放</p></div></a></div><div class="watch-later-video van-watchlater black"><span class="wl-tips" style="display:none;"></span></div></div><div class="video-card-reco"><div class="info-box"><a href="//www.bilibili.com/video/BV1Gh411D7bc?spm_id_from=333.851.b_7265636f6d6d656e64.7" target="_blank"><img src="https://i0.hdslb.com/bfs/archive/5e94aa17167793005f3926b8e1a75848006f3236.jpg@412w_232h_1c.jpg" alt="【陆夫人x散人】《双人成行》流程实况（更新第一、二集）"><div class="info"><p title="【陆夫人x散人】《双人成行》流程实况（更新第一、二集）" class="title">【陆夫人x散人】《双人成行》流程实况（更新第一、二集）</p><p class="up"><i class="bilifont bili-icon_xinxi_UPzhu"></i>神奇陆夫人</p><p class="play">1.2万播放</p></div></a></div><div class="watch-later-video van-watchlater black"><span class="wl-tips" style="display:none;"></span></div></div><div class="video-card-reco"><div class="info-box"><a href="//www.bilibili.com/video/BV1s54y1h7JL?spm_id_from=333.851.b_7265636f6d6d656e64.8" target="_blank"><img src="https://i1.hdslb.com/bfs/archive/be32279cfe7767a876d243ef6fd02d62d67c1064.jpg@412w_232h_1c.jpg" alt="竞速选手协力打造！MHR最专业太刀教学 基础篇 疾梦猎团"><div class="info"><p title="竞速选手协力打造！MHR最专业太刀教学 基础篇 疾梦猎团" class="title">竞速选手协力打造！MHR最专业太刀教学 基础篇 疾梦猎团</p><p class="up"><i class="bilifont bili-icon_xinxi_UPzhu"></i>xxxYSXxxx</p><p class="play">7.1万播放</p></div></a></div><div class="watch-later-video van-watchlater black"><span class="wl-tips" style="display:none;"></span></div></div><div class="video-card-reco"><div class="info-box"><a href="//www.bilibili.com/video/BV1YA411N71H?spm_id_from=333.851.b_7265636f6d6d656e64.9" target="_blank"><img src="https://i0.hdslb.com/bfs/archive/0dfefa6c5460f7710cbe42047f4060eb5b1d1c2a.jpg@412w_232h_1c.jpg" alt="你那叫说唱厂牌吗【三国Battle版】"><div class="info"><p title="你那叫说唱厂牌吗【三国Battle版】" class="title">你那叫说唱厂牌吗【三国Battle版】</p><p class="up"><i class="bilifont bili-icon_xinxi_UPzhu"></i>谷粒多鼓励</p><p class="play">6.7万播放</p></div></a></div><div class="watch-later-video van-watchlater black"><span class="wl-tips" style="display:none;"></span></div></div><div class="video-card-reco"><div class="info-box"><a href="//www.bilibili.com/video/BV1JK4y1S7zM?spm_id_from=333.851.b_7265636f6d6d656e64.10" target="_blank"><img src="https://i1.hdslb.com/bfs/archive/dc1cbb3170db68d6c467d475a9bf8098bbbbbb3c.jpg@412w_232h_1c.jpg" alt="B 界 等 级 修 仙 传"><div class="info"><p title="B 界 等 级 修 仙 传" class="title">B 界 等 级 修 仙 传</p><p class="up"><i class="bilifont bili-icon_xinxi_UPzhu"></i>进击的金厂长</p><p class="play">142.0万播放</p></div></a></div><div class="watch-later-video van-watchlater black"><span class="wl-tips" style="display:none;"></span></div></div></div><div class="btn prev"><i class="bilifont bili-icon_caozuo_xiangzuo"></i></div><div class="btn next"><i class="bilifont bili-icon_caozuo_xiangyou"></i></div><-><-><-></div>
</div>
</div-->
<style>
html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}

body, html {
    width: 100%;
    height: 100%;
}
* {
    margin: 0;
    padding: 0;
}
*, .van-popover {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    padding: 0;
    color: #505050;
    font: 12px -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
    -webkit-font-smoothing: antialiased;
}
article, aside, blockquote, body, button, code, dd, details, div, dl, dt, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, input, legend, li, menu, nav, ol, p, pre, section, td, textarea, th, ul {
    margin: 0;
    padding: 0;
}
body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: #222;
    background-color: #fff;
}
body, html {
    width: 100%;
    height: 100%;
}
* {
    margin: 0;
    padding: 0;
}
*, .van-popover {
    box-sizing: border-box;
}
* {
    margin: 0;
    padding: 0;
}
* {
    margin: 0;
    padding: 0;
}
.rcmd-box-wrap {
    position: relative;
}
.rcmd-box {
    width: 530px;
    height: 202px;
}
.video-card-reco {
    width: 170px;
    height: 96px;
}
.video-card-reco .info-box {
    position: relative;
    overflow: hidden;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMV…cJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-position: 50%;
}
.video-card-reco .info-box img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
}
.space-between {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}
.b-wrap {
    width: 999px;
}
</style>