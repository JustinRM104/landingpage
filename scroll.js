let button = document.getElementById('inschrijven')
let buttonShown = false

window.onscroll = function(){
  if(window.pageYOffset >= 400 && buttonShown == false){
    button.style.opacity = 1;
    buttonShown = true
  }
  else if(window.pageYOffset < 400 && buttonShown == true){
    button.style.opacity = 0;
    buttonShown = false
  }
}
