

$(function(){
    // resetui();


    $('button').on('click',function(){
    
            var text1=$('#text1').val().trim();
            if(text1.length<=0){
                return $('#text1').val('');
            }else{
                // $('.rightClient').append("<li style=rightClient>"+text1+"</li>");
                addLi( $('.rightClient'),text1);
                getRobot(text1);
                return $('#text1').val('');
            }
        
    });

    $('#text1').on('keyup',function(e){
        if(e.keyCode===13){
        $('button').click();
        }
    });


    function addLi(this1,value){
        this1.append("<li style=rightClient>"+value+"</li>");
    }

    function getRobot(text){
        $.get('http://www.liulongbin.top:3006/api/robot',{spoken:text},function(res){
            // alert(res.data.info.text);
            if(res.message==='success'){
                    addLi( $('.LeftClient'),res.data.info.text);
                     getAudio(res.data.info.text);
            }else{
                alert("获取失败！");
            }
           
        });
    }

        function getAudio(text1){
            $.ajax({
                method:'GET',
                url:'http://www.liulongbin.top:3006/api/synthesize',
                data:{text:text1},
                success:function(res){
                    // alert(1);
                    $('#audio1').attr('src',res.voiceUrl);
                    // alert($('#audio1').attr('src'));
                }
            });
        }    
})