var k = 0,
	c = "",
	n = 0,
	name = "",
	key = "",
	t = 0;

function sockll() {
	$(".mk-chat-box").scrollTop($(".mk-chat-box")[0].scrollHeight)
}
var send_btn = !0;

function send() {
	if ($("#send").hasClass("disabled")) return addtip("\u53d1\u8a00\u592a\u5feb\uff0c\u95f4\u9694\u4e3a3\u79d2\uff01", "tips-info"), !1;
	var a = $("#msg").val();
	if (1 > a.length) return !1;
	0 == k && (t = 1);
	$("#send").addClass("disabled");
	$.post("ajax.php?c=send", {
		msg: a
	}, function(a) {
		$("#msg").val("");
		addmsg(a.name, a.msg, "right");
		setTimeout(function() {
			$("#send").removeClass("disabled")
		}, 400);
		window.clearInterval(c);
		n = 0;
		c = setInterval(function() {
			get_msg()
		}, 300)
	}, "json")
}
function addtip(a, b) {
	$(".mk-chat-box").append('<div class="tips"><span class="' + b + '">' + a + "</span></div>");
	sockll()
}
function fileExists(url){
	var isExists;
	$.ajax({
		url:url,
		async:false,
		type:'HEAD',
		error:function(){
			isExists=0;
		},
		success:function(){
			isExists=1;
		}
	});
	if(isExists==1){
		return true;
	}else{
		return false;
	}
}
function addmsg(a, b, f) {
	var g = './library/'+a+'.png';
	var Exists=fileExists(g);
	if (!Exists) {
		g=LetterAvatar(a, 32);
	}
	$(".mk-chat-box").append('<div class="' + f + ' msg"><img class="head" src="' + g + '" /><span class="name">' + a + '</span><span class="content">' + b + "</span></div>");
	sockll()
}
function get_msg() {
	n++;
	90 < n && (window.clearInterval(c), c = setInterval(function() {
		get_msg()
	}, 300));
	150 < n && (window.clearInterval(c), $("#tips").remove(), $(".mk-chat-box").append('<div class="tips" id="tips"><span class="tips-danger">\u957f\u65f6\u95f4\u672a\u6536\u5230\u6d88\u606f\uff0c<a id="fresh" href="javascript:;">\u70b9\u51fb\u7ee7\u7eed\u6536\u53d6</a></span></div>'), sockll());
	$.getJSON("ajax.php?c=msg&k=" + k, function(a) {
		var b = "",
			f = a.list;
		a = a.count;
		for (var g = 0, h = f.length; g < h; g++) {
			var d = jQuery.parseJSON(f[g]);
			if ("sys" == d.type)"rebot" == d.msg ? (k = 0, $(".mk-chat-box").html('<div class="tips"><span class="tips-success">\u804a\u5929\u7cfb\u7edf\u5237\u65b0</span></div>')) : b += '<div class="tips">' + d.msg + "</div>";
			else if (d.key == key && (0 < k || 1 == t)) k = a;
			/*else if (d.key == key && (0 < k || 1 == t)) console.log(t), k = a;*/
			else {
				var e = "left";
				d.key == key && (e = "right");
				var l = './library/'+d.name+'.png';
				var Exists=fileExists(l);
				if (!Exists) {
					l=LetterAvatar(d.name, 32);
				}
				b += '<div class="' + e + ' msg"><img class="head" src="' + l + '" /><span class="name">' + d.name + '</span><span class="content">' + d.msg + "</span></div>"
			}
		}
		"" != b && (k = a, $(".mk-chat-box").append(b), sockll())
	})
}
function getCookie(cookie_name) {
	var allcookies = document.cookie;
	//索引长度，开始索引的位置
	var cookie_pos = allcookies.indexOf(cookie_name);
	// 如果找到了索引，就代表cookie存在,否则不存在
	if (cookie_pos != -1) {
		// 把cookie_pos放在值的开始，只要给值加1即可
		//计算取cookie值得开始索引，加的1为“=”
		cookie_pos = cookie_pos + cookie_name.length + 1; 
		//计算取cookie值得结束索引
		var cookie_end = allcookies.indexOf(";", cookie_pos);
		if (cookie_end == -1) {
			cookie_end = allcookies.length;
		}
		//得到想要的cookie的值
		var value = unescape(allcookies.substring(cookie_pos, cookie_end)); 
	}
	return value;
}
function login(n){
 	$.get("ajax.php?c=login",{'n':n},function(a) {
		name = a.name;
		key = a.key;
		get_msg();
		sockll()
	}, "json");
	c = setInterval(function() {
		get_msg()
	}, 300);
	rtname = getCookie('TALK2__name');
	var l = './library/'+rtname+'.png';
	var Exists=fileExists(l);
	if (!Exists) {
		l=LetterAvatar(rtname, 64);
	}
	var b = '<img style="height:64px;width:64px;" src="' + l + '" />'
	document.getElementById("userimage").innerHTML = b;
}
$(document).ready(function() {
	if($('.login').length == 0){
       login();
    }else{
	  $('.talk').hide();
	  $('#login').on("click", function() {
		 var n = $('#nick').val();
		 if(n!=''){
             $('.login').hide();
			 $('.talk').show();
             login(n);
			 //location.reload();
		 }
	  });
	}
	$("#msg").on("keypress", function(a) {
		if (13 == a.keyCode) return send(), !1
	});
	$(".mk-chat-box").on("click", "#fresh", function() {
		window.clearInterval(c);
		n = 0;
		$("#tips").remove();
		$(".mk-chat-box").append('<div class="tips"><span>\u64cd\u4f5c\u6210\u529f</span></div>');
		sockll();
		c = setInterval(function() {
			get_msg()
		},300)
	})
});

function LetterAvatar(a, b, f) {
	b = b || 60;
	var g = "#1abc9c #2ecc71 #3498db #9b59b6 #34495e #16a085 #27ae60 #2980b9 #8e44ad #2c3e50 #f1c40f #e67e22 #e74c3c #00bcd4 #95a5a6 #f39c12 #d35400 #c0392b #bdc3c7 #7f8c8d".split(" ");
	a = String(a || "").split(" ");
	a = 1 == a.length ? a[0] ? a[0].charAt(0) : "?" : a[0].charAt(0) + a[1].charAt(0);
	window.devicePixelRatio && (b *= window.devicePixelRatio);
	var h = (("?" == a ? 72 : a.charCodeAt(0)) - 64) % 20;
	var d = document.createElement("canvas");
	d.width = b;
	d.height = b;
	var e = d.getContext("2d");
	e.fillStyle = f ? f : g[h - 1];
	e.fillRect(0, 0, d.width, d.height);
	e.font = Math.round(d.width / 2) + "px 'Microsoft Yahei'";
	e.textAlign = "center";
	e.fillStyle = "#FFF";
	e.fillText(a, b / 2, b / 1.5);
	return d.toDataURL()
};