let wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    }
]

//let wordList = ['John', 'Mercy', 'Sathwik', 'Samuel', 'Mom', 'Dad'];
let maxTries; 
let wArray = []; 
let printChar ="";

function setNewGame(){
    let index = Math.floor(Math.random()*wordList.length);
    let w = wordList[index]
    let word = w.word
    let hint = w.hint
    maxTries = 5
    console.log(w)
    console.log(w.word)
    console.log(w.hint)
    wArray = word.split("");
    console.log(wArray)

    //document.getElementById("test").innerHTML = '<input type="text" disabled value='+ `${w}` + '>' ;

    let wordinput =""

    for (i=0; i<wArray.length; i++){
        console.log(wArray[i])
        console.log('in the loop:' + i)
        wordinput = wordinput + '<input type="text" disabled value='+ wArray[i] + '>';
        //console.log(wordinput)
    }
    document.getElementById("test").innerHTML = wordinput ;
    document.getElementById("hint").innerHTML = "Hint : "  + hint;
    document.getElementById("maxtries").innerHTML = "Max Tries : "  + maxTries;
}

function findCharInWord(e){
    let char = e.target.value.toLowerCase();
    console.log(char)
    if(char.match(/^[A-Za-z]+$/))
    {
        if(wArray.includes(char)){
            printChar =  printChar + " " + char;
            document.getElementById("correctWord").innerHTML = "Correct Letters: " + printChar;
        }
        else {
            maxTries--
        }
        document.getElementById("maxtries").innerHTML = "Max Tries : "  + maxTries;
    }
}

setNewGame();

document.getElementById("btn").addEventListener("click", setNewGame)
typingInput = document.querySelector(".typing-input");
typingInput.addEventListener("input", findCharInWord);
console.log(typingInput)