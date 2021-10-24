<?php //by WMProject1217
echo "<!DOCTYPE html>";
echo "<html>";
@ include('../../config.php');
@ include("$Wemakeli_OS_Root/assets/wmui/wmuiinit.php");
$videoinfofile = @ fopen("./info.wmst", "r") or die("<title>Error 0x00000002</title>Error 0x00000002<br>Video info load unsuccessful.");
$title = fgets($videoinfofile);
$outputtime = fgets($videoinfofile);
$uploadmaster = fgets($videoinfofile);
$videonumber= fgets($videoinfofile);
fclose($videoinfofile);
$countfile = @ fopen("./count.wmst", "r");
$playnumber=fgets($countfile);
$playnumber = $playnumber + 1;
fclose($countfile);
$countfile = @ fopen("./count.wmst", "w");
fwrite($countfile,$playnumber);
fclose($countfile);
$danmakufile = @ file_get_contents("./danmaku.xml");
$danmakunumber = substr_count($danmakufile,"</d>");
$wmui_backpath='../';
$WMUI_Page_Class = "video";
$WMUI_Page_Title = $title;
$WMUI_Page_JavaScript_Looker = 0;
$wmui_jumpoffheadbar = 1;
echo "<head>";
echo "<link href='$Wemakeli_Web_Root/assets/css/scojs.css' rel='stylesheet'>";
echo "<link href='$Wemakeli_Web_Root/assets/css/colpick.css' rel='stylesheet'>";
echo "<link href='$Wemakeli_Web_Root/assets/css/bootstrap.css' rel='stylesheet'>";
echo "<link rel='stylesheet' href='$Wemakeli_Web_Root/assets/css/main.css'>";
echo "<link rel='stylesheet' href='$Wemakeli_Web_Root/assets/css/aliplayer.css'/>";
?>
<link href="/assets/css/as.css" rel="stylesheet" type="text/css">
<link href="/assets/css/normalize.css" rel="stylesheet" type="text/css">
<link href="/assets/css/night.css" rel="stylesheet" type="text/css">
<link href="/assets/css/base.css" rel="stylesheet" type="text/css"/>
<script src="/assets/js/CommentCoreLibrary.min.js" type="text/javascript"></script>
<script src="/assets/js/ABPlayerHTML5.js" type="text/javascript"></script>
<?php
@ include("$Wemakeli_OS_Root/assets/wmui/pagehead.php");
echo "</head>";
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/wmwidget.php')=='1') {
  @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/wmwidget.php');
} else {
  @ include($Wemakeli_OS_Root . '/assets/wmui/wmwidget.php');
}
echo "<h3>" . $title . "</h3>";
echo "<div>" . $outputtime . " , " . $videonumber . " , 播放 " . $playnumber . " , 弹幕 " . $danmakunumber . "</div>";
/*echo "<table>";
echo "<tr>";
echo "<td class='pushonuser'>";
echo "<a href='" . $wmsys_address . "/user/default/index.php'>";
echo "<img src='" . $wmsys_address . "/user/default/user.png' class='pushonuserimage' title=' $uploadmaster' alt=' $uploadmaster'></img>";
echo "</a>";
echo "<echo class=toplineecho>" . $uploadmaster . "</echo><br>";
echo "<echo class=toplineecho>这个人很神秘,还没有个人简介呢</echo><br>";
echo "<a href='" . $wmsys_address . "/accout/submit.php?$uploadmaster'>";
echo "<input name='关注' type='button' class='submit' title='关注' value='关注'></a>";
echo "<echo> </echo";
echo "<a href='" . $wmsys_address . "/user/space.php?$uploadmaster'>";
echo "<input name='个人主页' type='button' class='submit' title='个人主页' value='个人主页'></a>";
echo "</td>";
echo "</tr>";
echo "</table>";*/
?>
<video id="video-1" autobuffer="true" data-setup="{}" width="800" height="450">
<source src="./video.mp4" type="video/mp4">
<p>Your browser does not support html5 video!</p>
</video>
<div id="load-player"></div>
<script>
var inst = ABP.create(document.getElementById("load-player"), {
  "src":{
    "playlist":[
      {
        "video":document.getElementById("video-1"),
        "comments":"./danmaku.xml"
      }
    ]
  },
  "width":800,
  "height":522
});
</script>
<pre>
<?php @ readfile('./info.wmexsr'); ?>
</pre>
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
}
?>
</html>