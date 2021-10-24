<!DOCTYPE html>

<html>
<head>
<?php //By WMProject1217
@ include("../config.php");
@ include("$Wemakeli_OS_Root/assets/wmui/pagehead.php");
?>
<link rel="stylesheet" href="./slide.css">
<script src="./slide.js"></script>
<div style='position: absolute;left:20px;' id="slide"></div>
<script>
    new Slide('#slide', {
    imgs: [
        "../library/image/videotop/wv-1.png",
        "../library/image/videotop/wv0.png",
        "../library/image/videotop/wv1.png",
        "../library/image/videotop/wv2.png",
    ],            // pictures you need to slide
    texts: [
        "Bad Apple!!",
        "Never Gonna Give You Up",
        "[0CC-FamiTracker]Scarlet_Mist_Incident",
        "测试danmuplayer",
    ],            // texts you need to slide
    links: [
        "/video/wv-1/",
        "/video/wv0/",
        "/video/wv1/",
        "/video/wv2/",
    ],            // links you need to slide
    width: 300,          // the slide's width
    height: 200,         // the slide's height
    autoswitch: {
        open: true,     // switch the slide automatically
        delay: 5000      // delay time
    },
    animation: 'slideLeft' // animation while you slide, we have: slideUp, slideLeft, fade
})
</script>
</body>
</html>