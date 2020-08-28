// this class conatins the logic of the game

class Choices {
    constructor() {
        this.choiceList = [['papier', 'paper'], ['kamień', 'rock'], ['nożyczki', 'scissors']] // left this list here, becuase it is important for the logic of the game
        this.playerChoice = '';
        this.aiChoice = '';
        this.result = '';
        this.message = '';
        this.messageColor = '';
    };

    playerChoose(elementData) {
        this.playerChoice = elementData;
    };

    aiChoose(choices) {
        const randomChoice = Math.floor(Math.random() * 3);
        this.aiChoice = randomChoice
    };

    setResult() {
        if (this.playerChoice == this.aiChoice) {
            this.result = 'draw';
        } else if ((this.playerChoice == 0 && this.aiChoice == 1) || (this.playerChoice == 2 && this.aiChoice == 0) || (this.playerChoice == 1 && this.aiChoice == 2)) {
            this.result = 'victory';
        } else {
            this.result = 'loss';
        }

    };
    setMessage() {
        switch (this.result) {
            case 'victory':
                return lang.english ? ['You Win!', 'green'] : ['Zwyciężyłeś!', 'green']
            case 'loss':
                return lang.english ? ['You loose :(', 'red'] : ['Przegrałeś :(', 'red']
            default:
                return lang.english ? ['Draw :?', 'royalblue'] : ['Remis :?', 'royalblue']
        };
    };

    resetScore() {
        this.playerChoice = '';
        this.aiChoice = '';
        this.result = '';
        this.message = '';
    };
};

const choices = new Choices();
