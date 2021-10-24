<?php
$api_url = 'http://127.0.0.1:12882/?ip=' . $_GET['ip'] . '&port=' . $_GET['port'] . '';
$api_json = @ file_get_contents($api_url);
$api_json = @ json_decode($api_json);
echo "<pre>";
if ($api_json->version == "") {
    echo "无法访问服务器，检查地址是否正确，服务器是否已启动，服务器是否为MCJE服务器，如果还是不行可能是服务器已被防火墙屏蔽或本地API错误。";
} else {
    echo "服务器版本:".$api_json->version."\n";
    echo "服务器人数:".$api_json->online_players."/".$api_json->max_players;
}
echo "</pre>";
?>