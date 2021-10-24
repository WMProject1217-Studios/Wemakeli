<!DOCTYPE html>
<head>
    <meta http-equiv="Content-Type" content="application/xhtml+xml; charset=utf-8; X-Wap-Proxy-Cookie=none" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>聊天室[ID:1]</title>
    <link type="text/css" href="chat.css?v=1.2" rel="stylesheet" />
</head>
<body>
<div class="top"><span class="name">聊天会话</span></div>
<?php
require_once 'app.php';
if(empty(@$_COOKIE[KEYS.'_name'])){
	echo '<div class="write login">                
                <input type="text" value="" id="nick" maxlength="15" placeholder="输入昵称..." />                
                <a href="javascript:;" id="login" class="write-link send">进入</a>
</div>';	      
} 
echo '<div class="talk mk-chat-box">     
</div>
<div class="talk write">                
                <input type="text" id="msg" maxlength="255" placeholder="聊点什么吧..." />                
                <a href="javascript:;" id="send" class="write-link send" onclick="send()">发送</a>
</div>'; 
?>
<script src="jquery.js"></script>
<script src="chat.js"></script>
</body>
</html>