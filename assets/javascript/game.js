//play music on start button click
let startButton = document.querySelector('#start-button');
let themeSong = document.querySelector('#theme-song')

const playMusic = () => {
    themeSong.play()
}
//music end

startButton.addEventListener('click', playMusic)

//declare variables
let alphabet = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let guess ;
let storedGuesses = "A, B, C";
let storedWins = 0;
let lives = 10;
let buttonA = document.querySelector("#button-a");

function checkUserGuess(e) {
    console.log(e.target.innerHTML)
}

function initializeButtons() {
    for (let i = 0; i < alphabet.length; i++) {

        let guessButton = document.createElement('button')
        guessButton.innerHTML = alphabet[i]
        guessButton.onclick = checkUserGuess
        document.querySelector('.alphabet-box').append(guessButton)
    }
}
initializeButtons()
let wordList = [{
    hint: `"You know nothing, Jon Snow"`,
    answer: "Ygritte"
},
                {
    hint: `A girl is no one`,
    answer: 'Arya'
},
                {
    hint: 'A bastard son',
    answer: 'Gendry'
},
                {
    hint: '"_____ is power" - Cersei Lannister',
    answer: 'Power'
},
                {
    hint: 'West of the Narrow Sea',
    answer: 'Westeros'
},
                {
    hint: 'Largest dragon',
    answer: 'Drogon'
}
];
// const randomClue = clueList[Math.floor(Math.random() * clueList.length)];
const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
let remainingLetters = randomWord.answer.length;

//functions
const showClue = () => {
    document.querySelector("#clue").textContent = "Clue: " + (randomWord.hint);
    console.log(randomWord.hint)
    console.log(randomWord.answer)
};

const answerArray = () => {
    for (let i = 0; i < randomWord.answer.length; i++) {
    let thing = document.createElement('span');
    thing.textContent = '_ ';
    document.querySelector('#word-box').append(thing);
}};

const guessA = () => {
    console.log("a")
    return("a")
};

const gameLoop = () => {
    if (guessA === randomWord.answer.match) {
        console.log("true");
        let thing = document.createElement('span');
        this.textContent = "a";
        document.querySelector("#word-box").append(thing);
    }
    else {
        console.log("false")
    }
};

//function calls
startButton.addEventListener('click', showClue);
startButton.addEventListener('click', answerArray);
document.querySelector('#lives-count-js').append(lives);
document.querySelector('#lives-lost-count-js').append(storedGuesses);
document.querySelector('#wins-count-js').append(storedWins);
buttonA.addEventListener('click', guessA);
buttonA.addEventListener('click', gameLoop);