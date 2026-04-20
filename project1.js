
let navitemsElement=document.querySelector(".navitems");
 let menuiconElement=document.querySelector(".menuicon");
  let menuiconcrossElement=document.querySelector(".menuiconcross");
  let bodyclassElement=document.body;
  
  
 menuiconElement.addEventListener("click",(e)=>{ 
   e.stopPropagation();
  
  
    navitemsElement.classList.toggle("openmenu");
    let click=navitemsElement.classList.contains("openmenu");
    if(click){
      menuiconcrossElement.style.display="block";
      menuiconElement.style.display="none";
     }
    
   
   
 

 })
 menuiconcrossElement.addEventListener("click",(e)=>{
  e.stopPropagation();
   menuiconElement.style.display="block";
   menuiconcrossElement.style.display="none";

   navitemsElement.classList.toggle("openmenu");

 }) 

     

  
  bodyclassElement.addEventListener("click",()=>{
   
   menuiconElement.style.display="block";
   menuiconcrossElement.style.display="none";
    navitemsElement.classList.remove("openmenu");

 

  })
 
  
 

 
