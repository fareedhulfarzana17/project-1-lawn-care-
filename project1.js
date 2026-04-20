
let navitemsElement=document.querySelector(".navitems");
 let menuiconElement=document.querySelector(".menuicon");
  let section1=document.querySelector(".section-1")
 menuiconElement.addEventListener("click",()=>{ 
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
 
  
 

 
