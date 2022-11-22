let dice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

function randomNumberGenerator() {
    var randomNumber = Math.floor(Math.random() * 6);
    return randomNumber
}

var num1 = randomNumberGenerator();
var num2 = randomNumberGenerator();

document.querySelector("img.img1").setAttribute("src", dice[num1]);
document.querySelector("img.img2").setAttribute("src", dice[num2]);

if (num1 > num2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (num1 < num2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}