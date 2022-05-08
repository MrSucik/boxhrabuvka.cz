$(document).scroll(function () {
    var nav = document.querySelector("nav");
    //var ser = document.getElementsByTagName("a")[4];
    //var pro = document.getElementsByTagName("a")[3];
    //var pri = document.getElementsByTagName("a")[2];
    //var con = document.getElementsByTagName("a")[1];
    //var bottom = $(window).height() - ser.height();
    
    if ($(document).scrollTop() > 5)
        nav.style.background = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)";
    else
        nav.style.background = "rgba(0, 0, 0, 0)";
});
var isVis = function (elem) {

}