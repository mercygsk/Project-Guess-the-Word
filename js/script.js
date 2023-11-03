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
//let printChar ="";
let incorrectTries = [];
let CorrectTries = [];
const inputs = document.querySelector(".inputs");
const typingInput = document.querySelector(".typing-input");
let word;

// console.log(inputs);

function setNewGame(){
    let index = Math.floor(Math.random()*wordList.length);
    let w = wordList[index];
    word = w.word;
    let hint = w.hint;
    //maxTries = word.length = 5
    maxTries = word.length <=4 ? 5 : 7;
    //console.log(w.word)
    //console.log(w.hint)
    //console.log(wArray)
    CorrectTries = [];
    incorrectTries = [];
    document.getElementById("hint").innerHTML = "Hint : "  + hint;
    document.getElementById("maxtries").innerHTML = "Max Tries : "  + maxTries;
    document.getElementById("CorrectTries").innerHTML = "Correct Tries: " + CorrectTries;
    document.getElementById("incorrectTries").innerHTML = "Incorrect Tries : "  +  incorrectTries;

    let wordinput ="";

    for (i=0; i<word.length; i++){
        //console.log(wArray[i])
        //console.log('in the loop:' + i)
        //wordinput = wordinput + '<input type="text" disabled value='+ wArray[i] + '>';
        wordinput += `<input type="text" disabled>`;
        //console.log(wordinput)
        inputs.innerHTML = wordinput;
    }
    //document.getElementById("test").innerHTML = wordinput ;
}

function findCharInWord(e){
    let char = e.target.value.toLowerCase();
    // console.log(char)
    if(char.match(/^[A-Za-z]+$/) && !incorrectTries.includes(` ${char}`) && !CorrectTries.includes(char)){
        if(word.includes(char)){
            for(i=0; i<word.length; i++)
            {
                if(word[i]==char)
                {
                    //console.log(word[i])
                    //console.log(CorrectTries)
                    //CorrectTries += char;
                    CorrectTries.push(`${char}`);
                    inputs.querySelectorAll("input")[i].value = char;
                }
            }
            //console.log(CorrectTries)
            document.getElementById("CorrectTries").innerHTML = "Correct Tries: " + CorrectTries;
        }
        else
        {
            maxTries--;
            incorrectTries.push(`${char}`);
        }
        document.getElementById("maxtries").innerHTML = "Max Tries : "  + maxTries;
        document.getElementById("incorrectTries").innerText = "Incorrect Tries : "  +  incorrectTries;
    }
    typingInput.value = "";

    setTimeout(() => {
         if(CorrectTries.length===word.length)
        {
            alert(`You Won! You found the word  ${word.toUpperCase()}`);
            return setNewGame();
        }
        else if(maxTries < 1) 
        {
            alert("Game Over - Sorry you Lost!!! You have no more tries to guess")
            for(i=0; i<word.length; i++)
            {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    },10);
}


setNewGame();
document.getElementById("btn").addEventListener("click", setNewGame)
typingInput.addEventListener("input", findCharInWord);
// document.getElementById("maxtries").innerHTML = "Max Tries : "  + maxTries;
// document.getElementById("incorrectTries").innerHTML = "IncorrectTries : "  +  incorrectTries;
// document.getElementById("CorrectTries").innerHTML = "CorrectTries: " + printChar;
//console.log(typingInput)
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());