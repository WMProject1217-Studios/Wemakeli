<?php //By WMProject1217
$WMConfig_Request_Base = TRUE;
$WMConfig_Request_Channel = TRUE;
$WMConfig_Request_Plugin = TRUE;
$WMConfig_Request_Style = TRUE;
@ include("../config.php");
@ include("$Wemakeli_OS_Root/assets/wmui/wmuiinit.php");
$WMUI_Page_Class = "video";
$WMUI_Page_Title = "视频";
$WMUI_Page_JavaScript_Looker = 1;
$WMUI_Page_JumpOff_Headbar = 1;
echo "<head>";
@ include("$Wemakeli_OS_Root/assets/wmui/pagehead.php");
?>
        <style>
            a {
                text-decoration: none;
            }
            .Wemakeli_Video_Page_Background {
                position: fixed;
                z-index: -16;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                background: url(background.jpg) no-repeat center/cover;
            }

            .Wemakeli_Video_Page_AreaVideo {
                position: absolute;
                top: 0px;
                left: 0px;
                height: 1280px;
                width: 1000px;
                background-color: rgb(102,204,255,0.6);
            }

            .Wemakeli_Video_Page_VideoInfoBox {
                position: relative;
                float: left;
                width: 330px;
                height: 270px;
            }

            .Wemakeli_Video_Page_VideoInfoBox_Cover {
                position: absolute;
                top: 0px;
                left: 0px;
                height: 200px;
                width: 300px;
            }

            .Wemakeli_Video_Page_VideoInfoBox_PlayNumberBack {
                position: absolute;
                top: 170px;
                left: 0px;
                height: 30px;
                width: 300px;
                background-color: rgb(0,0,0,0.4);
            }

            .Wemakeli_Video_Page_VideoInfoBox_PlayNumber {
                position: absolute;
                top: 170px;
                left: 4px;
                height: 30px;
                width: 300px;
                font-size: 20px;
                color: #FFFFFF;
                text-shadow:2px 2px 4px #000000;
            }

            .Wemakeli_Video_Page_VideoInfoBox_Author {
                position: absolute;
                top: 204px;
                left: 0px;
                height: 48px;
                width: 48px;
            }

            .Wemakeli_Video_Page_VideoInfoBox_Text {
                position: absolute;
                top: 204px;
                left: 52px;
                height: 40px;
                width: 300px;
                font-size: 20px;
                color: #FFFFFF;
                text-shadow:2px 2px 4px #000000;
            }

            .Wemakeli_Video_Page_VideoInfoBox_AuthorName {
                position: absolute;
                top: 236px;
                left: 52px;
                height: 40px;
                width: 300px;
                font-size: 12px;
                color: #FFFFFF;
                text-shadow:2px 2px 4px #000000;
            }



            .Wemakeli_Video_Page_AreaTab {
                position: absolute;
                top: 0px;
                left: 1000px;
                height: 1280px;
                width: 400px;
                background-color: rgb(237,0,0,0.6);
            }

            .Wemakeli_Video_Page_TabBox {
                position: relative;
                top: 4px;
                left: 10px;
                width: 380px;
            }

            .Wemakeli_Video_Page_TabTitle {
                position: relative;
                top: 4px;
                left: 4px;
                height: 30px;
                font-size: 20px;
                color: #FFFFFF;
                text-shadow:2px 2px 4px #000000;
            }

            .Wemakeli_Video_Page_LabTitle {
                position: relative;
                top: 4px;
                left: 20px;
                height: 30px;
                font-size: 16px;
                color: #FFFFFF;
                text-shadow:2px 2px 4px #000000;
            }

            .Wemakeli_Video_Page_LabItem {
                position: relative;
                float: left;
                width: 120px;
                height: 30px;
                margin: 2px;
                display: block;
                color: #FFFFFF;
                background: #293550;
                text-align: left;
            }

            .Wemakeli_Video_Page_LabItem a {
                display: block;
                font-size: 12px;
                color: #FFFFFF;
                text-align: left;
            }
        </style>
<?php
echo "</head>";
echo "<body>";
@ include($Wemakeli_OS_Root . '/assets/wmui/style/vanilla/wmwidget.php');
echo "<div class='WMUI_Page_Main_Block' id='WMUI_Main_Page_Block1' style='left:0px;'>";
?>
        <div class="Wemakeli_Video_Page_Background"></div>
        <div class="Wemakeli_Video_Page_AreaVideo">
