var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; ++i) {
  buttons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    checker(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (out) {
  checker(out.key);
  addAnimation(out.key);
});

function checker(event) {
  switch (event) {
    case "w":
      var audioW = new Audio("./sounds/crash.mp3");
      audioW.play();
      break;

    case "a":
      var audioA = new Audio("./sounds/kick-bass.mp3");
      audioA.play();
      break;

    case "s":
      var audioS = new Audio("./sounds/snare.mp3");
      audioS.play();
      break;

    case "d":
      var audioD = new Audio("./sounds/tom-1.mp3");
      audioD.play();
      break;

    case "j":
      var audioJ = new Audio("./sounds/tom-2.mp3");
      audioJ.play();
      break;

    case "k":
      var audioK = new Audio("./sounds/tom-3.mp3");
      audioK.play();
      break;

    case "l":
      var audioL = new Audio("./sounds/tom-4.mp3");
      audioL.play();
      break;

    default:
      break;
  }
}
function addAnimation(currentKey) {
  var pressedKey = document.querySelector("." + currentKey);
  pressedKey.classList.add("pressed");
  setTimeout(function () {
    pressedKey.classList.remove("pressed");
  }, 100);
}
