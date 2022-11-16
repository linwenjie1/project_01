$(function(){
    //获得表单信息
    function getCmtList(){
        $.ajax({
            method:'get',
            url:'http://www.liulongbin.top:3006/api/cmtlist',
            success:function(res){
                if(res.status!=200)return alert("获取失败！");
                var row=[];
                $.each(res.data,function(index,element){
                    console.log(1);
                    var str='<li class="list-group-item" ><span class="badge">'+element.username+'</span><span class="badge">'+element.time+'</span>'+element.content+'</li>';
                    row.push(str);
                });
                $('#a').empty().append(row.join(''));
            }
        });
    }

    getCmtList();


    //提交表单信息
        $('#addCmt').on('submit',function(e){
                e.preventDefault();
                var data=$(this).serialize();
                alert(data);
                $.ajax({
                    type:'post',
                    url:'http://www.liulongbin.top:3006/api/addcmt',
                    data:data,
                    success:function(res){
                        console.log(res);
                    }
                });
                getCmtList();
                $('#addCmt')[0].reset();
        });

})