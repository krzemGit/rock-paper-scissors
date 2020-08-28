// this class runs the game

class Game {
    constructor() {
        this.playButton = document.querySelector('button.start');
        this.playerChoices = document.querySelectorAll('div.option');

        this.playerChoices.forEach((choice, choiceIndex) => {
            choice.addEventListener('click', () => {
                display.clearChoices();
                display.playerMarkChoice(choice);
                choices.playerChoose(choice.dataset.option);
            });
        });
        this.playButton.addEventListener('click', () => {
            const played = this.startGame();
            if (window.innerWidth <= 500 && played !== false) {
                window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
            }
        });
    };

    startGame() {
        if (!choices.playerChoice.length) {
            alert(lang.alert[lang.english]);
            return false;
        };
        choices.aiChoose(game.playerChoices);
        choices.setResult();
        stats.addScore();

        display.render();
        choices.resetScore();
    };
};