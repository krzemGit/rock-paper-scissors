class Lang {
    constructor() {
        // language flag
        this.english = 0;

        // texts for change
        this.alert = ['Gracz musi dokonać wyboru!', 'Player has to make a choice!'];
        this.h1 = ['PAPIER <span>- NOŻYCE -</span> KAMIEŃ', 'ROCK <span>- PAPER -</span> SCISSORS'];
        this.h3 = [['Proszę, wybierz:', 'Please choose:'], ['wynik gry', 'game result'], ['aktualne wyniki', 'results summary']];
        this.button = [['En', 'Pl'], ['Zagraj!', 'Play!']];
        this.resultsPanel = [['Twój wybór: ', 'Your choice: '],
        ['Wybór komputera: ', 'Computer\'s choice: '],
        ['Zwycięzca Gry:', 'The Result is: ']
        ];
        this.summaryPanel = [['liczba gier: ', 'games: '],
        ['wygranych: ', 'victories: '],
        ['przegranych: ', 'losses: '],
        ['remisów: ', 'draws: ']
        ];

        // elements for change
        this.btnTags = document.querySelectorAll('button');
        this.h1Tag = document.querySelector('h1');
        this.h3Tags = document.querySelectorAll('h3');
        this.resultTags = document.querySelectorAll('.panel--left span.text');
        this.summaryPanelTags = document.querySelectorAll('.panel--right span.text');

        // button action
        this.btnTags[0].addEventListener('click', () => {
            this.changeLang();
            this.renderLang();
        });
    };

    changeLang() {
        this.english = +(!this.english);
    };

    renderLang() {
        this.h1Tag.innerHTML = this.h1[this.english];
        this.h3Tags.forEach((tag, index) => tag.textContent = this.h3[index][this.english])
        this.btnTags.forEach((tag, index) => tag.textContent = this.button[index][this.english])
        this.resultTags.forEach((tag, index) => tag.textContent = this.resultsPanel[index][this.english])
        this.summaryPanelTags.forEach((tag, index) => tag.textContent = this.summaryPanel[index][this.english])
    };
};

const lang = new Lang();