// this class serves the interface, goes after the stats and choices.

class Display {
    constructor() {
        // Player choices 
        this.choiceTags = document.querySelectorAll('div.option');

        // Game result interface
        this.playerChoiceTag = document.querySelector('[data-summary="your-choice"]');
        this.aiChoiceTag = document.querySelector('[data-summary="ai-choice"]');
        this.winnerTag = document.querySelector('[data-summary="who-win"]');

        // Statisics interface
        this.gameNoTag = document.querySelector('p.numbers span.numbers');
        this.winsTag = document.querySelector('p.wins span.numbers');
        this.lossTag = document.querySelector('p.losses span.numbers');
        this.drawTag = document.querySelector('p.draws span.numbers');
    };

    playerMarkChoice(element) {
        element.classList.add('active');
    };

    clearChoices() {
        this.choiceTags.forEach(tag => tag.classList.remove('active'));
    };

    displayMessage([message, color]) {
        this.winnerTag.textContent = message;
        this.winnerTag.style.color = color;
    };

    render() {
        this.clearChoices();
        const message = choices.setMessage();

        this.playerChoiceTag.textContent = choices.choiceList[choices.playerChoice][lang.english];
        this.aiChoiceTag.textContent = choices.choiceList[choices.aiChoice][lang.english];
        this.winnerTag.textContent = message[0];
        this.winnerTag.style.color = message[1];

        this.gameNoTag.textContent = stats.games;
        this.winsTag.textContent = stats.wins;
        this.lossTag.textContent = stats.losses;
        this.drawTag.textContent = stats.draws;
    };
};

const display = new Display();