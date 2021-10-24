<?php
if ($_POST['words']) {
  $wordsls = $_POST['words'];
  $wordsls = strip_tags($wordsls,"<br>,<img>");
  $strtext = "\n" . $_COOKIE['talk_nickname'] . "," . date("Y-m-d") . "   " .  date("H") . ":" .  date("i") . ":" .  date("s") . "," . str_replace(array("\r\n", "\r", "\n"), "<br>", $wordsls);
  $filename = @ fopen("./library/talk.wmdb", "a");
  fwrite($filename, $strtext);
  @ fclose($filename);
  echo "<script>window.parent.frames[" . '"bottomFrame"' . "].location.reload();</script>";
  header("refresh:0; URL='show.php'"); 
}
?>
<html>
<head>
<title>聊天室[ID:0]</title>
<link href="style.css" rel="stylesheet" type="text/css" />
<meta http-equiv="refresh" content="5;url=show.php">
</head>
<body>
<?php 
$filepath = './library/talk.wmdb';
$file = new SplFileObject($filepath);
$file->seek(PHP_INT_MAX);
$total_lines = $file->key();
if ($total_lines >= 8) {
  $file->seek($total_lines - 8);
} else {
  $file->seek(0);
}
while (!$file->eof()) {
    $line = $file->current();
    $lineexplode = explode(',',$line);
    $username = $lineexplode[0];
    $usertime = $lineexplode[1];
    $userword = str_replace ($username . "," . $usertime . ",", "" , $line);
?>
<table width="98%" border="0" align="center" cellpadding="5" cellspacing="1" bgcolor="#CBB486">
  <tr>
    <td>
    <?php echo $username . " ";
    echo $usertime . "<br>";
    echo $userword; ?>
    </td>
  </tr>
</table>
<table width="100" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td height="5"></td>
  </tr>
</table>
<?php
    $file->next();
}
?>
<script>
  window.scrollTo(0, document.body.scrollHeight);
</script>
</body>
</html>