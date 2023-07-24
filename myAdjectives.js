const friendlyAdjectives = ["lovely", "truthful","wealthy","inspiring","wise","faithful"];


export class friendlyWords{
    constructor(userName){
        this._userName = userName;
    }
    get userName(){
        return this._userName;
    }
    respondingMessage(){
        const randomWord = friendlyAdjectives[Math.floor(Math.random() * friendlyAdjectives.length)];
        return `${this.userName}, you are a ${randomWord} person.`;
    }
}