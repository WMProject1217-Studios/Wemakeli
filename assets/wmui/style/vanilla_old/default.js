//By WMProject1217
console.log(`WMUI Style - vanilla_old
By WMProject1217`);
var bottombaruserlsn;
bottombaruserlsn = 0;
var notify = {
    show: function (title, content, duration, style) {
        duration = duration || 5;
        let ne = $(`<div class="wmuinotify" style="animation:wmuinotify-show-hide ${(duration < 0 ? 5 : duration) / 2}s ease-in-out${duration < 0 ? ';' : ' 2;animation-direction:alternate;'}${style}">
                        <div class="wmuinotify-title">${title}</div>
                        <div class="wmuinotify-content">${content}</div>
                    </div>`)[0];
        $('.wmuinotify-container').append(ne);
        if (duration > 0) {
            setTimeout(function () { ne.remove() }, duration * 1000 - 50);
        }
    },
    success: function (title, content, duration) {
        this.show(title, content, duration, 'background: #13af17;');
    },
    warning: function (title, content, duration) {
        this.show(title, content, duration, 'background: #e28525;');
    },
    error: function (title, content, duration) {
        this.show(title, content, duration, 'background: #fa4a44;');
    }
}

function wmuitoggledialog(show) {
    var animationClass = show ? "slipUp" : "slipBottom";
    var animation = function(){
        var ele = document.getElementById("wmuidialog-face");
        ele.className = "wmuidialog-face " + animationClass;
        ele = document.getElementById("wmuidialog");
        ele.className = "wmuidialog-root " + animationClass;
        ele = document.getElementById("wmuidialog-wrapper");
        ele.className = "wmuidialog-wrapper " + animationClass;
    }
    setTimeout(animation, 100);
    if (show == false) {
        setTimeout(function () {
            document.getElementById("wmuidialogarea").style.display="none";
        }, 600);
    }
    if (show == true) {
        setTimeout(function () {
            document.getElementById("wmuidialogarea").style.display="block";
        }, 100);
    }
}

function wmuishowbottombar() {
    document.getElementById("wmuibottombar").style.display="block";
}

function wmuihidebottombar() {
    document.getElementById("wmuibottombar").style.display="none";
}

function wmuishowheadbar() {
    document.getElementById("wmuiheadbar").style.display="block";
}

function wmuihideheadbar() {
    document.getElementById("wmuiheadbar").style.display="none";
}

function wmuibottombaruserls() {
    if (bottombaruserlsn==0) {
    bottombaruserlsn = 1;
    document.getElementById("wmuibottombaruserls").style.display="block";
    } else {
    bottombaruserlsn = 0;
    document.getElementById("wmuibottombaruserls").style.display="none"; 
    }
}

