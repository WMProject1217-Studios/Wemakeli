<?php //by WMProject1217
echo "<!DOCTYPE html>";
echo "<html>";
include('../../config.php');
@ include("$Wemakeli_OS_Root/assets/wmui/wmuiinit.php");
$wmui_backpath='../';
$wmui_classnow='video';
$wmui_jumpoffheadbar='1';
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
$danmakufile =@ fopen("./danmaku.wml", "r");
$danmakudata=@ fread($danmakufile,filesize("./$videolabel/danmaku.wml"));
$danmakunumber=substr_count($danmakudata,"\n");
fclose($danmakufile);
$WMUI_Page_Class = "video";
$WMUI_Page_Title = $title;
$WMUI_Page_JavaScript_Looker = 0;
$wmui_jumpoffheadbar = 1;
echo "<head>";
echo "<link href='$WMUI_Web_Root/assets/wmplayer/scojs.css' rel='stylesheet'>";
echo "<link href='$WMUI_Web_Root/assets/wmplayer/colpick.css' rel='stylesheet'>";
echo "<link href='$WMUI_Web_Root/assets/wmplayer/bootstrap.css' rel='stylesheet'>";
echo "<link rel='stylesheet' href='$WMUI_Web_Root/assets/wmplayer/wmplayer.css'>";
@ include("$Wemakeli_OS_Root/assets/wmui/pagehead.php");
echo "</head>";
echo "<body>";
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

<div id="wmplayer" style="left: 2%;/*margin-left:-400px;*/">

</div>
<div style="display: none">
  <span class="glyphicon" aria-hidden="true">&#xe072</span>
  <span class="glyphicon" aria-hidden="true">&#xe073</span>
  <span class="glyphicon" aria-hidden="true">&#xe242</span>
  <span class="glyphicon" aria-hidden="true">&#xe115</span>
  <span class="glyphicon" aria-hidden="true">&#xe111</span>
  <span class="glyphicon" aria-hidden="true">&#xe096</span>
  <span class="glyphicon" aria-hidden="true">&#xe097</span>
</div>
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
}
?>
<script src="/assets/wmplayer/jquery.shCircleLoader.js"></script>
<script src="/assets/wmplayer/sco.tooltip.js"></script>
<script src="/assets/wmplayer/colpick.js"></script>
<script src="/assets/wmplayer/jquery.danmu.js"></script>
<script src="/assets/wmplayer/wmplayer.js"></script>
<script>

$("#wmplayer").danmakuPlayer({
    src:"video.mp4",
    height: "480px", //区域的高度
    width: "800px" //区域的宽度
    ,urlToGetDanmu:"<?php echo $wmsys_address?>/video/<?php echo $videonumber?>/query.php"
    ,urlToPostDanmu:"<?php echo $wmsys_address?>/video/<?php echo $videonumber?>/stone.php"
  });

  $("#wmplayer .danmaku-div").danmaku("adddanmaku",[
    <?php
    $danmakufile = @ fopen("danmaku.wml", "r") or die("])");
    echo ",";
    while(!feof($danmakufile)) {
    print fgets($danmakufile) . ",";
  
}
fclose($danmakufile);
    ?>
  ])
</script>
<?php
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php')=='1') {
  @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php');
}
?>
</html>