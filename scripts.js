
import {friendlyWords} from "./myAdjectives.js";

const startButton = document.getElementById("startButton");
const mainWords = document.getElementById("mainWords");
const resetButton = document.getElementById("resetButton");
const messageCenter = document.getElementById("messageCenter");

const newAddition = new friendlyWords("Trey");


startButton.onclick = function () {
  mainWords.innerHTML = newAddition.respondingMessage();
  startButton.style.display = "none";
  messageCenter.style.display = "block";
};
resetButton.onclick = function () {
  startButton.style.display = "block";
  messageCenter.style.display = "none";
};