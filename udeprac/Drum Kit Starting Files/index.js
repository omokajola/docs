// document.querySelectorAll("button")[0].addEventListener("click", blip );
// document.querySelectorAll("button")[1].addEventListener("click", blip );
// document.querySelectorAll("button")[2].addEventListener("click", blip );
// document.querySelectorAll("button")[3].addEventListener("click", blip );
// document.querySelectorAll("button")[4].addEventListener("click", blip );
// document.querySelectorAll("button")[5].addEventListener("click", blip );
// document.querySelectorAll("button")[6].addEventListener("click", blip );



var button = document.querySelectorAll("button")


    for (let i = 0; i < button.length; i++ ) {
    button[i].addEventListener("click", blip)



    function blip (){
        let buttonInnerHTML = this.innerHTML

        
     
switch (buttonInnerHTML) {
  case "w":  var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
     
    
    break;

  case "a":  var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
     
    break;

  case "s":  var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
     
    break;

  case "d":  var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
     
    break;

  case "j": var audio = new Audio("sounds/crash.mp3");
        audio.play();
     
     
    break;

  case "k": var audio = new Audio("sounds/snare.mp3");
        audio.play();
     
     
    break;

  case"l": var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
     
     
    break;

}

     
   
}

}

document.addEventListener("keypress", function){
  
}


 