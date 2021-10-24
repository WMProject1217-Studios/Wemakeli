<?php //By WMProject1217
echo "<head>";
$wmui_backpath='../';
$wmui_classnow='audio';
$wmui_jumpoffheadbar='1';
$wmsys_name = 'Wemakeli';
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
echo "<script src='./APlayer.js'></script>"; 
echo "<link rel='stylesheet' href='./APlayer.css'>";
echo "<title>$title - $wmsys_name</title>";
echo "</head>";
//include("$wmsys_assetsr\wmui\wmuifirload.php");
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
            lrcType: 3,
            fixed: true,
            narrow: false,
            autoplay: true,
            theme: '#66CCFF',
            showlrc: true,
            loop : 'one',
            volume : '1.0',
            music: {
                    title: '<?php echo str_replace(array("\r\n", "\r", "\n"), "", $title); ?>',
                    author: "<?php echo str_replace(array("\r\n", "\r", "\n"), "", $uploadmaster); ?>",
                    url: './audio.wav',
                    pic: './logo.png',
                    lrc: './lyric.lrc'
                    }
        });
//ap.init();
ap.setMode("normal");
</script>
<?php
//td.talk
    echo "<table>";
    echo "<tr>";
    echo "<td class='talk'>";
    echo "<div>评论区</div>";
    echo "非常抱歉，但此评论区已关闭。";
    echo "</td>";
    echo "</tr>";
    echo "</table>";
    //include("$wmsys_assetsr\wmui\wmuilasload.php");
    echo "</td>";
    echo "</tr>";
    echo "</table>";
    echo "</body>";
?>
