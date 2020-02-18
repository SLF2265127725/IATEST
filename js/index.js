$(function () {

    //黑色导航栏点击
    $(".nav_box").each(function (index) { //每个子盒子添加事件
        $(this).on("click", function () {
            console.log();            $(window).attr('location', $(this).attr('value') + '.html');
        })
    });


});