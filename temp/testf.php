<body style="position: relative; top: 70px;">
<echo class="WMUIEchoERR" id="WMUIEchoER0" style="top:0px;">C</echo>
<echo class="WMUIEchoERR" id="WMUIEchoER1" style="top:0px;">i</echo>
<echo class="WMUIEchoERR" id="WMUIEchoER2" style="top:0px;">a</echo>
<echo class="WMUIEchoERR" id="WMUIEchoER3" style="top:0px;">l</echo>
<echo class="WMUIEchoERR" id="WMUIEchoER4" style="top:0px;">l</echo>
<echo class="WMUIEchoERR" id="WMUIEchoER5" style="top:0px;">o</echo>
<echo class="WMUIEchoERR" id="WMUIEchoER6" style="top:0px;">,</echo>
<echo class="WMUIEchoERR" id="WMUIEchoER7" style="top:0px;">W</echo>
<echo class="WMUIEchoERR" id="WMUIEchoER8" style="top:0px;">o</echo>
<echo class="WMUIEchoERR" id="WMUIEchoER9" style="top:0px;">r</echo>
<echo class="WMUIEchoERR" id="WMUIEchoER10" style="top:0px;">l</echo>
<echo class="WMUIEchoERR" id="WMUIEchoER11" style="top:0px;">d</echo>
<echo class="WMUIEchoERR" id="WMUIEchoER12" style="top:0px;">!</echo>
</body>
<style>
.WMUIEchoERR{
    position: relative;
}
</style>
<script>
function autoexec(){
    var sleep = function(time) {
        var startTime = new Date().getTime() + parseInt(time, 10);
        while(new Date().getTime() < startTime) {}
    };
    iddd = 0;
    i = 0;
    setInterval(function () {
        while(iddd<13){
            var blockerc = document.getElementById("WMUIEchoER"+iddd);
            var blockerctop = blockerc.style.top;
            //console.log("WMUIEchoER"+iddd+","+blockerctop);
            blockerctop = parseInt(blockerctop.substr(0,blockerctop.length-2));
            if (blockerctop>"50"){
                blockerc.style.top="-50px";
            } else {
                blockerc.style.top=(blockerctop+1)+"px";
            }
            console.log("WMUIEchoER"+iddd+","+blockerc.style.top);
            iddd = iddd + 1;
        }
        iddd = 0;
    },10);
}
</script>
<button>动画</button>
<div class="box" style="position: relative; left: 0px;">草</div>


<script>
    var btn = document.getElementsByTagName("button")[0];
    var div = document.getElementsByTagName("div")[0];
    //匀速运动
    btn.onclick = function () {
        autoexec();
        /*//定时器，每隔一定的时间向右走一些
        setInterval(function () {
            console.log(parseInt(div.style.left));
//            div.style.left = parseInt(div.style.left)+10+"px";  //NaN不能用
            //动画原理： 盒子未来的位置 = 盒子现在的位置 + 步长；
            //赋值给style.left，用offsetLeft获取值。
            //style.left获取值不方便，获取行内式，如果没有事“”；容易出现NaN；
            //offsetLeft获取值特别方便，而且是现成number方便计算。因为他是只读的不能赋值。
            div.style.left = div.offsetLeft + 10 + "px";
        },300);*/
    }
    
</script>