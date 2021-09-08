// DOM√ JS√ / CallBack Functions√ // sound√ / Animation√ / keypres√ / click√
// MOHAMED KABHA @ 09-2021 √
// SO SIMPLE AND EASY TO UNDERSTAND

//storing the number if Buttoms used in index.html
var num_buttomes = document.querySelectorAll(".drum").length;

//for each one of the buttoms: when clicked an an anonymous function triggered so:
//storing the Letters of each buttom
//trigger playsound function
// trigger buttomAnimation function
for (var i = 0; i < num_buttomes; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {
        var charClick = this.innerHTML;
        playsound(charClick);
        buttonAnimation(charClick);
    });
}

// buttonAnimation function accepts charkey w/a/s/d/j/k/l once from DOM-"click" and once from DOM-"keypress" so it can 
// respond to the mouse click and the keyboard buttoms
// I did add the pressed class from the CSS file using DOM
// I did remove the pressed class effect using setTime fun' for 100ms
function buttonAnimation(charClick) {
    var activeButton = document.querySelector("." + charClick);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

// the playsound function using switch case for every key there is a specific sound effect from sounds folder
function playsound(charButton) {
    switch (charButton) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
        default:
            console.log(charButton);
            break;
    }
}

// the keypress button - anonymous one 
// when keyword press a specific button I send the key to buttonAnimation fun' so it keep working
// using switch case for every keybutton there os a specific sound from sounds folder
document.addEventListener("keypress", function (event) {

    buttonAnimation(event.key);
    switch (event.key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
        default:
            console.log(charButton);
            break;
    }

});