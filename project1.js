
let navitemsElement=document.querySelector(".navitems");
 let menuiconElement=document.querySelector(".menuicon");
  let section1=document.querySelector(".section-1")
 menuiconElement.addEventListener("click",()=>{ 
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
 
  
 

 

  menuiconElement.style.color="white"
  let click=navitemsElement.classList.contains("openmenu");
  
  if(click){
    navitemsElement.classList.remove("openmenu");
    menuiconElement.style.color="black";
  }
  else{
    navitemsElement.classList.add("openmenu");

  }

  })
  section1.addEventListener("click",()=>{
     navitemsElement.classList.remove("openmenu");
    menuiconElement.style.color="black"

  })
 
  
 

 
