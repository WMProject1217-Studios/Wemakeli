<?php
if ($_GET['yutiliys']=="114514") {
    goto pageauther;
}
goto resnotfound;
pageauther:
if ($_GET['cioplicys']=="defrilops") {
    goto pagemain;
}
goto resnotfound;
pageauther2:
resnotfound:
header('HTTP/1.1 404 Not Found');
header("status: 404 Not Found");
goto end;
pagemain:
echo "You had input the key , but the automatic system report some errors.<br>[Fatal]Unexpected error in MultiMind Manager : Jump-in New Mind Connection<br>[Fatal]Unexpected soul broken.<br>[Fatal]Soul offline.<br>[Fail]Soul refuse connect.<br>[Fatal]Memory block read failure.";
end:
?>