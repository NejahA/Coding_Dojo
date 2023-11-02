function myAlert() {
    alert("Loading weather report...")
}


function myTemp(element){
    if(element.value == "Fahrenheit"){
        console.log("Far");
        var hot1=document.querySelector("#one .hot");
        var hot2=document.querySelector("#two  .hot");
        var hot3=document.querySelector("#three  .hot");
        var hot4=document.querySelector("#four  .hot");

        
        hot1=Number(hot1.innerText.slice(0,2))
        hot1=Math.trunc(hot1*9/5+32)
        
        hot2=Number(hot2.innerText.slice(0,2))
        hot2=Math.trunc(hot2*9/5+32)

        hot3=Number(hot3.innerText.slice(0,2))
        hot3=Math.trunc(hot3*9/5+32)
        
        hot4=Number(hot4.innerText.slice(0,2))
        hot4=Math.trunc(hot4*9/5+32)

        document.querySelector("#one .hot").innerText=hot1+"°"
        document.querySelector("#two .hot").innerText=hot2+"°"
        document.querySelector("#three .hot").innerText=hot3+"°"
        document.querySelector("#four .hot").innerText=hot4+"°"
        
        




        var cold1=document.querySelector("#one .cold");
        var cold2=document.querySelector("#two  .cold");
        var cold3=document.querySelector("#three  .cold");
        var cold4=document.querySelector("#four  .cold");

        
        cold1=Number(cold1.innerText.slice(0,2))
        cold1=Math.trunc(cold1*9/5+32)
        
        cold2=Number(cold2.innerText.slice(0,2))
        cold2=Math.trunc(cold2*9/5+32)

        cold3=Number(cold3.innerText.slice(0,2))
        cold3=Math.trunc(cold3*9/5+32)
        
        cold4=Number(cold4.innerText.slice(0,2))
        cold4=Math.trunc(cold4*9/5+32)

        document.querySelector("#one .cold").innerText=cold1+"°"
        document.querySelector("#two .cold").innerText=cold2+"°"
        document.querySelector("#three .cold").innerText=cold3+"°"
        document.querySelector("#four .cold").innerText=cold4+"°"


    }
    else if(element.value == "Celcius"){
        var hot1=document.querySelector("#one .hot");
        var hot2=document.querySelector("#two  .hot");
        var hot3=document.querySelector("#three  .hot");
        var hot4=document.querySelector("#four  .hot");

        hot1.innerText="24°";
        hot2.innerText="27°";
        hot3.innerText="21°";
        hot4.innerText ="26°"

        var cold1=document.querySelector("#one .cold");
        var cold2=document.querySelector("#two  .cold");
        var cold3=document.querySelector("#three  .cold");
        var cold4=document.querySelector("#four  .cold");

        cold1.innerText="18°";
        cold2.innerText="19°";
        cold3.innerText="16°";
        cold4.innerText ="21°"


    }
}

function removeCookie() {
    
    document.querySelector(".cookieCard").remove()
}