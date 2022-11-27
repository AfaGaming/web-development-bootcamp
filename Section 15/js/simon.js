buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];
var started = false;
var level = 0;


function nextSequence() {

    // resetting the user clicked pattern to check if the entered user answer is right or wrong every level
    userClickedPattern = [];

    // incrementing level
    level++;

    // updating title level info
    $("#level-title").text("Level " + level);

    // Generating a random integer between 0 (inclusive) and 4 (exclusive)
    var randomNumber = Math.floor(Math.random() * 4);

    // using the random number generated, selecting a random color from the button colors array
    var randomChosenColor = buttonColors[randomNumber];

    // adding the color to game pattern array
    gamePattern.push(randomChosenColor);

    // animating the color
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    // playing sound associated with the color
    playSound(randomChosenColor);
}

// function to play sound
function playSound(name) {

    // creating new audio object
    var audio = new Audio("sounds/" + name + ".mp3");

    // playing sound
    audio.play();
}

// checking if any and which button is cliked
$(".btn").click(function() {

    // creating a variable to store the id of the button clicked
    var userChosenColor = $(this).attr("id");

    // storing the id of the button clicked by user to an array
    userClickedPattern.push(userChosenColor);

    // playing sound associated with the button clicked by user
    playSound(userChosenColor);

    // calling animatePress to add animation to button clicks
    animatePress(userChosenColor);

    // checking for answer
    checkAnswer(userClickedPattern.length - 1);
});

// adding css class to animate button clicks
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    //removing pressed class after a 100 ms delay to create flash like animation
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// if any key on the keyboard is pressed, then start the game
$(document).keypress(function() {

    // if the game has not yet started
    if (!started) {
        // updating the title to current level info
        $("#level-title").text("Level " + level);

        // calling nextSequence function
        nextSequence();

        // the game has now marked as started
        started = true;
    }

});

// checking user entered answer
// after user has clicked and chosen an answer, passing in the
// index of the last answer in the user's sequence
function checkAnswer(currentLevel) {

    // checking if the most recent user answer is the same as the game pattern
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // if the answer is correct, checking if the user entered sequence is finished
        // if the sequence is finished, call nextSequence() after 1000 ms delay
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
      } else {
        // if the entered sequence is wrong then play the "wrong" sound
        playSound("wrong");
        // adding game over css effects
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200);

        // resetting the game to replay
        startOver();
      }
}

// resetting the game to replay
function startOver() {
    level = 0;
    gamePattern = []
    started = false;
}