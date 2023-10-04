let calculation = localStorage.getItem('Calculation') || '';
displaycalculation();
function updateCalculation(value) {
   calculation+=value;
   displaycalculation();
   localStorage.setItem('Calculation',calculation); 
}

function displaycalculation(){
document.querySelector('.js-cal').innerHTML=calculation;
document.querySelector('.js-cal').style.marginLeft="30px";
}
const cal= document.querySelector(".button-no");
cal.addEventListener("mouseover"),function(event){
   const x= (event.pageX - cal.offsetLeft)
    const y = (event.pageY - cal.offsetTop);

     cal.style.setProperty("--xPos", x, "px")
    cal.style.setProperty("--yPos", y + "px");
}

const operate= document.querySelector(".operation-button");
cal.addEventListener("mouseover"),function(event){
   const x= (event.pageX - operate.offsetLeft)
    const y = (event.pageY - operate.offsetTop);

     cal.style.setProperty("--xPos", x, "px")
    cal.style.setProperty("--yPos", y + "px");
}


