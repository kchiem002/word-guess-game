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
// let clueList = [
//     `Who said "You know nothing, Jon Snow"?`,//Ygritte
//     `Who said "A lion does not concern himself with the opinion of sheep"?`,//Tywin Lannister
//     `Who said "The things I do for love"?`,//Jamie Lannister
//     `A "traitor"`,//Ned Stark
//     `A girl is no one`, //Arya Stark
//     `Who said "Everyone is mine to torment"?`, //Joffrey Baratheon
//     `The Mountain`, //Gregore Clegane
//     `Who said "Power is power"?`, //Cersei Lannister
//     `Mother of Dragons` //Daenerys Targaryen
// ];
// let wordList = [
//     `Ygritte`,
//     `Tywin`,
//     `Jamie`,
//     `Ned`,
//     `Arya`,
//     `Joffrey`,
//     `Gregore`,
//     `Cersei`,
//     `Daenerys`
// ];
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
]

// const randomClue = clueList[Math.floor(Math.random() * clueList.length)];
const randomWord = wordList[Math.floor(Math.random() * wordList.length)];

//functions
const showClue = () => {
    document.querySelector("#clue").textContent = "Clue: " + (randomWord.hint);
    console.log(randomWord.hint)
    console.log(randomWord.answer)
}

const showUnderscores = () => {
    for (let i = 0; i < randomWord.answer.length; i++) {
    let thing = document.createElement('span');
    thing.textContent = '_ ';
    document.querySelector('#word-box').append(thing);
}}

//function calls
startButton.addEventListener('click', showClue);
startButton.addEventListener('click', showUnderscores);
document.querySelector('#lives-count-js').append(lives);
document.querySelector('#lives-lost-count-js').append(storedGuesses);
document.querySelector('#wins-count-js').append(storedWins);