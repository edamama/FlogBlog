//for light switch function

let lightSwitchEl = document.getElementById("lightSwitch");
let lightNightImgEl = document.getElementById("lightNightImg");
let footerEl = document.getElementById("footer");
let userTitleBoxEl = document.querySelector("usernameTitleBoxes");
let contentDisplayEl = document.getElementById("contentDisplay");

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

        lightSwitchEl.setAttribute("style","background-color:rgb(193, 229, 193);");

        footerEl.setAttribute("style","background-color: background-color:rgba(4, 72, 3, 0.408);")

    }

});

/////////////////////////////////////////////////////////////////////////////////

let newObject = JSON.parse((localStorage.getItem("Entry")));

// Syntax to get specific item in object should be console.log(JSON.parse(newObject[0]).BlogContent); or something like that.

for(let i = 0; i < newObject.length ; i++ ){

    function addElements(){

        let newPostDiv = document.createElement("div");
        newPostDiv.setAttribute("id","postDisplay");
        document.body.appendChild(newPostDiv);
    
        let newTitleAndAuthorDiv = document.createElement("div");
        newTitleAndAuthorDiv.setAttribute("id", "usernameAndTitle");
        newPostDiv.appendChild(newTitleAndAuthorDiv);
    
        let titleBox = document.createElement("h1");
        titleBox.setAttribute("class","usernameTitleBoxes");
        titleBox.textContent = JSON.parse(newObject[i]).Title;
        newTitleAndAuthorDiv.appendChild(titleBox);
    
        let userBox = document.createElement("h1");
        userBox.setAttribute("class","usernameTitleBoxes");
        userBox.textContent = "By " + JSON.parse(newObject[i]).Username;
        newTitleAndAuthorDiv.appendChild(userBox);
    
        let newContentDiv = document.createElement("div");
        newContentDiv.setAttribute("id","contentSection");
        newPostDiv.appendChild(newContentDiv);
    
        let newContentDisplay = document.createElement("h1");
        newContentDisplay.setAttribute("id","contentDisplay");
        newContentDisplay.textContent = JSON.parse(newObject[i]).BlogContent;
        newContentDiv.appendChild(newContentDisplay);
    
    
    }
    
    addElements();

    if(i === newObject.length-1){

        function addFooter(){

            let newFooter = document.createElement("footer");
            newFooter.setAttribute("id","footer");
            document.body.appendChild(newFooter);

            let newButton = document.createElement("button");
            newButton.setAttribute("id","linkBtn");
            newButton.textContent = "Click to visit my portfolio!"
            newFooter.appendChild(newButton);

        }

        addFooter();
        
        let linkBtnEl = document.getElementById("linkBtn");

        linkBtnEl.addEventListener("click", function(){

            document.location.href ="https://edamama.github.io/portfolio/";

            });

    }

};






















/////////////////////////////////////footer

