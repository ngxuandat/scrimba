const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


function makePassword(length, seedArray) {
    let out = '';
    for (let i = 0; i < length; i++){
        out += seedArray[Math.floor(Math.random() * seedArray.length)];
    }
    return out;
}

function makeSeedArray() {
    let seedArray = lower;
    if (document.getElementById("hasUppercase").checked) {
        seedArray = seedArray.concat(upper);
    }
    if (document.getElementById("hasNumber").checked) {
        seedArray = seedArray.concat(numbers);
    }
    if (document.getElementById("hasSymbol").checked) {
        seedArray = seedArray.concat(symbols);
    }
    return seedArray;
}

function generatePasswords() {
    const input = document.getElementById("password-length");
    const entered = Number(input.value);
    const passwordLength = entered > 0 ? entered : 15;

    const seedArray = makeSeedArray();

    document.getElementById('firstPassword').textContent = makePassword(passwordLength, seedArray);
    document.getElementById('secondPassword').textContent = makePassword(passwordLength, seedArray)
}

function saveToClipboard(whichPassword) {
    const copiedPassword = document.getElementById(whichPassword).textContent;
    navigator.clipboard.writeText(copiedPassword);
    alert("Password copied to clipboard.")
}

const btn = document.getElementById('themeToggle');

btn.addEventListener("click", function() {
    document.getElementById("main-block").classList.toggle('light-mode');
    document.getElementById("generate-a").classList.toggle('light-mode');
})
