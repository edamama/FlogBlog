let submitButtonEl = document.getElementById("submitBtn");

let usernameEl = document.getElementById("firstEntry");
let titleEl = document.getElementById("secondEntry");
let blogContentEl = document.getElementById("thirdEntry");

submitButtonEl.addEventListener("click", function(event){

    if(usernameEl.value && titleEl.value && blogContentEl.value){
        
        let postObj = {

            Username: "",
            
            Title: "",
        
            BlogContent:"" 
        
        }
        
        postObj.Username = usernameEl.value;
        postObj.Title = titleEl.value;
        postObj.BlogContent = blogContentEl.value;
        
        let stringifiedPostObj = JSON.stringify(postObj);

        localStorage.setItem("Entry", stringifiedPostObj);
        
    } else{

        event.preventDefault();

        alert("Enter content for each field.");

    }

} );