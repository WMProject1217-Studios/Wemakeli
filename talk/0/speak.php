<html>
<head>
<title>Send Message</title>
<link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<?php
if ($_COOKIE['talk_nickname']<>"") {
?>
<table border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td height="2"></td>
  </tr>
</table>
<form action="show.php" target="mainFrame" method="post">
<textarea name="words" style='position:absolute;top:5px;left:5px;height:calc(99% - 10px);width:calc(99% - 70px);font-size:12pt;'></textarea>
<input type="submit" value="发言" style='position:absolute;top:5px;left:calc(99% - 80px);height:calc(99% - 10px);width:70px;'>
</form>
<?php
} else {
?>
<table border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td height="2"></td>
  </tr>
</table>
<div>请先登录</div>
<?php
}
?>
</body>
</html>