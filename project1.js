
let navitemsElement=document.querySelector(".navitems");
 let menuiconElement=document.querySelector(".menuicon");
  let bodyclassElement=document.body;
  
 menuiconElement.addEventListener("click",(e)=>{ 
   e.stopPropagation();
  
  
    navitemsElement.classList.toggle("openmenu");
    let click=navitemsElement.classList.contains("openmenu");
    if(click){
      menuiconElement.style.color="white";
     }
     else{
      
    menuiconElement.style.color="black";
     }
   
 

 })
  bodyclassElement.addEventListener("click",()=>{
     navitemsElement.classList.remove("openmenu");
    menuiconElement.style.color="black"

  })
 
  
 

 
