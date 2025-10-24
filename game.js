var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var started = false;

var level = 0;

//started game

function startOver() {
  started = false;
  level = 0;
  gamePattern = [];
}

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("level " + level);

    nextSequence();
    started = true;
  }
});

// saving the last picked color in the sequence by a player

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

//  when a random number is chosen the coressponded sound to the color will play
// $("#" + randomChosenColour).click

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(".btn").click(function (event) {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);

  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// check Answer//

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();

    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game over, press any key to restart");

    startOver();
  }
}

//
