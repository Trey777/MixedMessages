
import {friendlyNames} from "./myAdjectives.js";
import {friendlyWords} from "./myAdjectives.js";

const startButton = document.getElementById("startButton");
const mainWords = document.getElementById("mainWords");
const resetButton = document.getElementById("resetButton");
const messageCenter = document.getElementById("messageCenter");
const shakeButton = document.getElementById("shakeButton");
const inputName = document.getElementById("inputName");

const newAddition = new friendlyWords();
function clickStart(){
    mainWords.innerHTML = "Click Start";
}

shakeButton.onclick = function(){

  mainWords.innerHTML = newAddition.respondingMessage();
};
startButton.onclick = function () {
  
  friendlyNames.push(inputName.value);
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