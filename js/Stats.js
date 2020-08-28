// this class keeps the score of the game

class Stats {
    constructor() {
        this.games = 0;
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
    }
    addScore() {
        this.games++;
        switch (choices.result) {
            case 'victory':
                this.wins++;
                break;
            case 'loss':
                this.losses++;
                break;
            default:
                this.draws++;
                break;
        };
    };
};

const stats = new Stats();