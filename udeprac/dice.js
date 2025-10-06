var randomNumber1 = Math.floor(Math.random() * 6 + 1)

var randomImage = "dice" + randomNumber1 + ".png"

var imageSource =  "images/" +  randomImage

var rolledDice = document.querySelector("img").setAttribute("src", imageSource);



var randomNumber2 = Math.floor(Math.random() * 6 + 1)

var randomImage2 = "dice" + randomNumber2 + ".png"

var imageSource2 =  "images/" +  randomImage2


var rolledDice = document.getElementsByClassName("img2")[0].setAttribute("src", imageSource2);


function refreshButton (){
    if (randomNumber1 > randomNumber2){
        return "Player one wins"
    } else if(randomNumber2 > randomNumber1){
        return "Player two wins"
    } else {
        return "Draw!"
    }

}


document.querySelector("h1").innerHTML = refreshButton();

console.log(refreshButton());



 



