<?php
/*$videoread = -1;
$videoendfile = @ fopen("./videoend.wmst", "r") or die("<title>Error 0x00000007</title>Error 0x00000007<br>Page data load unsuccessful.");
$videoendun = @ fgets($videoendfile);
@ fclose($videoendfile);
$videoendsplit = explode(';',$videoendun);
$videoend = $videoendsplit[0];*/
if ($_GET['type']=="all") {
    $videoread = intval($_GET['page']) * 10 - 1;
    $videoend = $videoread + 10;
    $viewtype = "all";
    //echo "<script>alert('" . $videoread . "//" . $videoend ."');</script>";
} else {
    $videoread = -1;
    $videoend = $videoread + 10;
    $viewtype = "all";
}
//echo "Debug : " . $videoread . "/" . $videoend;
/*while ($videoread<>$videoend) {
    $videoinfofile = @ fopen("./wv$videoread/info.wmst", "r");
    $title = @ fgets($videoinfofile);
    $outputtime = @ fgets($videoinfofile);
    $uploadmaster = @ fgets($videoinfofile);
    $videonumber= @ fgets($videoinfofile);
    @ fclose($videoinfofile);
    $videonumber = str_replace(array("\r\n", "\r", "\n"), "", $videonumber);
    $title = str_replace(array("\r\n", "\r", "\n"), "", $title);  
    $outputtime = str_replace(array("\r\n", "\r", "\n"), "", $outputtime);  
    $uploadmaster = str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);  
    if ($outputtime=="") {
        goto offechooutline;
    }
    //echo "<a href='/video/$videonumber/'>[wv$videoread]    $title [$outputtime][$uploadmaster]</a><br>";
    echo "<div class='wmuishowert'>";
    echo "<a href='/video/$videonumber/' target=" . '"_blank"' . ">";
    echo "<img class='wmuishowerttop' src='/library/image/videotop/wv$videoread.png'></img>";
    echo "<div class='wmuishowerttitle'>$title</div></a>";
    echo "<pre class='wmuishowertexsr'>";
    $exsrfile = @ file_get_contents("./$videonumber/info.wmexsr");
    echo mb_strlen($exsrfile,'utf-8') > "160" ? mb_substr($exsrfile, 0, "160", "utf-8").'....' : mb_substr($exsrfile, 0, "160", "utf-8");
    echo "</pre>";
    echo "<a href='/video/$videonumber/' target=" . '"_blank"' . ">";
    $countfile = @ fopen("./$videonumber/count.wmst", "r");
    $playnumber = @ fgets($countfile);
    @ fclose($countfile);
    if(file_exists("./$videonumber/danmaku.wml")) {
        $danmakufile = @ fopen("./$videonumber/danmaku.wml", "r");
        $danmakudata = @ fread($danmakufile,filesize("./$videonumber/danmaku.wml"));
        $danmakunumber = substr_count($danmakudata,"\n");
        fclose($danmakufile);
    } else {
        $danmakufile = @ file_get_contents("./$videonumber/danmaku.xml");
        $danmakunumber = substr_count($danmakufile,"</d>");
    }
    echo "<div class='wmuishowertplaycount'>播放 $playnumber 弹幕 $danmakunumber</div>";
    echo "<div class='wmuishowertupmaster'>UP : $uploadmaster</div></a>";
    echo "</div><br>";
    offechooutline:
    $videoread = $videoread + 1;
}*/
while ($videoread<>$videoend) {
    $videoinfofile = @ fopen("./wv$videoread/info.wmst", "r");
    $title = @ fgets($videoinfofile);
    $outputtime = @ fgets($videoinfofile);
    $uploadmaster = @ fgets($videoinfofile);
    $videonumber= @ fgets($videoinfofile);
    @ fclose($videoinfofile);
    $videonumber = str_replace(array("\r\n", "\r", "\n"), "", $videonumber);
    $title = str_replace(array("\r\n", "\r", "\n"), "", $title);  
    $outputtime = str_replace(array("\r\n", "\r", "\n"), "", $outputtime);  
    $uploadmaster = str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);  
    if ($outputtime=="") {
        goto offechooutline;
    }
    //echo "<a href='/video/$videonumber/'>[wv$videoread]    $title [$outputtime][$uploadmaster]</a><br>";
    /*echo "<div class='wmuishowert'>";
    echo "<a href='/video/$videonumber/' target=" . '"_blank"' . ">";
    echo "<img class='wmuishowerttop' src='/library/image/videotop/wv$videoread.png'></img>";
    echo "<div class='wmuishowerttitle'>$title</div></a>";
    echo "<pre class='wmuishowertexsr'>";*/
    $exsrfile = @ file_get_contents("./$videonumber/info.wmexsr");
    /*echo mb_strlen($exsrfile,'utf-8') > "160" ? mb_substr($exsrfile, 0, "160", "utf-8").'....' : mb_substr($exsrfile, 0, "160", "utf-8");
    echo "</pre>";
    echo "<a href='/video/$videonumber/' target=" . '"_blank"' . ">";*/
    $countfile = @ fopen("./$videonumber/count.wmst", "r");
    $playnumber = @ fgets($countfile);
    @ fclose($countfile);
    if(file_exists("./$videonumber/danmaku.wml")) {
        $danmakufile = @ fopen("./$videonumber/danmaku.wml", "r");
        $danmakudata = @ fread($danmakufile,filesize("./$videonumber/danmaku.wml"));
        $danmakunumber = substr_count($danmakudata,"\n");
        fclose($danmakufile);
    } else {
        $danmakufile = @ file_get_contents("./$videonumber/danmaku.xml");
        $danmakunumber = substr_count($danmakufile,"</d>");
    }
    /*echo "<div class='wmuishowertplaycount'>播放 $playnumber 弹幕 $danmakunumber</div>";
    echo "<div class='wmuishowertupmaster'>UP : $uploadmaster</div></a>";*/


    echo "<div class='Wemakeli_Video_Page_VideoInfoBox'>";
    echo "<a href='/video/$videonumber/' target=" . '"_blank"' . ">";
    echo "<img class='Wemakeli_Video_Page_VideoInfoBox_Cover' src='http://wemakeli.net.wm/library/image/videotop/$videonumber.png'></img>";
    echo "<div class='Wemakeli_Video_Page_VideoInfoBox_PlayNumberBack'></div>";
    echo "<div class='Wemakeli_Video_Page_VideoInfoBox_PlayNumber'>播放 $playnumber 弹幕 $danmakunumber</div>";
    echo "<div class='Wemakeli_Video_Page_VideoInfoBox_Text'>$title</div>";
    echo "<img class='Wemakeli_Video_Page_VideoInfoBox_Author' src='http://wemakeli.net.wm/user/default/0.png'></img>";
    echo "<div class='Wemakeli_Video_Page_VideoInfoBox_AuthorName'>$uploadmaster</div>";
    echo "</a>";
    echo "</div>";
    offechooutline:
    $videoread = $videoread + 1;
}
echo "</div><br>";
echo "<div class='wmuicenterutil' style='position:fixed; z-index: 16384; background:#66CCFF;'>";
echo "<button onclick='firstpage();'>返回第零页</button>";
echo "<button onclick='beforepage();'>上一页</button>";
echo "<echo style='color:#FFFFFF;'>第 " . intval($_GET['page']) . " 页 , 共 -inf 页</echo>";
echo "<button onclick='nextpage();'>下一页</button>";
echo "<button onclick='lastpage();'>到最后一页</button>";
echo "</div>";
$tempa = intval($_GET['page']) - 1;
$tempb = intval($_GET['page']) + 1;
echo "<script>
function firstpage(){
    window.location.href='./index.php?type=$viewtype&page=0';
}

