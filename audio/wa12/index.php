<?php //By WMProject1217
echo "<head itemprop='audio' itemscope itemtype='http://schema.org/AudioObject'>";
include('../../config.php');
@ include("$Wemakeli_OS_Root/assets/wmui/wmuiinit.php");
$wmui_backpath='../';
$wmui_classnow='audio';
$wmui_jumpoffheadbar='1';
$audioinfofile = @ fopen("info.wmst", "r") or die("<title>Error 0x00000002</title>Error 0x00000002<br>Audio info load unsuccessful.");
$title = fgets($audioinfofile);
$outputtime = fgets($audioinfofile);
$uploadmaster = fgets($audioinfofile);
$audionumber= fgets($audioinfofile);
fclose($audioinfofile);
$countfile = @ fopen("count.wmst", "r");
$playnumber=fgets($countfile);
$playnumber = $playnumber + 1;
fclose($countfile);
$countfile = @ fopen("count.wmst", "w");
fwrite($countfile,$playnumber);
fclose($countfile);
echo "<script src='$Wemakeli_Web_Root/assets/js/APlayer.js'></script>"; 
echo "<link rel='stylesheet' href='$Wemakeli_Web_Root/assets//css/APlayer.css'>";
$WMUI_Page_Class = "audio";
$WMUI_Page_Title = $title;
$WMUI_Page_JavaScript_Looker = 0;
?>
<meta itemprop="name" name="title" content="星空鉄道とシロの旅"> 
<meta itemprop="image" content="http://192.168.2.6/audio/wa12/logo.png"> 
<meta property="og:type" content="audio"/> 
<meta property="og:title" content="星空鉄道とシロの旅"/> 
<meta property="og:image" content="http://192.168.2.6/audio/wa12/logo.png"/> 
<meta property="og:url" content="http://192.168.2.6/audio/wa12/"/> 
<meta property="og:audiosrc" content="http://192.168.2.6/audio/wa12/bgm01.wav"/> 
<meta property="og:artist" content="星空鉄道とシロの旅"/>
<?php
@ include("$Wemakeli_OS_Root/assets/wmui/pagehead.php");
echo "</head>";
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/wmwidget.php')=='1') {
  @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/wmwidget.php');
} else {
  @ include($Wemakeli_OS_Root . '/assets/wmui/wmwidget.php');
}
echo "<h3>" . $title . "</h3>";
echo "<div>" . $outputtime . " , " . $audionumber . " , 播放 " . $playnumber . " , UP : " . $uploadmaster . "</div>";
echo "<div id='player'>";
echo "<pre class='aplayer-lrc-content'>";
echo "";
echo "</pre>";
echo "</div>";
?>
<script>
var ap = new APlayer
        ({
            element: document.getElementById('player'),
            narrow: false,
            autoplay: true,
            showlrc: false,
            music: [{
                    title: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $title);?> BGM01 星空鉄道ミルキィウェイ",
                    author: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);?>",
                    url: './bgm01.wav',
                    pic: './logo.png'
                    },
                    {
                    title: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $title);?> BGM02 気ままな日常",
                    author: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);?>",
                    url: './bgm02.wav',
                    pic: './logo.png'
                    },
                    {
                    title: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $title);?> BGM03 星の海",
                    author: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);?>",
                    url: './bgm03.wav',
                    pic: './logo.png'
                    },
                    {
                    title: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $title);?> BGM04 列車はゆく",
                    author: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);?>",
                    url: './bgm04.wav',
                    pic: './logo.png'
                    },
                    {
                    title: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $title);?> BGM05 猫耳としっぽ",
                    author: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);?>",
                    url: './bgm05.wav',
                    pic: './logo.png'
                    },
                    {
                    title: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $title);?> BGM06 Cutie Conductor",
                    author: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);?>",
                    url: './bgm06.wav',
                    pic: './logo.png'
                    },
                    {
                    title: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $title);?> BGM07 おかえりなさい",
                    author: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);?>",
                    url: './bgm07.wav',
                    pic: './logo.png'
                    },
                    {
                    title: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $title);?> BGM08 暗影",
                    author: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);?>",
                    url: './bgm08.wav',
                    pic: './logo.png'
                    },
                    {
                    title: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $title);?> BGM09 砕け散る星",
                    author: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);?>",
                    url: './bgm09.wav',
                    pic: './logo.png'
                    },
                    {
                    title: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $title);?> BGM10 終わらない旅",
                    author: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);?>",
                    url: './bgm10.wav',
                    pic: './logo.png'
                    },
                    {
                    title: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $title);?> BGM11 スタートリップ (piano ver.)",
                    author: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster);?>",
                    url: './bgm11.wav',
                    pic: './logo.png'
                    }]
        });
ap.init();
</script>
<?php
//td.talk
if (isset($_COOKIE["username"])){
    echo "<table>";
    echo "<tr>";
    echo "<td class='talk'>";
    echo "<div>评论区</div>";
    echo "<form action='posttalk.php' method='POST'>";
    echo "<textarea style='OVERFLOW:  Visble' name='usertalk' value='' class='talkboxinput'></textarea>";
    echo "<input type='submit' value='提交'>";
    echo "</form>";
    @ include('talk.php');
    echo "</td>";
    echo "</tr>";
    echo "</table>";
    if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php')=='1') {
      @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php');
    }
    echo "</td>";
    echo "</tr>";
    echo "</table>";
    echo "</body>";
  }else{
    echo "<table>";
    echo "<tr>";
    echo "<td class='talk'>";
    echo "<div>评论区</div>";
    echo "你必须登录才能发表评论。";
    @ include('talk.php');
    echo "</td>";
    echo "</tr>";
    echo "</table>";
    if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php')=='1') {
      @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php');
    }
    echo "</td>";
    echo "</tr>";
    echo "</table>";
    echo "</body>";
  }
?>
