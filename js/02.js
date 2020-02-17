
/*var arr1=[],arr2=[];
function arrTest(){
    $.ajax({
        type:"post",
        async:"false",
        url:"http://localhost:63342/test01/php/02.php",
        data:{},
        dataType:"json",
        success:function(result){
            if (result) {
                for (var i = 0; i < result.length; i++) {
                    arr1.push(result[i].username);
                    arr2.push(result[i].age);
                }
            }
        }
    })
    return arr1,arr2;
}
arrTest();*/
$.ajax({
    type: 'get',
    url: 'http://localhost:63342/test01/php/02.php',
    data:{
    },
    success: function (data) {
        //console.log(data);
        var a = data.split(' ');
        //console.log(a);
        var trStr = '';//动态拼接table
        for (var i = 0; i < a.length-1; i++) {
            trStr += '<tr class="example">';
           // trStr += '<td width="15%">' + JSON.parse(a[i]).time + '</td>';
            trStr += '<td width="15%">' + JSON.parse(a[i]).wendu + '</td>';
            trStr += '<td width="15%">' + JSON.parse(a[i]).humidity + '</td>';
            trStr += '</tr>';
        }
        $("#tbody").html(trStr);
    }

});