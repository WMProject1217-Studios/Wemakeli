/*WMPlayer By WMProject1217*/
console.log(`WMPlayer
By WMProject1217
Inside Preview Edition Version 0.8.9`);
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
;
(function ($) {
    var danmakuPlayer = function (element, options) {
        this.$element = $(element);
        this.options = options;
        $(element).data("paused", 1);
        var that = this;
        //播放器全局样式
        this.$element.css({
            "position": "relation",
            //"left":this.options.left,
            //"top":this.options.top,
            "width": this.options.width,
            "height": this.options.height,
            "overflow": "hidden"
        });
        //选择器规范
        this.$element.addClass("danmaku-player");
        if (!$(element).attr("id"))
            $(element).attr("id", (Math.random() * 65535).toString());
        this.id = "#" + $(element).attr("id");
        //弹幕层设置,使用了定制的jquery.danmaku.js
        this.$element.append('<div class="danmaku-div"id="' + $(element).attr("id") + '-danmaku-div" ></div>');
        $(this.id + " .danmaku-div").danmaku({
            width: "100%",
            height: "100%",
            speed: options.speed,
            opacity: options.opacity,
            fontSizeSmall: options.fontSizeSmall,
            FontSizeBig: options.FontSizeBig,
            topBottondanmakuTime: options.topBottondanmakuTime,
            SubtitleProtection: true,
            positionOptimize: true
        });
        //控件添加
        this.$element.css("height", this.$element.height() + 40);
        this.$element.append('<video class="danmaku-video" src="' + options.src + '" width="' + options.width + '" height="' + options.height + '"></video>');
        this.$element.append('<div class="danmaku-player-load" ></div>');
        this.$element.append('<div class="danmaku-player-ctrl" ></div>');
        this.$element.append('<div class="danmaku-player-tip" ></div>');
        this.$tip = $(this.id + " .danmaku-player-tip");
        this.$ctrl = $(this.id + " .danmaku-player-ctrl");
        this.$ctrl.append('<div class="ctrl-progress"><div class="current">' +
            '<div class="progress-handle"></div></div>' +
            '<div class="buffered"></div></div>');
        this.$ctrl.append('<div class="ctrl-main"></div>');
        this.$ctrlMain = $(this.id + " .ctrl-main");
        this.$ctrlMain.append('<div class="play-btn ctrl-btn"><span class="glyphicon glyphicon-play" aria-hidden="true"></span></div>');
        this.$ctrlMain.append('<div class="current-time time-text ctrl-btn">0:00</div>');
        this.$ctrlMain.append('<div class="slash time-text ctrl-btn">/</div>');
        this.$ctrlMain.append('<div class="duration ctrl-btn time-text" >0:00</div>');
        this.$ctrlMain.append('<div class="opt-btn ctrl-btn " ><span class="glyphicon glyphicon-text-color" aria-hidden="true"></div>');
        var tmp=getCookie("username");
        if (!tmp && typeof(tmp)!="undefined" && tmp!=0) {
            //alert('由于没有登录，弹幕发送已经锁定');
        } else {
            this.$ctrlMain.append('<input class="danmaku-input ctrl-btn"   type="textarea" id="danmaku_text" max=300 />'); // -> button あ
            this.$ctrlMain.append('<div class=" send-btn  ctrl-btn"  >发送 ></div>');
        }
        this.$ctrlMain.append('<div class="full-screen   ctrl-btn-right"><span class=" glyphicon glyphicon-resize-full" aria-hidden="true"></span></div>');
        this.$ctrlMain.append('<div class="loop-btn   ctrl-btn-right"><span class="glyphicon glyphicon-retweet" aria-hidden="true"></span></div>');
        this.$ctrlMain.append('<div class="show-danmaku  ctrl-btn-right ctrl-btn-right-active"><span class="glyphicon glyphicon-comment" aria-hidden="true"></span></div>');
        this.$ctrlMain.append('<div class="opacity ctrl-btn-right"><input class="ctrl-btn-right danmaku-op" value="100" type="range" /></div>');
        $("body").append('<div id="' + this.id.slice(1, this.id.length) + 'fontTip"  hidden="true">' +
            '<form  id="danmaku-position">弹幕位置：' +
            '<input type="radio" checked="checked"  name="danmaku_position" value=0 />滚动&nbsp;&nbsp;<input type="radio" name="danmaku_position" value=1 />顶端' +
            '&nbsp;&nbsp;<input type="radio" name="danmaku_position" value=2 />底端&nbsp;&nbsp;</form>' +
            '<form  id="danmaku-size" >弹幕大小：<input   type="radio" checked="checked"  name="danmaku_size" value="1" />大文字&nbsp;&nbsp;' +
            '<input   type="radio" name="danmaku_size" value="0" />小文字&nbsp;&nbsp;</form>' +
            '<div class="colpicker" ></div></div>');
        //播放器状态
        this.video = $(this.id + " .danmaku-video").get(0);
        this.current = 0;  //当前播放时间
        this.duration = this.video.duration;  //总时间
        this.danmakuPlayerFullScreen = false;
        this.danmakuShowed = true;
        this.isLoop = false;
        this.danmakuSize = 0;
        this.danmakuColor = this.options.defaultColor;
        this.danmakuPosition = 0;
        if (window.wmplayerautoplay=="1") {
            this.video.play();
            $('.danmaku-div').danmaku('danmakuResume');
            $('.play-btn span').removeClass("glyphicon-play").addClass("glyphicon-pause");    
        }
        //等待层
        $(this.id + " .danmaku-player-load").shCircleLoader({
            keyframes: "0%   {background:black}\
         40%  {background:transparent}\
         60%  {background:transparent}\
         100% {background:black}"
        });
        //tip声明
        var temFontTipID = this.id + "fontTip";
        $(this.id + " .opt-btn").scojs_tooltip({
            appendTo: this.id,
            contentElem: temFontTipID,
            position: "n"
        });
        $(this.id + " .opacity").scojs_tooltip({
            appendTo: this.id,
            content: '弹幕透明度'
        });
        $(this.id + " .show-danmaku").scojs_tooltip({
            appendTo: this.id,
            content: '开启/关闭 弹幕'
        });
        $(this.id + " .loop-btn").scojs_tooltip({
            appendTo: this.id,
            content: '循环播放'
        });
        $(this.id + " .full-screen").scojs_tooltip({
            appendTo: this.id,
            content: '全屏'
        });
        $(this.id + ' .colpicker').colpick({
            flat: true,
            layout: 'hex',
            submit: 0,
            color: "ffffff",
            onChange: function (hsb, hex, rgb, el, bySetColor) {
                that.danmakuColor = "#" + hex
            }
        });
        //从后端获取弹幕
        this.getdanmaku = function () {
            $.get(that.options.urlToGetdanmaku, function (data, status) {
                danmakuFromSql = eval(data);
                for (var i = 0; i < danmakuFromSql.length; i++) {
                    try {
                        var danmakuLs = eval('(' + danmakuFromSql[i] + ')');
                    } catch (e) {
                        continue;
                    }
                    $(that.id + ' .danmaku-div').danmaku("adddanmaku", danmakuLs);
                }
            });
        };
        if (options.urlToGetdanmaku)
            this.getdanmaku();
        //发送弹幕
        this.senddanmaku = function (e)  {
            var text;
            text = $('#danmaku_text').val();
            if (text.length == 0) {
                return;
            }
            if (text.length > 255){
                alert("弹幕过长！");
                return;
            }
            text = text.replace(/&/g, "&gt;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\n/g, "<br>");
            var color = e.data.that.danmakuColor;
            var position = $(e.data.that.id + " input[name=danmaku_position]:checked").val();
            var size = $(e.data.that.id + " input[name=danmaku_size]:checked").val();
            var time = $(e.data.that.id + " .danmaku-div").data("nowTime") + 3;
            var textObj = '{ "text":"' + text + '","color":"' + color + '","size":"' + size + '","position":"' + position + '","time":' + time + '}';
            if (!e.data.that.options.urlToPostdanmaku) {
                e.data.that.options.urlToPostdanmaku =  "./stone.php";
            }
            if (e.data.that.options.urlToPostdanmaku)
                $.post(e.data.that.options.urlToPostdanmaku, {
                    danmaku: textObj
                });
            textObj = '{ "text":"' + text + '","color":"' + color + '","size":"' + size + '","position":"' + position + '","time":' + time + ',"isnew":""}';
            var newObj = eval('(' + textObj + ')');
            $(e.data.that.id + " .danmaku-div").danmaku("adddanmaku", newObj);
            $('#danmaku_text').val("");
            //触发事件
            $(e.data.that).trigger("senddanmaku");
        };
        //播放暂停
        this.playPause = function (e) {
            if (e.data.video.paused) {
                e.data.video.play();
                $(e.data.that.id + " .danmaku-div").danmaku('danmakuResume');
                $(e.data.that.id + " .play-btn span").removeClass("glyphicon-play").addClass("glyphicon-pause");
            }
            else {
                e.data.video.pause();
                $(e.data.that.id + " .danmaku-div").danmaku('danmakuPause');
                $(e.data.that.id + " .play-btn span").removeClass("glyphicon-pause").addClass("glyphicon-play");
            }
        };
        //主计时器
        var mainTimer = setInterval(function () {
            //缓冲条
            var bufTime=$(that.id + " .danmaku-video").get(0).buffered.end($(that.id + " .danmaku-video").get(0).buffered.length-1);

            var buffPrecent = (bufTime/that.duration) * 100;
            $(that.id + ".danmaku-player .ctrl-progress .buffered ").css("width", buffPrecent + "%");
           // 时间轴修正
           // if (Math.abs($(that.id + " .danmaku-div").data("nowTime") - parseInt(that.video.currentTime)*10) > 1) {
           //     $(that.id + " .danmaku-div").data("nowTime", parseInt(that.video.currentTime)*10);
           //     console.log("revise time：")
           // }
        }, 1000);
        var secTimer = setInterval(function () {
           // if (Math.abs($(that.id + " .danmaku-div").data("nowTime") - parseInt(that.video.currentTime*10)) > 1) {
              //  console.log("revise time"+$(that.id + " .danmaku-div").data("nowTime")+ ","+that.video.currentTime*10);
                $(that.id + " .danmaku-div").data("nowTime", parseInt(that.video.currentTime*10));
          //  }
        }, 50);
        //按键事件
        $(document).ready(function () {
            jQuery("body").keydown({that: that}, function (event) {
                if (event.which == 13) {
                    that.senddanmaku(event);
                    return false
                }

            });
        });
        //播放事件
        $(this.id + " .play-btn").on("click", {video: this.video, that: that}, function (e) {
            that.playPause(e);
        });
        $(this.id + " .danmaku-div").on("click", {video: this.video, that: that}, function (e) {
            that.playPause(e);

        });
        //waiting事件
        $(this.id + " .danmaku-video").on('waiting', {that: that}, function (e) {

            if ($(e.data.that.id + " .danmaku-video").get(0).currentTime == 0) {
                $(e.data.that.id + " .danmaku-div").data("nowTime", 0);
                $(e.data.that.id + " .danmaku-div").data("danmakuPause");
            } else {
                $(e.data.that.id + " .danmaku-div").data("nowTime", parseInt($(e.data.that.id + " .danmaku-video").get(0).currentTime)*10);
                $(e.data.that.id + " .danmaku-div").data("danmakuPause");
            }
            $(e.data.that.id + " .danmaku-player-load").css("display","block");

        });
        //playing事件
        $(this.id + " .danmaku-video").on('play playing', {that: that}, function (e) {

            if ($(e.data.that.id + " .danmaku-video").get(0).currentTime == 0) {
                $(e.data.that.id + " .danmaku-div").data("nowTime", 0);
                $(e.data.that.id + " .danmaku-div").data("danmakuResume");
            } else {
                $(e.data.that.id + " .danmaku-div").data("nowTime", parseInt($(e.data.that.id + " .danmaku-video").get(0).currentTime)*10);
                $(e.data.that.id + " .danmaku-div").data("danmakuResume");
            }
            $(e.data.that.id + " .danmaku-player-load").css("display","none");

        });
        //seeked事件
        $(this.id + " .danmaku-video").on('seeked ', {that: that}, function (e) {
            $(e.data.that.id + " .danmaku-div").danmaku("danmakuHideAll");
        });
        //调整透明度事件
        $(this.id + " .danmaku-op").on('mouseup touchend', {that: that}, function (e) {
            $(e.data.that.id + " .danmaku-div").data("opacity", (e.target.value / 100));
            $(e.data.that.id + " .danmaku").css("opacity", (e.target.value / 100));

        });
        //全屏事件
        $(this.id + " .full-screen").on("click", {video: this.video, that: that}, function (e) {
            if (!e.data.that.danmakuPlayerFullScreen) {
                //$css({"position":"fixed","zindex":"999","top":"0","left":"0","height":"100vh","width":"100vw"});
                $(e.data.that.id).addClass("danmaku-player-full-screen");
                e.data.that.danmakuPlayerFullScreen = true;
                $(e.data.that.id + " .full-screen span").removeClass("glyphicon-resize-full").addClass("glyphicon-resize-small");
                wmuihidebottombar();
            }
            else {
                $(e.data.that.id).removeClass("danmaku-player-full-screen");
                e.data.that.danmakuPlayerFullScreen = false;
                $(e.data.that.id + " .full-screen span").removeClass("glyphicon-resize-small").addClass("glyphicon-resize-full");
                wmuishowbottombar();
            }
        });
        //显示和隐藏弹幕按钮事件
        $(this.id + " .show-danmaku").on("click", {that: that}, function (e) {
            if (e.data.that.danmakuShowed) {
                $(e.data.that.id + " .danmaku-div").css("visibility", "hidden");
                e.data.that.danmakuShowed = false;
                $(e.data.that.id + " .show-danmaku").removeClass("ctrl-btn-right-active");
            }
            else {
                e.data.that.danmakuShowed = true;
                $(e.data.that.id + " .danmaku-div").css("visibility", "visible");
                $(e.data.that.id + " .show-danmaku").addClass("ctrl-btn-right-active");
            }

        });
        //循环播放按钮事件
        $(this.id + " .loop-btn").on("click", {that: that}, function (e) {
            if (!e.data.that.isLoop) {
                e.data.that.video.loop = true;
                e.data.that.isLoop = true;
                $(e.data.that.id + " .loop-btn").addClass("ctrl-btn-right-active");
            }
            else {
                e.data.that.video.loop = true;
                e.data.that.isLoop = false;

                $(e.data.that.id + " .loop-btn").removeClass("ctrl-btn-right-active");
            }
        });
        //时间改变事件
        $(this.id + " .danmaku-video").on('loadedmetadata', {video: this.video, that: that}, function (e) {
            e.data.that.duration = e.data.video.duration;
            var duraMin = parseInt(e.data.that.duration / 60);
            var duraSec = parseInt(e.data.that.duration % 60) < 10 ? "0" + parseInt(e.data.that.duration % 60) : parseInt(e.data.that.duration % 60);
            $(e.data.that.id + " .duration").text(duraMin + ":" + duraSec);
            $(e.data.that.id + " .danmaku-video").on('timeupdate', {
                video: e.data.video,
                that: e.data.that
            }, function (e) {
                var current = e.data.that.current = e.data.video.currentTime;
                var curMin = parseInt(current / 60);
                var curSec = parseInt(current % 60) < 10 ? "0" + parseInt(current % 60) : parseInt(current % 60);
                $(e.data.that.id + " .current-time").text(curMin + ":" + curSec);
                var duraMin = parseInt(e.data.that.duration / 60);
                var duraSec = parseInt(e.data.that.duration % 60) < 10 ? "0" + parseInt(e.data.that.duration % 60) : parseInt(e.data.that.duration % 60);
                $(e.data.that.id + " .duration").text(duraMin + ":" + duraSec);
                var percentage = 100 * current / e.data.that.duration;
                $(e.data.that.id + '.danmaku-player .ctrl-progress .current ').css('width', percentage + '%');
                e.data.that.reviseFlag = e.data.that.reviseFlag + 1;
            });
        });
        //进度条事件
        $(this.id + " .ctrl-progress").on('click', {video: this.video, that: that}, function (e) {
            var sumLen = $(e.data.that.id + " .ctrl-progress").width();
            var pos = e.pageX - $(e.data.that.id + " .ctrl-progress").offset().left;
            var percentage = pos / sumLen;
            $(e.data.that.id + '.danmaku-player .ctrl-progress .current ').css('width', percentage * 100 + '%');
            aimTime = parseFloat(percentage * e.data.that.duration);
            e.data.video.currentTime = aimTime;
        });
        var timeDrag = false;
        $(this.id + " .ctrl-progress").on('mousedown touchstart', function (e) {
            timeDrag = true;
        });
        $(document).on('mouseup', function (e) {
            if (timeDrag) timeDrag = false;
        });
        $(this.id + " .ctrl-progress").on('mousemove touchmove', {video: this.video, that: that}, function (e) {
            if (timeDrag) {
                var sumLen = $(e.data.that.id + " .ctrl-progress").width();
                var pos = e.pageX - $(e.data.that.id + " .ctrl-progress").offset().left;
                var percentage = pos / sumLen;
                if (percentage > 1)
                    percentage = 1;
                if (percentage < 0)
                    percentage = 0;
                aimTime = parseFloat(percentage * e.data.that.duration);
                e.data.video.currentTime = aimTime;
                $(e.data.that.id + '.danmaku-player .ctrl-progress .current ').css('width', percentage * 100 + '%');
            }
        });
        //发送弹幕事件
        $(this.id + " .send-btn").on("click", {that: that}, function (e) {
            e.data.that.senddanmaku(e);
        });
        //用户操作控制条事件
        $(this.id + " .ctrl-progress").on("mouseup touchend", {that: that}, function (e) {
            $(e.data.that.id + " .danmaku").remove();
        });

    };//danmakuplayer构造函数
    danmakuPlayer.DEFAULTS = {
        left: 0,
        top: 0,
        height: 360,
        width: 640,
        zindex: 100,
        speed: 8000,
        sumTime: 65535,
        defaultColor: "#ffffff",
        fontSizeSmall: 16,
        FontSizeBig: 24,
        opacity: "1",
        topBottondanmakuTime: 6000,
        urlToGetdanmaku: "",
        urlToPostdanmaku: ""
    };
    function Plugin(option, arg) {
        return this.each(function () {
            var $this = $(this);
            var options = $.extend({}, danmakuPlayer.DEFAULTS, typeof option == 'object' && option);
            var data = $this.data('danmakuPlayer');
            var action = typeof option == 'string' ? option : NaN;
            if (!data) $this.data('danmaku', (data = new danmakuPlayer(this, options)));
            if (action)    data[action](arg);
        })
    }
    $.fn.danmakuPlayer = Plugin;
    $.fn.danmakuPlayer.Constructor = danmakuPlayer;
})(jQuery);