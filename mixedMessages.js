
import {friendlyWords} from "./myAdjectives.js";

const firstDiv = document.getElementById('justifyMe')


const youCrazy = new friendlyWords("Trey");

firstDiv.innerHTML = youCrazy.respondingMessage();