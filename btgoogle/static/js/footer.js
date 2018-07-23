// 通用样式
width=$(document).width();
margin=$("#wall").css("marginLeft");
wmargin=$("#wall").css("width");
var margin=parseInt(margin)+parseInt(wmargin);
if(width>980 & $("#wall").css("max-width")!='100%')
    $(".introduct").show();
$(".introduct").css("left",margin+'px');

// 设备判断
function checkMobile() {
    var ua = navigator.userAgent;
    if (ua) {
        ua = ua.toLowerCase();
        var ignoreUa = ['ip', 'android', 'uc', 'phone', 'pad', 'bot', 'spider', 'slurp'];
        for (var i = 0; i < ignoreUa.length; i++) {
            if (ua.indexOf(ignoreUa[i]) > -1) return true;
        }
    }
    return window.screen.width < 1024;
}
var isMobile = checkMobile();
if (isMobile) {
    $(".push").before($(".introduct").html());
    $(".introduct").remove();
};

// 去除搜索框空格
function Trim(str,is_global) 
{ 
    var result; 
    result = str.replace(/(^\s+)|(\s+$)/g,""); 
    if(is_global.toLowerCase()=="g") 
    { 
        result = result.replace(/\s/g,""); 
    } 
    return result; 
} 

// 表单提交处理
document.forms[0].onsubmit = function (e) {
    e.preventDefault(); 
    var query = Trim(document.getElementById("search").value,"g"); 
    if (!query) {
        document.getElementById("search").focus(); 
        return false;
    }
    var url = '/search3/' + encodeURIComponent(query);
    window.location = url;
    return false;
};