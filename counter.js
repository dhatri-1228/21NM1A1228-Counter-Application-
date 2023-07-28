let updatevalue = document.getElementById("updatevalue");
function onincrement() {
   let a = updatevalue.textContent;
   let countervalue = parseInt(a) + 1;
   if (countervalue>0)
   {
     updatevalue.style.color = "green";
   }
   else if(countervalue<0){
    updatevalue.style.color = "red";
   }
   else {
    updatevalue.style.color = " blue";
   }
   updatevalue.textContent = countervalue;
}
function onset() {
    let countervalue = 0;
    updatevalue.textContent = countervalue;
    updatevalue.style.color = "pink";
}
function ondecerment()
{
    let a = updatevalue.textContent;
    let countervalue = parseInt(a) - 1;
    if (countervalue>0)
    {
      updatevalue.style.color = "green";
    }
    else if(countervalue<0){
     updatevalue.style.color = "orange";
    }
    else {
     updatevalue.style.color = " blue";
    }
    updatevalue.textContent = countervalue;
}
