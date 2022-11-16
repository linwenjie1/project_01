$(function(){

        //获取新闻列表
            function getNewList(){
                $.ajax({
                    type:'get',
                    url:'http://www.liulongbin.top:3006/api/news',
                    success:function(res){
                        if(res.status!=200){
                              return  alert('获取失败！');
                        }

                        for(var i=0;i<res.data.length;i++){
                            res.data[i].tags=res.data[i].tags.split(',');
                        }
                            console.log(res);
                            $.each(res.data,function(index,element){
                                 var a= template('template1',element);
                             $('#news-list').append(a);
                             console.log(1);
                            });
                          
                    }
                });
            }

       getNewList();   

        function padZero(n){
            return n<10? '0'+n : n ;
        }
       
       template.defaults.imports.changeTime=function(time){
        var date=new Date(time);
            //  var a=date.getFullYear(); 
            // var b=date.getMonth()+1;
            // var c=date.getDate();
            //     return a +"-"+b+"-"+c;
            return padZero(date.getFullYear())+"-"+(padZero(date.getMonth()+1))+"-"+padZero(date.getDate());
       }
})