$(function () {
    //菜单栏
    $(".nav_box").each(function (index) { //每个子盒子添加事件
        $(this).on("click", function () {
            console.log();
            $(window).attr('location', $(this).attr('value') + '.html');
        })
    })
});


function ajax(url, success,error) {
    //1.创建异步对象
    //2.xhr =xmlhttp
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.设置请求方式和请求地址
    /*
    method：请求的类型；GET 或 POST
    url：文件在服务器上的位置
    async：true（异步）或 false（同步）
    */
    xmlhttp.open("GET","url",true);
    //3.发送请求
    xmlhttp.send();
    //4.监听状态的变化
    xmlhttp.onreadystatechange = function () {
        /*
        0:请求未初始化
        1：服务器连接已建立
        2：请求已接收
        3：请求处理中
        4：请求已完成，且响应已就绪
         */
        if (xmlhttp.readyState ===4){
            if (xmlhttp.status >= 200 && xmlhttp.status < 300 ||
                xmlhttp.status === 304) {
                //5.处理返回的结果
                success(xmlhttp);
            }
            else{
                error(xmlhttp);
            }
        }

    }

}