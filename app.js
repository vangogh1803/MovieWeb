const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const itemNumber = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCount=0;
  arrow.addEventListener("click", ()=>{
    clickCount++;
    if(itemNumber-(4+clickCount)>=0){
      movieLists[i].style.transform=`translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
    }
    else{
      movieLists[i].style.transform="translateX(0)";// back to position
      clickCount=0;
    }
   
     //moves to the left .. overflow->hidden 
     //(`) are used to correctly embed the variable newXin the string for thetransform` property.
//Extracting the transform Value: This code extracts the x value from the transform and subtracts 300 from it to create the sliding effect.
  });
  console.log(movieLists[i].querySelectorAll("img").length);//to let it scroll till its limit only:
 });