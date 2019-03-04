//play music on start button click
let startButton = document.querySelector('#start-button');
let themeSong = document.querySelector('#theme-song')

const playMusic = () => {
    themeSong.play()
}
//music end

startButton.addEventListener('click', playMusic)

//declare variables
const alphabet = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let guess ;
let storedGuesses = []; 
let lives = document.querySelector("#lives-count");
const clueList = [
    `Who said "You know nothing, Jon Snow"?`,//Ygritte
    `Who said "A lion does not concern himself with the opinion of sheep"?`,//Tywin Lannister
    `Who said "The things I do for love"?`,//Jamie Lannister
    `A "traitor"`,//Ned Stark
    `A girl is no one`, //Arya Stark
    `Who said "Everyone is mine to torment"?`, //Joffrey Baratheon
    `The Mountain`, //Gregore Clegane
    `Who said "Power is power"?`, //Cersei Lannister
    `Mother of Dragons` //Daenerys Targaryen
];
let wordList = [
    `Ygritte`,
    `Tywin`,
    `Jamie`,
    `Ned`,
    `Arya`,
    `Joffrey`,
    `Gregore`,
    `Cersei`,
    `Daenerys`
];

//randomized clue variable
let randomClue = clueList[Math.floor(Math.random() * clueList.length)];
const randomWord = wordList[Math.floor(Math.random() * wordList.length)];

//show clue 
const showClue = () => {
    document.querySelector("#clue").textContent = "Clue: " + (randomClue);
}

const showUnderscores = () => {
    for (let i = 0; i < randomWord.length; i++) {
    let thing = document.createElement('span');
    thing.textContent = '_ ';
    document.querySelector('#word-box').append(thing);
}}

//clue onClick event
startButton.addEventListener('click', showClue);
startButton.addEventListener('click', showUnderscores);
