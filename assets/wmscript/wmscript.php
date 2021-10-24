<?php
function wmscript($wmscripttext)
{
    //WMScript Launcher For PHP
    //By WMProject1217
    $text = $wmscripttext;
    $text = preg_replace('{^\xEF\xBB\xBF|\x1A}', '', $text);
    $text = preg_replace('{\r\n?}', "\n", $text);
    $textgroup = explode("\n",$text);
    $readlines = 0;
    $jsmode = 0;
    while($readlines < count($textgroup)) {
        if (substr($textgroup[$readlines],0,2)=="##") {
            //##是注释
        } else if (substr($textgroup[$readlines],0,2)=="#!") {
            //#!计算
        } else if (substr($textgroup[$readlines],0,2)=="!#") {
            //!#赋值
        } else if (substr($textgroup[$readlines],0,2)=="::") {
            //
        } else if (substr($textgroup[$readlines],0,3)=="cd ") {
            //
        } else if (substr($textgroup[$readlines],0,5)=="copy ") {
            //
        } else if (substr($textgroup[$readlines],0,7)=="delete ") {
            //
        } else if (substr($textgroup[$readlines],0,4)=="dim ") {
            //定义变量
            if (strpos(substr($textgroup[$readlines],0,4),"=",0)===false) {
                ${"WMScript_Variable_" . substr($textgroup[$readlines],4)}=NULL;
            } else {
                ${"temp_" . $readlines}=explode('=',$textgroup[$readlines]);
                ${"WMScript_Variable_" . ${"temp_" . $readlines}[0]}=${"temp_" . $readlines}[1];
            }
        } else if (substr($textgroup[$readlines],0,4)=="dir ") {
            //
        } else if (substr($textgroup[$readlines],0,5)=="echo ") {
            //echo输出并换行
            if ($jsmode==1) {
                $jsmode = 0;
                $textout = $textout . "</script>";
            }
            $textout = $textout . substr($textgroup[$readlines],5) . "\n";
        } else if (substr($textgroup[$readlines],0,6)=="echor ") {
            //echor输出并不换行
            if ($jsmode==1) {
                $jsmode = 0;
                $textout = $textout . "</script>";
            }
            $textout = $textout . substr($textgroup[$readlines],6);
        } else if (substr($textgroup[$readlines],0,6)=="echof ") {
            //echof忽略状态直接输出
            $textout = $textout . substr($textgroup[$readlines],6);
        } else if (substr($textgroup[$readlines],0,5)=="exec ") {
            //
        } else if (substr($textgroup[$readlines],0,5)=="exit ") {
            wmbot();
            return $textout;
        } else if (substr($textgroup[$readlines],0,3)=="if ") {
            //
        } else if (substr($textgroup[$readlines],0,9)=="inputbox ") {
            if ($jsmode==0) {
                $jsmode = 1;
                $textout = $textout . "<script>";
            }
            if (strpos($textgroup[$readlines],"^,^",0)===false) {
                $textout = $textout . "prompt(`" . substr($textgroup[$readlines],9) . "`);" . "\n";
            } else {
                ${"temp_" . $readlines}=explode('^,^',substr($textgroup[$readlines],9));
                $textout = $textout . "prompt(`" . ${"temp_" . $readlines}[0] . "`,`" . ${"temp_" . $readlines}[1] ."`);" . "\n";
            }
        } else if (substr($textgroup[$readlines],0,7)=="insman ") {
            //
        } else if (substr($textgroup[$readlines],0,8)=="listtask") {
            //
        } else if (substr($textgroup[$readlines],0,8)=="listpack") {
            //
        } else if (substr($textgroup[$readlines],0,6)=="mkdir ") {
            //
        } else if (substr($textgroup[$readlines],0,7)=="mkfile ") {
            //
        } else if (substr($textgroup[$readlines],0,7)=="msgbox ") {
            if ($jsmode==0) {
                $jsmode = 1;
                $textout = $textout . "<script>";
            }
            $textout = $textout . "alert(`" . substr($textgroup[$readlines],7) . "`);" . "\n";
        } else if (substr($textgroup[$readlines],0,7)=="picbox ") {
            //
        } else if (substr($textgroup[$readlines],0,10)=="playsound ") {
            //
        } else if (substr($textgroup[$readlines],0,5)=="read ") {
            //
        } else if (substr($textgroup[$readlines],0,4)=="reg ") {
            //
        } else if (substr($textgroup[$readlines],0,4)=="set ") {
            //
        } else if (substr($textgroup[$readlines],0,8)=="syshang ") {
            //
        } else if (substr($textgroup[$readlines],0,5)=="tree ") {
            //
        } else if (substr($textgroup[$readlines],0,6)=="write ") {
            //
        } else {
            if ($textgroup[$readlines]=="phpinfo();") {
                //[doge]
                return "这不是PHP脚本解析（半恼";
            }
            if ($textgroup[$readlines]=="") {
                goto nextline;
            }
            return "Fatal Error : [WMScript.Keyword.Unknown] 未知的关键词 " . " Line " . ($readlines + 1);
        }
        nextline:
        $readlines = $readlines + 1;
    }
    if ($jsmode==1) {
        $jsmode = 0;
        $textout = $textout . "</script>";
    }
    if ($textout=="") {
        return "//该脚本什么也没有输出";
    }
    return $textout;
}
?>