//for light switch function

let lightSwitchEl = document.getElementById("lightSwitch");
let lightNightImgEl = document.getElementById("lightNightImg");
let footerEl = document.getElementById("footer");

let mode = "light";

lightSwitchEl.addEventListener("click",function(){

    //turns everything darker

    if(mode === "light"){

        mode = "dark";

        document.body.setAttribute("style","background-color:rgba(1, 29, 1, 0.725)");

        lightNightImgEl.src = "imgAssets/nightmode.png";

        lightSwitchEl.setAttribute("style","background-color:rgba(1, 29, 1, 0.00)");

        footerEl.setAttribute("style","background-color:rgba(5, 51, 4, 0.408)");



    } else{

        mode = "light";

        document.body.setAttribute("style","background-color:rgb(193, 229, 193)");

        lightNightImgEl.src = "imgAssets/lightmode.png";

        lightSwitchEl.setAttribute("style","background-color:rgb(193, 229, 193);");

        footerEl.setAttribute("style","background-color: background-color:rgba(4, 72, 3, 0.408);")

    }

});

/////////////////////////////////////////////////////////////////////////////////

let newObject = JSON.parse((localStorage.getItem("Entry")));

// Syntax to get specific item in object should be console.log(JSON.parse(newObject[0]).BlogContent); or something like that
























/////////////////////////////////////footer

let linkBtnEl = document.getElementById("linkBtn");

linkBtnEl.addEventListener("click", function(){

    document.location.href ="https://edamama.github.io/portfolio/";

})