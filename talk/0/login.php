<html>
<head>
<title>Login</title>
<link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<table width="80%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>&nbsp;</td>
  </tr>
</table>
<table width="250" border="0" align="center" cellpadding="5" cellspacing="1" bgcolor="#CBB486">
  <tr>
    <td height="30" align="center" bgcolor="#F5E6C1">
        <?php 
        if($_GET["action"] == "out") {
        echo "<script>window.parent.frames[" . '"bottomFrame"' . "].location.reload();</script>";
        setcookie ("talk_nickname", "", time() - 3600,'/');
        header("refresh:0; URL='login.php'");
        }
        if($_POST["submit"]) {
        setcookie("talk_nickname",$_POST['nick'],time()+16777215*60,'/'); //用cookie记录用户昵称,也可以用SESSION
        echo "<script>window.parent.frames[" . '"bottomFrame"' . "].location.reload();</script>";
        header("refresh:0; URL='login.php'");
        }
        ?>
        <?php 
        if ($_COOKIE["talk_nickname"]) {
          echo "欢迎您 , ".$_COOKIE["talk_nickname"];
        } else {
          echo "请输入您的昵称";
        }
        ?>
    </td>
  </tr>
  <tr>
    <td align="center" bgcolor="#F5E6C1">
<?php
if (!$_COOKIE["talk_nickname"]) {
?>
<form action="" method="post">
<input type="text" name="nick" cols="20">
<input type="submit" name="submit" value="登录">
</form>
<?php
} else {
  echo "<a href='?action=out'><button>退出房间</button></a>";
}
?>
    </td>
  </tr>
</table>
<?php
if ($_COOKIE["talk_nickname"]) {
?>
<div style='color:#EE0000;'>警告:在文本中使用"<"或">"将导致发送的内容出错<br>请务必使用其它符号替代</div>
<?php
}
?>
<table width="80%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>&nbsp;</td>
  </tr>
</table>
</body>
</html>