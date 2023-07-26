
import {friendlyWords} from "./myAdjectives.js";

const startButton = document.getElementById("startButton");
const mainWords = document.getElementById("mainWords");
const resetButton = document.getElementById("resetButton");
const messageCenter = document.getElementById("messageCenter");
const shakeButton = document.getElementById("shakeButton");

const newAddition = new friendlyWords("Trey");
function clickStart(){
    mainWords.innerHTML = "Click Start";
}

shakeButton.onclick = function(){

  mainWords.innerHTML = newAddition.respondingMessage();
};

startButton.onclick = function () {
  mainWords.innerHTML = newAddition.respondingMessage();
  startButton.style.display = "none";
  messageCenter.style.display = "block";
  shakeButton.style.display = "block";
};
resetButton.onclick = function () {
  clickStart();
  startButton.style.display = "block";
  shakeButton.style.display = "none";
};