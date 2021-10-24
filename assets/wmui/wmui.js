console.log(`Wemakeli Version 0.8.9 Build 1537
By WMProject1217`);
console.log(`WMUI Version 0.8.12 Build 775
By WMProject1217`);
function WMUI_Page_JavaScript_Looker() {
    WMUI_Page_Title = document.title;
    var hidden, state, visibilityChange;
    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
        state = "visibilityState";
    } else if (typeof document.mozHidden !== "undefined") {
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange";
        state = "mozVisibilityState";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
        state = "msVisibilityState";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
        state = "webkitVisibilityState";
    }
    document.addEventListener(visibilityChange, function() {
        if (document[state]=='hidden') {
            document.title = "|･ω･｀) 盯~";
        } else {
            document.title = "被发现了诶...";
            setTimeout(function () {
                document.title = WMUI_Page_Title;
            }, 1024);
        }
    }, false);
}