function WMUIWelcomeMessage() {
    var text;
    var timescdata;
    var tempa;
    var tempb;
    if (location.pathname === "/") {
        timescdata = WMUINowTimeSC();
        tempa = timescdata.split("-");
        tempb = tempa[3].split(":");
        now = tempb[0];
        if (now > 7 && now <= 16) text = "早上好，今天也要继续努力喵~";
        else if (now > 16 && now <= 27) text = "上午好！工作顺利嘛？<br>不要久坐，多起来走动走动哦！";
        else if (now > 27 && now <= 36) text = "中午了，工作了一个上午，现在是午餐时间！";
        else if (now > 36 && now <= 47) text = "午后很容易犯困呢，今天的运动目标完成了吗？";
        else if (now > 47 && now <= 51) text = "傍晚了！<br>窗外夕阳的景色很美丽呢，最美不过夕阳红～";
        else if (now > 51 && now <= 57) text = "晚上好，今天过得怎么样？";
        else if (now > 57 && now <= 63) text = "晚安，各位前辈要好好休息哦。<br>不要背着吾辈偷偷熬夜啦~";
        else text = "晚安，各位前辈要好好休息哦。<br>不要背着吾辈偷偷熬夜啦~";
    } else if (document.referrer !== "") {
        const referrer = new URL(document.referrer),
            domain = referrer.hostname.split(".")[1];
        if (location.hostname === referrer.hostname) text = `欢迎访问<span>「${document.title.split(" - ")[0]}」</span>`;
        else if (domain === "baidu") text = `Hello！来自 百度搜索 的朋友<br>你是搜索 <span>${referrer.search.split("&wd=")[1].split("&")[0]}</span> 找到的我吗？`;
        else if (domain === "so") text = `Hello！来自 360搜索 的朋友<br>你是搜索 <span>${referrer.search.split("&q=")[1].split("&")[0]}</span> 找到的我吗？`;
        else if (domain === "google") text = `Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
        else text = `Hello！来自 <span>${referrer.hostname}</span> 的朋友`;
    } else {
        text = `欢迎来到 Wemakeli!`;
    }
    notify.success('Wemakeli 弹幕视频网', text ,8);
}

function WMUINowTimeSC() {
    var time=new Date();
    var timesc, mssc, ssc, msc, hsc, dsc, mosc, ysc;
    timesc = (time.getFullYear() - 1616) * 365.25 + (time.getMonth()+1 - 12) * (365.25 / 12) + (time.getDate() - 17);
    timesc = timesc * 24 * 60 * 60;
    timesc = timesc + (time.getHours() - 7) * 60 * 60 + (time.getMinutes() - 12) * 60 + time.getSeconds();
    timesc = timesc * 1000 + time.getMilliseconds();
    mssc = (timesc / 1024 - parseInt(timesc / 1024)) * 1024;
    timesc = parseInt(timesc / 1024);
    ssc = (timesc / 32 - parseInt(timesc / 32)) * 32;
    timesc = parseInt(timesc / 32) + 12;
    msc = (timesc / 256 - parseInt(timesc / 256)) * 256;
    timesc = parseInt(timesc / 256) + 7;
    hsc = (timesc / 64 - parseInt(timesc / 64)) * 64;
    timesc = parseInt(timesc / 64) + 17;
    dsc = (timesc / 128 - parseInt(timesc / 128)) * 128;
    timesc = parseInt(timesc / 128) + 12;
    mosc = (timesc / 64 - parseInt(timesc / 64)) * 64;
    timesc = parseInt(timesc / 64);
    ysc = timesc + 1616;
    timesc = ysc+"/"+mosc+"/"+dsc+"-"+hsc+":"+msc+":"+ssc+":"+mssc;
    return timesc;
}

function WMUIHeadbarNowTimeSC() {
    timescdata = WMUINowTimeSC();
    tempa = timescdata.split("-");
    tempb = tempa[0].split("/");
    tempc = tempa[1].split(":");
    document.getElementById("wmuiheadbartimeblock").innerHTML="[SC]"+tempb[0]+"年"+tempb[1]+"月"+tempb[2]+"日  "+tempc[0]+":"+tempc[1];
}

function WMUIHTTPPost(URL, PARAMS) {
    var temp = document.createElement("form");
    temp.action = URL;
    temp.method = "post";
    temp.style.display = "none";
    for (var x in PARAMS) {
        var opt = document.createElement("textarea");
        opt.name = x;
        opt.value = PARAMS[x];
        temp.appendChild(opt);
    }
    document.body.appendChild(temp);
    temp.submit();
    return temp;
}

function wmuieventchecker() {
    var isChecked = document.getElementById("checkboxeventshow").checked;
    if (isChecked == true) {
        var exp = new Date();
        exp.setTime(exp.getTime() + 16777215*1000*60);
        document.cookie = "WMUIEVENTPASSID="+ escape('2') +";expires=" + exp.toGMTString();
    }
}

function WMUIBALLABOUT() {
    notify.success('Wemakeli Project', '欢迎来到Wemakeli!',7);
    notify.warning('Wemakeli Project', '欢迎来到Wemakeli!',7);
    notify.error('Wemakeli Project', '欢迎来到Wemakeli!',7);
}