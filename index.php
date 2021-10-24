<?php //By WMProject1217
$WMConfig_Request_Base = TRUE;
$WMConfig_Request_Channel = TRUE;
$WMConfig_Request_Plugin = TRUE;
$WMConfig_Request_Style = TRUE;
@ include("./config.php");
@ include("$Wemakeli_OS_Root/assets/wmui/wmuiinit.php");
$WMUI_Page_Class = "mainpage";
$WMUI_Page_Title = "主页";
$WMUI_Page_JavaScript_Looker = 1;
$WMUI_Page_JumpOff_Headbar = 1;
echo "<head>";
@ include("$Wemakeli_OS_Root/assets/wmui/pagehead.php");
?>
<?php
/*
<link rel="stylesheet" href="./assets/wmui/mainpage.css">
*/
echo "</head>";
echo "<body id='WMUI_Page_Main'>";
@ include($Wemakeli_OS_Root . '/assets/wmui/style/vanilla/wmwidget.php');
?>
<div class="WMUI_Page_Main_Block" id="WMUI_Main_Page_Block1" style="height: 200px;">
<div class="WMUI_Widget_Slide" id="WMUI_Widget_Slide" style='position: absolute;'></div>
<script>
new Slide('#WMUI_Widget_Slide', {
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
    width: 460,          // the slide's width
    height: 200,         // the slide's height
    autoswitch: {
        open: true,     // switch the slide automatically
        delay: 5000      // delay time
    },
    animation: 'slideLeft' // animation while you slide, we have: slideUp, slideLeft, fade
})
</script>
<?php
    $Wemakeli_Main_Page_Block1_Shower0 = 8;
    $Wemakeli_Main_Page_Block1_Shower1 = 9;
    $Wemakeli_Main_Page_Block1_Shower2 = 0;
    $Wemakeli_Main_Page_Block1_Shower3 = 1;
    $Wemakeli_Main_Page_Block1_Shower4 = 2;
    $Wemakeli_Main_Page_Block1_Shower5 = 3;

    $videoinfofile = @ fopen("./video/wv$Wemakeli_Main_Page_Block1_Shower0/info.wmst", "r");
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
        goto Wemakeli_Main_Page_Block1_Shower0_echoof;
    }
    //echo "<a href='/video/$videonumber/'>[wv$videoread]    $title [$outputtime][$uploadmaster]</a><br>";
    echo "<div class='WMUI_Page_Shower_ERC' style='left: 465px;'><a href='/video/$videonumber/' target=" . '"_blank"' . ">";
    echo "<img class='WMUI_Page_Shower_ERC_Top' src='/library/image/videotop/wv$Wemakeli_Main_Page_Block1_Shower0.png'></img>";
    if (mb_strlen($title) > 12) {
        echo "<div class='WMUI_Page_Shower_ERC_TitleLite'>$title</div>";
    } else {
        echo "<div class='WMUI_Page_Shower_ERC_Title'>$title</div>";
    }
    /*echo "<pre class='wmuishowertexsr'>";
    $exsrfile = @ file_get_contents("./$videonumber/info.wmexsr");
    echo mb_strlen($exsrfile,'utf-8') > "160" ? mb_substr($exsrfile, 0, "160", "utf-8").'....' : mb_substr($exsrfile, 0, "160", "utf-8");
    echo "</pre>";
    echo "<a href='/video/$videonumber/' target=" . '"_blank"' . ">";*/
    $countfile = @ fopen("./video/$videonumber/count.wmst", "r");
    $playnumber = @ fgets($countfile);
    @ fclose($countfile);
    if(file_exists("./video/$videonumber/danmaku.wml")) {
        $danmakufile = @ fopen("./video/$videonumber/danmaku.wml", "r");
        $danmakudata = @ fread($danmakufile,filesize("./video/$videonumber/danmaku.wml"));
        $danmakunumber = substr_count($danmakudata,"\n");
        fclose($danmakufile);
    } else {
        $danmakufile = @ file_get_contents("./video/$videonumber/danmaku.xml");
        $danmakunumber = substr_count($danmakufile,"</d>");
    }
    if ($playnumber > 10000) {
        if (floor($playnumber / 10000) > 10000) {
            $playnumber = floor($playnumber / 100000000) . " 亿";
        } else {
            $playnumber = floor($playnumber / 10000) . " 万";
        }
    }
    if ($danmakunumber > 10000) {
        if (floor($danmakunumber / 10000) > 10000) {
            $danmakunumber = floor($danmakunumber / 100000000) . " 亿";
        } else {
            $danmakunumber = floor($danmakunumber / 10000) . " 万";
        }
    }
    echo "<div class='WMUI_Page_Shower_ERC_PlayCount'>播放 $playnumber 弹幕 $danmakunumber</div>";
    echo "<div class='WMUI_Page_Shower_ERC_Author'>UP : $uploadmaster</div></a></div>";
    Wemakeli_Main_Page_Block1_Shower0_echoof:

    $videoinfofile = @ fopen("./video/wv$Wemakeli_Main_Page_Block1_Shower1/info.wmst", "r");
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
        goto Wemakeli_Main_Page_Block1_Shower1_echoof;
    }
    //echo "<a href='/video/$videonumber/'>[wv$videoread]    $title [$outputtime][$uploadmaster]</a><br>";
    echo "<div class='WMUI_Page_Shower_ERC' style='left: 640px;'><a href='/video/$videonumber/' target=" . '"_blank"' . ">";
    echo "<img class='WMUI_Page_Shower_ERC_Top' src='/library/image/videotop/wv$Wemakeli_Main_Page_Block1_Shower1.png'></img>";
    if (mb_strlen($title) > 12) {
        echo "<div class='WMUI_Page_Shower_ERC_TitleLite'>$title</div>";
    } else {
        echo "<div class='WMUI_Page_Shower_ERC_Title'>$title</div>";
    }
    /*echo "<pre class='wmuishowertexsr'>";
    $exsrfile = @ file_get_contents("./$videonumber/info.wmexsr");
    echo mb_strlen($exsrfile,'utf-8') > "160" ? mb_substr($exsrfile, 0, "160", "utf-8").'....' : mb_substr($exsrfile, 0, "160", "utf-8");
    echo "</pre>";
    echo "<a href='/video/$videonumber/' target=" . '"_blank"' . ">";*/
    $countfile = @ fopen("./video/$videonumber/count.wmst", "r");
    $playnumber = @ fgets($countfile);
    @ fclose($countfile);
    if(file_exists("./video/$videonumber/danmaku.wml")) {
        $danmakufile = @ fopen("./video/$videonumber/danmaku.wml", "r");
        $danmakudata = @ fread($danmakufile,filesize("./video/$videonumber/danmaku.wml"));
        $danmakunumber = substr_count($danmakudata,"\n");
        fclose($danmakufile);
    } else {
        $danmakufile = @ file_get_contents("./video/$videonumber/danmaku.xml");
        $danmakunumber = substr_count($danmakufile,"</d>");
    }
    if ($playnumber > 10000) {
        if (floor($playnumber / 10000) > 10000) {
            $playnumber = floor($playnumber / 100000000) . " 亿";
        } else {
            $playnumber = floor($playnumber / 10000) . " 万";
        }
    }
    if ($danmakunumber > 10000) {
        if (floor($danmakunumber / 10000) > 10000) {
            $danmakunumber = floor($danmakunumber / 100000000) . " 亿";
        } else {
            $danmakunumber = floor($danmakunumber / 10000) . " 万";
        }
    }
    echo "<div class='WMUI_Page_Shower_ERC_PlayCount'>播放 $playnumber 弹幕 $danmakunumber</div>";
    echo "<div class='WMUI_Page_Shower_ERC_Author'>UP : $uploadmaster</div></a></div>";
    Wemakeli_Main_Page_Block1_Shower1_echoof:

    $videoinfofile = @ fopen("./video/wv$Wemakeli_Main_Page_Block1_Shower2/info.wmst", "r");
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
        goto Wemakeli_Main_Page_Block1_Shower2_echoof;
    }
    //echo "<a href='/video/$videonumber/'>[wv$videoread]    $title [$outputtime][$uploadmaster]</a><br>";
    echo "<div class='WMUI_Page_Shower_ERC' style='left: 815px;'><a href='/video/$videonumber/' target=" . '"_blank"' . ">";
    echo "<img class='WMUI_Page_Shower_ERC_Top' src='/library/image/videotop/wv$Wemakeli_Main_Page_Block1_Shower2.png'></img>";
    if (mb_strlen($title) > 12) {
        echo "<div class='WMUI_Page_Shower_ERC_TitleLite'>$title</div>";
    } else {
        echo "<div class='WMUI_Page_Shower_ERC_Title'>$title</div>";
    }
    /*echo "<pre class='wmuishowertexsr'>";
    $exsrfile = @ file_get_contents("./$videonumber/info.wmexsr");
    echo mb_strlen($exsrfile,'utf-8') > "160" ? mb_substr($exsrfile, 0, "160", "utf-8").'....' : mb_substr($exsrfile, 0, "160", "utf-8");
    echo "</pre>";
    echo "<a href='/video/$videonumber/' target=" . '"_blank"' . ">";*/
    $countfile = @ fopen("./video/$videonumber/count.wmst", "r");
    $playnumber = @ fgets($countfile);
    @ fclose($countfile);
    if(file_exists("./video/$videonumber/danmaku.wml")) {
        $danmakufile = @ fopen("./video/$videonumber/danmaku.wml", "r");
        $danmakudata = @ fread($danmakufile,filesize("./video/$videonumber/danmaku.wml"));
        $danmakunumber = substr_count($danmakudata,"\n");
        fclose($danmakufile);
    } else {
        $danmakufile = @ file_get_contents("./video/$videonumber/danmaku.xml");
        $danmakunumber = substr_count($danmakufile,"</d>");
    }
    if ($playnumber > 10000) {
        if (floor($playnumber / 10000) > 10000) {
            $playnumber = floor($playnumber / 100000000) . " 亿";
        } else {
            $playnumber = floor($playnumber / 10000) . " 万";
        }
    }
    if ($danmakunumber > 10000) {
        if (floor($danmakunumber / 10000) > 10000) {
            $danmakunumber = floor($danmakunumber / 100000000) . " 亿";
        } else {
            $danmakunumber = floor($danmakunumber / 10000) . " 万";
        }
    }
    echo "<div class='WMUI_Page_Shower_ERC_PlayCount'>播放 $playnumber 弹幕 $danmakunumber</div>";
    echo "<div class='WMUI_Page_Shower_ERC_Author'>UP : $uploadmaster</div></a></div>";
    Wemakeli_Main_Page_Block1_Shower2_echoof:

    $videoinfofile = @ fopen("./video/wv$Wemakeli_Main_Page_Block1_Shower3/info.wmst", "r");
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
        goto Wemakeli_Main_Page_Block1_Shower3_echoof;
    }
    //echo "<a href='/video/$videonumber/'>[wv$videoread]    $title [$outputtime][$uploadmaster]</a><br>";
    echo "<div class='WMUI_Page_Shower_ERC' style='left: 465px;top: 101px;'><a href='/video/$videonumber/' target=" . '"_blank"' . ">";
    echo "<img class='WMUI_Page_Shower_ERC_Top' src='/library/image/videotop/wv$Wemakeli_Main_Page_Block1_Shower3.png'></img>";
    if (mb_strlen($title) > 12) {
        echo "<div class='WMUI_Page_Shower_ERC_TitleLite'>$title</div>";
    } else {
        echo "<div class='WMUI_Page_Shower_ERC_Title'>$title</div>";
    }
    /*echo "<pre class='wmuishowertexsr'>";
    $exsrfile = @ file_get_contents("./$videonumber/info.wmexsr");
    echo mb_strlen($exsrfile,'utf-8') > "160" ? mb_substr($exsrfile, 0, "160", "utf-8").'....' : mb_substr($exsrfile, 0, "160", "utf-8");
    echo "</pre>";
    echo "<a href='/video/$videonumber/' target=" . '"_blank"' . ">";*/
    $countfile = @ fopen("./video/$videonumber/count.wmst", "r");
    $playnumber = @ fgets($countfile);
    @ fclose($countfile);
    if(file_exists("./video/$videonumber/danmaku.wml")) {
        $danmakufile = @ fopen("./video/$videonumber/danmaku.wml", "r");
        $danmakudata = @ fread($danmakufile,filesize("./video/$videonumber/danmaku.wml"));
        $danmakunumber = substr_count($danmakudata,"\n");
        fclose($danmakufile);
    } else {
        $danmakufile = @ file_get_contents("./video/$videonumber/danmaku.xml");
        $danmakunumber = substr_count($danmakufile,"</d>");
    }
    if ($playnumber > 10000) {
        if (floor($playnumber / 10000) > 10000) {
            $playnumber = floor($playnumber / 100000000) . " 亿";
        } else {
            $playnumber = floor($playnumber / 10000) . " 万";
        }
    }
    if ($danmakunumber > 10000) {
        if (floor($danmakunumber / 10000) > 10000) {
            $danmakunumber = floor($danmakunumber / 100000000) . " 亿";
        } else {
            $danmakunumber = floor($danmakunumber / 10000) . " 万";
        }
    }
    echo "<div class='WMUI_Page_Shower_ERC_PlayCount'>播放 $playnumber 弹幕 $danmakunumber</div>";
    echo "<div class='WMUI_Page_Shower_ERC_Author'>UP : $uploadmaster</div></a></div>";
    Wemakeli_Main_Page_Block1_Shower3_echoof:
    
    $videoinfofile = @ fopen("./video/wv$Wemakeli_Main_Page_Block1_Shower4/info.wmst", "r");
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
        goto Wemakeli_Main_Page_Block1_Shower4_echoof;
    }
    //echo "<a href='/video/$videonumber/'>[wv$videoread]    $title [$outputtime][$uploadmaster]</a><br>";
    echo "<div class='WMUI_Page_Shower_ERC' style='left: 640px;top: 101px;'><a href='/video/$videonumber/' target=" . '"_blank"' . ">";
    echo "<img class='WMUI_Page_Shower_ERC_Top' src='/library/image/videotop/wv$Wemakeli_Main_Page_Block1_Shower4.png'></img>";
    if (mb_strlen($title) > 12) {
        echo "<div class='WMUI_Page_Shower_ERC_TitleLite'>$title</div>";
    } else {
        echo "<div class='WMUI_Page_Shower_ERC_Title'>$title</div>";
    }
    /*echo "<pre class='wmuishowertexsr'>";
    $exsrfile = @ file_get_contents("./$videonumber/info.wmexsr");
    echo mb_strlen($exsrfile,'utf-8') > "160" ? mb_substr($exsrfile, 0, "160", "utf-8").'....' : mb_substr($exsrfile, 0, "160", "utf-8");
    echo "</pre>";
    echo "<a href='/video/$videonumber/' target=" . '"_blank"' . ">";*/
    $countfile = @ fopen("./video/$videonumber/count.wmst", "r");
    $playnumber = @ fgets($countfile);
    @ fclose($countfile);
    if(file_exists("./video/$videonumber/danmaku.wml")) {
        $danmakufile = @ fopen("./video/$videonumber/danmaku.wml", "r");
        $danmakudata = @ fread($danmakufile,filesize("./video/$videonumber/danmaku.wml"));
        $danmakunumber = substr_count($danmakudata,"\n");
        fclose($danmakufile);
    } else {
        $danmakufile = @ file_get_contents("./video/$videonumber/danmaku.xml");
        $danmakunumber = substr_count($danmakufile,"</d>");
    }
    if ($playnumber > 10000) {
        if (floor($playnumber / 10000) > 10000) {
            $playnumber = floor($playnumber / 100000000) . " 亿";
        } else {
            $playnumber = floor($playnumber / 10000) . " 万";
        }
    }
    if ($danmakunumber > 10000) {
        if (floor($danmakunumber / 10000) > 10000) {
            $danmakunumber = floor($danmakunumber / 100000000) . " 亿";
        } else {
            $danmakunumber = floor($danmakunumber / 10000) . " 万";
        }
    }
    echo "<div class='WMUI_Page_Shower_ERC_PlayCount'>播放 $playnumber 弹幕 $danmakunumber</div>";
    echo "<div class='WMUI_Page_Shower_ERC_Author'>UP : $uploadmaster</div></a></div>";
    Wemakeli_Main_Page_Block1_Shower4_echoof:
    
    $videoinfofile = @ fopen("./video/wv$Wemakeli_Main_Page_Block1_Shower5/info.wmst", "r");
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
        goto Wemakeli_Main_Page_Block1_Shower5_echoof;
    }
    //echo "<a href='/video/$videonumber/'>[wv$videoread]    $title [$outputtime][$uploadmaster]</a><br>";
    echo "<div class='WMUI_Page_Shower_ERC' style='left: 815px;top: 101px;'><a href='/video/$videonumber/' target=" . '"_blank"' . ">";
    echo "<img class='WMUI_Page_Shower_ERC_Top' src='/library/image/videotop/wv$Wemakeli_Main_Page_Block1_Shower5.png'></img>";
    if (mb_strlen($title) > 12) {
        echo "<div class='WMUI_Page_Shower_ERC_TitleLite'>$title</div>";
    } else {
        echo "<div class='WMUI_Page_Shower_ERC_Title'>$title</div>";
    }
    /*echo "<pre class='wmuishowertexsr'>";
    $exsrfile = @ file_get_contents("./$videonumber/info.wmexsr");
    echo mb_strlen($exsrfile,'utf-8') > "160" ? mb_substr($exsrfile, 0, "160", "utf-8").'....' : mb_substr($exsrfile, 0, "160", "utf-8");
    echo "</pre>";
    echo "<a href='/video/$videonumber/' target=" . '"_blank"' . ">";*/
    $countfile = @ fopen("./video/$videonumber/count.wmst", "r");
    $playnumber = @ fgets($countfile);
    @ fclose($countfile);
    if(file_exists("./video/$videonumber/danmaku.wml")) {
        $danmakufile = @ fopen("./video/$videonumber/danmaku.wml", "r");
        $danmakudata = @ fread($danmakufile,filesize("./video/$videonumber/danmaku.wml"));
        $danmakunumber = substr_count($danmakudata,"\n");
        fclose($danmakufile);
    } else {
        $danmakufile = @ file_get_contents("./video/$videonumber/danmaku.xml");
        $danmakunumber = substr_count($danmakufile,"</d>");
    }
    if ($playnumber > 10000) {
        if (floor($playnumber / 10000) > 10000) {
            $playnumber = floor($playnumber / 100000000) . " 亿";
        } else {
            $playnumber = floor($playnumber / 10000) . " 万";
        }
    }
    if ($danmakunumber > 10000) {
        if (floor($danmakunumber / 10000) > 10000) {
            $danmakunumber = floor($danmakunumber / 100000000) . " 亿";
        } else {
            $danmakunumber = floor($danmakunumber / 10000) . " 万";
        }
    }
    echo "<div class='WMUI_Page_Shower_ERC_PlayCount'>播放 $playnumber 弹幕 $danmakunumber</div>";
    echo "<div class='WMUI_Page_Shower_ERC_Author'>UP : $uploadmaster</div></a></div>";
    Wemakeli_Main_Page_Block1_Shower5_echoof:
