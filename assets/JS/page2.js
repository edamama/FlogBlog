//for light switch function

let lightSwitchEl = document.getElementById("lightSwitch");
let lightNightImgEl = document.getElementById("lightNightImg");

let mode = "light";

lightSwitchEl.addEventListener("click",function(){

    //turns everything darker

    if(mode === "light"){

        mode = "dark";

        document.body.setAttribute("style","background-color:rgba(1, 29, 1, 0.725)");

        lightNightImgEl.src = "imgAssets/nightmode.png";

        lightSwitchEl.setAttribute("style","background-color:rgba(1, 29, 1, 0.00)");



    } else{

        mode = "light";

        document.body.setAttribute("style","background-color:rgb(193, 229, 193)");

        lightNightImgEl.src = "imgAssets/lightmode.png";

        lightSwitchEl.setAttribute("style","background-color:rgb(193, 229, 193);")

    }

});