function beforepage(){
    window.location.href='./index.php?type=$viewtype&page=$tempa';
}

function nextpage(){
    window.location.href='./index.php?type=$viewtype&page=$tempb';
}

function lastpage(){
    window.location.href='./index.php?type=$viewtype&page=922337203685477500';
}</script>";
echo "<br><br><br><br><br><br>";
echo "</div>";
?>
<div class="Wemakeli_Video_Page_AreaTab">
            <div class="Wemakeli_Video_Page_TabBox">
                <div class="Wemakeli_Video_Page_TabTitle">视频分类</div>
                <div class="Wemakeli_Video_Page_LabTitle">动画</div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;MAD·AMV</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;MMD·3D</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;短片·手术·配音</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;手办·模玩</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;特摄</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;综合</a></div>
                <div style="clear: both"></div>
                <div class="Wemakeli_Video_Page_LabTitle">音乐</div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;原创音乐</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;翻唱</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;VOCALOID·UTAU</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;电音</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;演奏</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;MV</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;音乐现场</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;音乐综合</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;音频</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;说唱</a></div>
                <div style="clear: both"></div>
                <div class="Wemakeli_Video_Page_LabTitle">舞蹈</div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;宅舞</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;街舞</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;明星舞蹈</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;中国舞</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;舞蹈综合</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;舞蹈教程</a></div>
                <div style="clear: both"></div>
                <div class="Wemakeli_Video_Page_LabTitle">知识</div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;科学科普</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;社科人文</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;财经</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;校园学习</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;职业现场</a></div>
                <div class="Wemakeli_Video_Page_LabItem"><a rel="nofollow" href="?type=" target="_blank">&nbsp;&nbsp;&nbsp;野生技术协会</a></div>
                <div style="clear: both"></div>
            </div>
        </div>
<?php
echo "</div>";
echo "<div class='WMUI_Page_Background_a'></div>";
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php')=='1') {
    @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php');
}
?>
<script>
    notify.error('Wemakeli Kernel Load Thread','发生了一个错误。<br>页面结构文件解析出错,请检查index.php和webshard.wmst!' ,12);
    notify.warning('Wemakeli 弹幕视频网','因为发生了一个错误,您在浏览时可能会遇到问题.<br>如果遇到了问题,请与网站管理员联系.',12);
</script>