?>
<script>
WMUIWelcomeMessage();
notify.success('Wemakeli 弹幕视频网','<p><span style="background-color: #FAF20B;" class="glitch_p">「<span class="glitch">Welcome to Wemakeli</span>」</span> </p>',8)
notify.success('Buy Indihome now','IndiHome Paket Streamix<br>10 Mbps Rp320.000<br>20 Mbps Rp385.000<br>50 Mbps Rp615.000<br>100 Mbps Rp957.000' ,12);
</script>
</div>
<div class="WMUI_Page_Main_Block" id="WMUI_Main_Page_Block2">
<br>
<div class="WMUI_Search_Box">
    <input type="search" name="search" id="search" placeholder="请输入关键字">
    <div class="WMUI_Search_Box_Button" onclick="search();">搜索</div>
</div>
<script>
function search() {
    var searchvalue=document.getElementById("search").value;
    window.open('/search/?string='+searchvalue, "_blank");
}
</script>
<br>
<?php
//Show icon and random splashes
echo "<br>";
echo "<img src='$Wemakeli_Web_Root/library/image/common/wmproject1217.png'> <img src='$Wemakeli_Web_Root/library/image/common/wemakeli.png'>";
echo "<pre id='randombox'>";
$arr = file($Wemakeli_OS_Root . "/assets/txt/splashes.txt");
$n = rand(0,count($arr));
if ($arr[$n]<>"") {
    echo $arr[$n];
} else {
    echo "真的有人会看这个吗？";
}
echo "</pre>";
?>
<table class='debug' border='1' style='position: relative;'>
<tr>
<td>
<pre>
<?php
echo "Wemakeli Danmaku Video Website System" . " [" . Wemakeli_System_Version_Type . "] [Version " . Wemakeli_System_Version_Main . "." . Wemakeli_System_Version_Second . " Build " . Wemakeli_System_Version_Build . "]";
?>

