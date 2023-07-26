const friendlyAdjectives = ["lovely", "truthful","wealthy","inspiring","wise","faithful"];
export const friendlyNames = ["Mi amigo", "Sir","My love", "Amore"];

function myRandomizer(inputArr){
    return inputArr[Math.floor(Math.random() * inputArr.length)];
}

export class friendlyWords{
    constructor(userName){
        this._userName = userName;
    }
    get userName(){
        return this._userName;
    }
    respondingMessage(){
        const randomWord = friendlyAdjectives[Math.floor(Math.random() * friendlyAdjectives.length)];
        return `${myRandomizer(friendlyNames)}, you are a ${myRandomizer(friendlyAdjectives)} person.`;
    }
}