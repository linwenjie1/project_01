function template(id,data){
    var a=document.getElementById(id).innerHTML;
    console.log(a);
                var str=a;
                var result=null;
                var pattern=/{{\s*([a-zA-Z]+)\s*}}/;
                while(result=pattern.exec(str)){
                        str=str.replace(result[0],data[result[1]]);
                }
                console.log(str);
}