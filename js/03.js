function requestData(){
    $.ajax({
        url: 'http://localhost:63342/test01/php/03.php',
        success: function(data){
            var series = chart.series[0],
                shift = series.data.length > 20; // 图中显示20个数据点
//第二个参数为false则不会删除前一个数据
            chart.series[0].addPoint(data,false,shift);
            setTimeout(requestData,10000); //每10秒调用一次
        },
        cache: false
    });
}