WMProject1217 Studios
Nginx 1.15.11 + PHP 7.3.4nts
已配置一个 MySQL 数据库，但无法建立与服务器的连接。
</pre>
<h3>由于网站代码总是在重写，浏览可能不稳定。</h3>
<div>Debug</div>
<?php
echo "<div id='wmuisctimeblock'>See this message means js error</div>";
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
?>
<script>
window.onload=function(){
NowTimeSC();
setInterval("NowTimeSC()",16);
}
function NowTimeSC(){
    timescdata = WMUINowTimeSC();
    tempa = timescdata.split("-");
    tempb = tempa[0].split("/");
    tempc = tempa[1].split(":");
    document.getElementById("wmuisctimeblock").innerHTML="Time : [SC]"+tempb[0]+"年"+tempb[1]+"月"+tempb[2]+"日  "+tempc[0]+":"+tempc[1]+":"+tempc[2]+":"+tempc[3];
}
</script>
<?php
echo "用户端应用程序 : " . $_SERVER['HTTP_USER_AGENT'] . "<br>";
echo "用户访问时 IP : " .  $_SERVER['REMOTE_ADDR'] . "<br>";
echo "用户访问时端口 : " .  $_SERVER['REMOTE_PORT'] . "<br>";
echo "用户页面跳转 : " .  $_SERVER['HTTP_REFERER'] . "<br>";
echo "WMUI Style 信息<br>";
echo "名称 : $WMUI_Style_Name<br>";
echo "描述 : $WMUI_Style_Description<br>";
echo 'WMUI Style 类<br>';
echo "可用的类 : $WMUI_Style_Class<br>";
echo "当前的类 : $WMUI_Style_RT_Class<br>";
echo "当前的css : $WMUI_Style_Class_RT_css<br>";
echo "当前的js : $WMUI_Style_Class_RT_js<br>";
if ($WMUI_Style_NightMode == "1") {
    echo "显示模式 : Night<br>";
} else {
    echo "显示模式 : Day<br>";
}
echo '<br>';
?>
<button class="wmuibutton" onclick="document.getElementById('WMUI_Page_Main').className='WMUI_Page_Main_Night';NightModeStart();">打开黑夜模式</button>
<button class="wmuibutton" onclick="document.getElementById('WMUI_Page_Main').className='WMUI_Page_Main_Day';NightModeShutdown();">关闭黑夜模式</button>
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
//wmuidialog.show("这是一个特性","请关闭此提示框");
</script>
</td>
</tr>
</table>
</div>

<?php

if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php')=='1') {
    @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php');
}
?>