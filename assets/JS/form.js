let submitButtonEl = document.getElementById("submitBtn");

let usernameEl = document.getElementById("firstEntry");
let titleEl = document.getElementById("secondEntry");
let blogContentEl = document.getElementById("thirdEntry");

/*let postObj = {

    Username: "",
    
    Title: "",

    BlogContent:"" 

}*/

let postObjArray = JSON.parse(localStorage.getItem("Entry")) || [];

submitButtonEl.addEventListener("click", function(event){

    if(usernameEl.value && titleEl.value && blogContentEl.value){
        
        const postObj = {

            Username: usernameEl.value,
            
            Title: titleEl.value,
        
            BlogContent: blogContentEl.value , 
        
        }
        
        
        
        let stringifiedPostObj = JSON.stringify(postObj);

        postObjArray.push(stringifiedPostObj);
        localStorage.setItem("Entry", JSON.stringify(postObjArray));

        

        
    } else{

        event.preventDefault();

        alert("Enter content for each field.");

    }

} );