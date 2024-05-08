var button=document.getElementById("button");
var input=document.getElementById("input");
var liste=document.getElementById("liste");


button.addEventListener("click",function(){
    
 for(var i=1;i<=10;i++){

        var sonuc =i * Number(input.value);
        
        var islem = i + " x " + input.value + " = "+ sonuc;

        liste.innerHTML +=islem +"<br>";

    }
 

});






     



