$(".search-item a").attr("target","_blank");
$(".title").show();
$(".loading").hide();
$(".loading").css("display","none");
var path=window.location.pathname;
rgexp2=/search2/;
rgexp3=/search3/;
rgexp4=/search4/;
rgexp5=/search5/;
if(rgexp2.test(path)) document.getElementById('acs2').className='acs';
else if (rgexp3.test(path))  document.getElementById('acs3').className='acs';
else if (rgexp4.test(path))  document.getElementById('acs4').className='acs';
else if (rgexp5.test(path))  document.getElementById('acs5').className='acs';
else document.getElementById('acs1').className='acs';
width=$(document).width();
margin=$("#wall").css("marginLeft");
wmargin=$("#wall").css("width");
var margin=parseInt(margin)+parseInt(wmargin);
if(width>980 & $("#wall").css("max-width")!='100%')  $(".introduct").show();
$(".introduct").css("left",margin+'px');

$(function(){
    $(".torrent_name_tbl .attr_val:contains('B')").addClass("cpill yellow-pill");
    $(".torrent_name_tbl .attr_val:contains('ago')").addClass("cpill blue-pill");
    $("#search").height("22");
});
// function browserRedirect() {
//     var sUserAgent = navigator.userAgent.toLowerCase();
//     var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
//     var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
//     var bIsMidp = sUserAgent.match(/midp/i) == "midp";
//     var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
//     var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
//     var bIsAndroid = sUserAgent.match(/android/i) == "android";
//     var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
//     var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
//     if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
//         return false;
//     } else {
//         return true;
//     }
// }
// document.getElementById("search").focus();
// document.forms[0].onsubmit = function (e) {
//     e.preventDefault(); 
//     var query = document.getElementById("search").value; 
//     if (!query) {
//         document.getElementById("search").focus(); 
//         return false;
//     }
//     if(browserRedirect())
//         var url = '/search/' + encodeURIComponent(query);
//     else
//         var url = '/search2/' + encodeURIComponent(query);
//     window.location = url; 
//     return false;
// };