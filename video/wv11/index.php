<?php //by WMProject1217
$WMConfig_Request_Base = TRUE;
$WMConfig_Request_Channel = TRUE;
$WMConfig_Request_Plugin = TRUE;
$WMConfig_Request_Style = TRUE;
@ include('../../config.php');
@ include("$Wemakeli_OS_Root/assets/wmui/wmuiinit.php");
$Wemakeli_Video_Config_File_fopen = @ fopen('./info.wmst', "r")or die('Kernel Panic ![Wemakeli video config file fopen]');
while(!feof($Wemakeli_Video_Config_File_fopen))
{
    $Wemakeli_Video_Config_File_fgets = @ fgets($Wemakeli_Video_Config_File_fopen);
    if (substr($Wemakeli_Video_Config_File_fgets,0,2) == '##') {
        goto Wemakeli_Video_Config_File_endofloop;
    }
    if (substr($Wemakeli_Video_Config_File_fgets,0,2) == '!#') {
        $Wemakeli_Video_Config_File_tempa = str_replace(array("\r\n", "\r", "\n"), "", $Wemakeli_Video_Config_File_fgets);
        $Wemakeli_Video_Config_File_tempa = substr($Wemakeli_Video_Config_File_tempa,2);
        $Wemakeli_Video_Config_File_tempb = explode('=',$Wemakeli_Video_Config_File_tempa);
        ${'Wemakeli_Video_' . $Wemakeli_Video_Config_File_tempb[0]} = $Wemakeli_Video_Config_File_tempb[1];
    }
    Wemakeli_Video_Config_File_endofloop:
}
$Wemakeli_Video_Channel_Name = ${"Wemakeli_Config_Video_Channel_" . $Wemakeli_Video_Channel};
$Wemakeli_Video_Count_File = @ fopen("./count.wmst", "r");
$Wemakeli_Video_Playnumber = @ fgets($Wemakeli_Video_Count_File);
$Wemakeli_Video_Playnumber = $Wemakeli_Video_Playnumber + 1;
fclose($Wemakeli_Video_Count_File);
$Wemakeli_Video_Count_File = @ fopen("./count.wmst", "w");
fwrite($Wemakeli_Video_Count_File,$Wemakeli_Video_Playnumber);
fclose($Wemakeli_Video_Count_File);
$Wemakeli_Video_Danmaku_File = @ fopen("./danmaku.wml", "r");
$Wemakeli_Video_Danmaku_Data = @ fread($Wemakeli_Video_Danmaku_File,filesize("./danmaku.wml"));
$Wemakeli_Video_Danmakunumber = substr_count($Wemakeli_Video_Danmaku_Data,"\n");
@ fclose($Wemakeli_Video_Danmaku_File);
$Wemakeli_Web_Meta_Description = $Wemakeli_Video_Description;
$Wemakeli_Web_Meta_Keywords = $Wemakeli_Video_Title;
$WMUI_Page_Class = "video";
$WMUI_Page_Title = $Wemakeli_Video_Title;
$WMUI_Page_JavaScript_Looker = 0;
$WMUI_Page_JumpOff_Headbar = 1;
echo "<!DOCTYPE html>";
echo "<html>";
echo "<head>";
echo "<link href='$Wemakeli_Web_Root/assets/wmplayer/scojs.css' rel='stylesheet'>";
echo "<link href='$Wemakeli_Web_Root/assets/wmplayer/colpick.css' rel='stylesheet'>";
echo "<link href='$Wemakeli_Web_Root/assets/wmplayer/bootstrap.css' rel='stylesheet'>";
echo "<link rel='stylesheet' href='$Wemakeli_Web_Root/assets/wmplayer/wmplayer.css'>";
@ include("$Wemakeli_OS_Root/assets/wmui/pagehead.php");
echo "</head>";
echo "<body>";
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/wmwidget.php') == '1') {
    @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/wmwidget.php');
} else {
    @ include($Wemakeli_OS_Root . '/assets/wmui/wmwidget.php');
}
?>
<div class="WMUI_Page_Main_Block" style="height: 90px;">
<div class="WMUI_Page_Video_Title_Block" id="WMUI_Page_Video_Title_Block">
<?php
echo "<h3>" . $Wemakeli_Video_Title . "</h3>";
echo "<div>" . $Wemakeli_Video_Date . " , " . $Wemakeli_Video_Link . " , 播放 " . $Wemakeli_Video_Playnumber . " , 弹幕 " . $Wemakeli_Video_Danmakunumber . "</div>";
?>
</div>
<div class="WMUI_Page_Video_Author_Block" id="WMUI_Page_Video_Author_Block">
<?php
echo "<a href='" . $Wemakeli_Web_Root . "/user/index.php?useruid=-1'>";
echo "<img src='/user/default/0.png'>";
echo "<echo class=toplineecho>" . $Wemakeli_Video_Author . "</echo><br>";
echo "<echo class=toplineecho>这个人很神秘,还没有个人简介呢</echo><br>";
echo "</a>";
echo "<a href='" . $Wemakeli_Web_Root . "/accout/submit.php?$Wemakeli_Video_Author'>";
echo "<button class='submit'>关注</button></a>";
echo "<echo> </echo>";
echo "<a href='" . $Wemakeli_Web_Root . "/user/space.php?$Wemakeli_Video_Author'>";
echo "<button class='submit'>发消息</button></a>";
?>
</div>
</div>
<div class="WMUI_Page_Main_Block" style="height:520px;">
<div class="WMUI_Page_Video_Player_Block" id="wmplayer" style="left: 0px;/*margin-left:-400px;*/width:99%;">
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
</div>
<div class="WMUI_Page_Main_Block">
<br>
<div class="WMUI_Page_Video_Active_Block">
<button class='submit'><img style='width:28px; height:28px;' src='/assets/wmui/style/vanilla/player/star.png'>点赞</button>
<button class='submit'><img style='width:28px; height:28px;' src='/assets/wmui/style/vanilla/player/coin.png'>投币</button>
<button class='submit'><img style='width:28px; height:28px;' src='/assets/wmui/style/vanilla/player/collect.png'>收藏</button>
<button class='submit'><img style='width:28px; height:28px;' src='/assets/wmui/style/vanilla/player/share.png'>分享</button>
<div style="height:12px;"></div>
</div>
<br>
<?php
echo $Wemakeli_Video_Description;
echo "<br><br>";
echo "<li class='WMUI_Page_Video_Active_Tag'>" .  $Wemakeli_Video_Channel_Name . "</li>";
$VideoTagGroup=explode(',',$Wemakeli_Video_Tag);
$numberc = 0;
while (count($VideoTagGroup)>$numberc) {
  echo " <li class='WMUI_Page_Video_Active_Tag'>" .  $VideoTagGroup[$numberc] . "</li>";
  $numberc=$numberc+1;
}
echo "<br><br>";
?>
</div>
<div class="WMUI_Page_Main_Block">
<?php
if (isset($_COOKIE["username"])){
  echo "<!--div class='WMUI_Page_Video_Talk_Block' id='WMUI_Page_Video_Talk_Block'-->";
  echo "<div>评论区</div>";
  echo "<form action='posttalk.php' method='POST'>";
  echo "<textarea style='OVERFLOW:  Visble' name='usertalk' value='' class='talkboxinput'></textarea>";
  echo "<input type='submit' value='提交'>";
  echo "</form>";
  echo "<!--/div-->";
}else{
  echo "<!--div class='WMUI_Page_Video_Talk_Block' id='WMUI_Page_Video_Talk_Block'-->";
  echo "<div>评论区</div>";
  echo "你必须登录才能发表评论。";
  echo "<!--/div-->";
}
$Wemakeli_Video_Talk_Json_fopen = @ fopen('./talk.json', "r");
while(!feof($Wemakeli_Video_Talk_Json_fopen))
{
  $Wemakeli_Video_Talk_Json_fgets = @ fgets($Wemakeli_Video_Talk_Json_fopen);
  $Wemakeli_Video_Talk_Json_tempa = str_replace(array("\r\n", "\r", "\n"), "", $Wemakeli_Video_Talk_Json_fgets);
  $Wemakeli_Video_Talk_Json_tempb = json_decode($Wemakeli_Video_Talk_Json_tempa);
  $Wemakeli_Video_Talk_Json_UserInfo_fopen = @ fopen("../../user/$Wemakeli_Video_Talk_Json_tempb->authorid/userconfig.wmst",'r');
  $Wemakeli_Video_Talk_Json_UserInfo_fgets = @ fgets($Wemakeli_Video_Talk_Json_UserInfo_fopen);
  $Wemakeli_Video_Talk_Json_UserName = substr($Wemakeli_Video_Talk_Json_UserInfo_fgets,7);
  $Wemakeli_Video_Talk_Json_temptimea = explode('-',$Wemakeli_Video_Talk_Json_tempb->time);
  $Wemakeli_Video_Talk_Json_temptimeb = explode('/',$Wemakeli_Video_Talk_Json_temptimea[0]);
  $Wemakeli_Video_Talk_Json_temptimec = explode(':',$Wemakeli_Video_Talk_Json_temptimea[1]);
  $Wemakeli_Video_Talk_Json_temptimestr = $Wemakeli_Video_Talk_Json_temptimeb[0] . "年" . $Wemakeli_Video_Talk_Json_temptimeb[1] . "月". $Wemakeli_Video_Talk_Json_temptimeb[2] . "日  " . $Wemakeli_Video_Talk_Json_temptimec[0] . ":" . $Wemakeli_Video_Talk_Json_temptimec[1];
  echo "<div class='WMUI_Page_Video_Talk_UserBlock'>";
  echo "<img class='WMUI_Page_Video_Talk_UserBlock_UserImage' src='../../user/$Wemakeli_Video_Talk_Json_tempb->authorid/userimage.png'></img>";
  echo "<div class='WMUI_Page_Video_Talk_UserBlock_UserNT'>" . $Wemakeli_Video_Talk_Json_UserName . " " . $Wemakeli_Video_Talk_Json_temptimestr . "</div>";
  echo "<div class='WMUI_Page_Video_Talk_UserBlock_UserData'>" . $Wemakeli_Video_Talk_Json_tempb->data . "</div>";
  echo "</div>";
  echo "<br>";
}
@ fclose($Wemakeli_Video_Talk_Json_fopen);
echo "</div>";
echo "<br><br><br><br><br><br>";
?>
</div>
<script src="/assets/wmplayer/jquery.shCircleLoader.js"></script>
<script src="/assets/wmplayer/sco.tooltip.js"></script>
<script src="/assets/wmplayer/colpick.js"></script>
<script src="/assets/wmplayer/jquery.danmu.js"></script>
<script src="/assets/wmplayer/wmplayer.js"></script>
<script>

$("#wmplayer").danmakuPlayer({
    src:"video.mp4",
    height: "480px", //区域的高度
    width: "99%" //区域的宽度
  });

  $("#wmplayer .danmaku-div").danmaku("adddanmaku",[
    <?php
    $Wemakeli_Video_Danmaku_File = @ fopen("danmaku.wml", "r") or die("])");
    echo ",";
    while(!feof($Wemakeli_Video_Danmaku_File)) {
    print fgets($Wemakeli_Video_Danmaku_File) . ",";
    }
    fclose($Wemakeli_Video_Danmaku_File);
    ?>
  ])
</script>
<?php
if (file_exists($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php')=='1') {
  @ include($Wemakeli_OS_Root . '/assets/wmui/style/' . $WMUI_Style . '/pageend.php');
}
?>
</html>