// Mouse Press Event Listener
for (var i = 0; i < document.querySelectorAll(".key").length; i++) {
    document.querySelectorAll(".key")[i].addEventListener("click", function () {
        var buttonLetter = this.className[0];
        makeSound(buttonLetter);
        buttonAnimation(buttonLetter);
    });
}


// Keyboard Press Event Listener
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "c":
            var C = new Audio("sounds/xylophone/C.mp3");
            C.play();
            break;

        case "d":
            var D = new Audio("sounds/xylophone/D.mp3");
            D.play();
            break;
            
        case "e":
            var E = new Audio("sounds/xylophone/E.mp3");
            E.play();
            break;

        case "f":
            var F = new Audio("sounds/xylophone/F.mp3");
            F.play();
            break;

        case "g":
            var G = new Audio("sounds/xylophone/G.mp3");
            G.play();
            break;

        case "a":
            var A = new Audio("sounds/xylophone/A.mp3");
            A.play();
            break;

        case "b":
            var B = new Audio("sounds/xylophone/B.mp3");
            B.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}