showBox();

let addbtn = document.getElementById("register");

let imgBox = document.getElementsByClassName('imgBox');
let loadFile = function (event){
    imgBox.style.backgroundImage = "url("+URL.createObjectURL(event.target.files[0])+")";
}
addbtn.addEventListener("click",function(e){
    let seller =  document.getElementById('seller-form');
    console.log("You Clicked ");
    let addImg = document.getElementById("addImg");
    let addTitle = document.getElementById("addTitle");

    let addTxt = document.getElementById("addTxt");
    let box = localStorage.getItem("box");
    if(box == null){
        boxObj = [];
    }
    else{
        boxObj = JSON.parse(box);
       
    }
    let myObj ={

        title:addTitle.value,
        text:addTxt.value
    }
    boxObj.push(myObj); //Unshift
    
    localStorage.setItem("box",JSON.stringify(boxObj));
    addTitle.value = "";
    addTxt.value = "";
    console.log(boxObj);
    showBox();
    seller.style.display = "none";
})
function showBox(){
    let box  = localStorage.getItem("box");
    if(box == null){
        boxObj = [];
     
    }
    else{
        boxObj = JSON.parse(box);
      
    }
    let html = "";
    
    boxObj.forEach(function(element,index){

        html += `
            <div class="main-box" id="box-1">
                <img src="" alt="" id="imgBox">
                <h1 id="myHead">${index+1} . ${element.title}</h1>
                <p>${element.text}</p>
                
            </div>`;
    });
    let boxEln = document.getElementById('box');
    if (boxObj .length != 0) {
        boxEln.innerHTML = html;
    }
    else{
        boxEln.innerHTML = `Nothing to Show! Use " From " to use Card`;
    }
}
// Search Box

let search = document.getElementById('search');
search.addEventListener("input",function(){
   
    let inputVal = search.value.toLowerCase();
    console.log("Input Event Fired!",inputVal);
    // let myHead = document.getElementById('myHead').toUpperCase();
    let boxCards = document.getElementsByClassName('main-box');
    Array.from(boxCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("h1")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else{
            element .style.display = "none";
        }
        // console.log(cardTxt); 
    })
}); 
// add img
