let answers = ["images/crystalball/ball1.png", "images/crystalball/ball2.png", "images/crystalball/ball3.png", "images/crystalball/ball4.png", "images/crystalball/ball5.png"]

var randomIndex = Math.floor(Math.random() * 5)

document.querySelector("img").setAttribute("src", answers[randomIndex])