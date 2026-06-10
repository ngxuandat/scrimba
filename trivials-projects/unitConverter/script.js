const btn = document.querySelector("button");
const conversedLength = document.getElementById("conversed-length");
const conversedVolume = document.getElementById("conversed-volume");
const conversedMass = document.getElementById("conversed-mass");
const toggle = document.getElementById("theme");


btn.addEventListener("click", ()=> {
    let inputNumber = document.getElementById("input-number").value;
    if (isNaN(Number(inputNumber))) {
        alert("Not a Number!")
    } else{
        let [feet, meters] = calculateLength(inputNumber);
        let [gallons, liters] = calculateVolume(inputNumber);
        let [pounds, kilos] = calculateMass(inputNumber);
        conversedLength.innerText = `${inputNumber} meters = ${feet} feet | ${inputNumber} feet = ${meters} meters`;
        conversedVolume.innerText = `${inputNumber} liters = ${gallons} gallons | ${inputNumber} gallons = ${liters} liters`;
        conversedMass.innerText = `${inputNumber} kilos = ${pounds} pounds | ${inputNumber} pounds = ${kilos} kilos`;
    }
});

toggle.addEventListener("click", ()=>{
    document.getElementById("conversion-result-block").classList.toggle('dark-mode');
    document.querySelectorAll(".conversion-result-individual-block").forEach((block) => {
        block.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".conversion-result").forEach((block) => {
        block.classList.toggle("dark-mode");
    })
})

function calculateLength(input) {
    let meterToFeet = Number(input) * 3.2808;
    let feetToMeter = Number(input) * 0.3048;
    return [meterToFeet.toFixed(3), feetToMeter.toFixed(3)];
}


function calculateVolume(input) {
    let litterToGallon = Number(input) * 0.2642;
    let gallonToLitter = Number(input) * 3.7854;
    return [litterToGallon.toFixed(3), gallonToLitter.toFixed(3)];
}

function calculateMass(input) {
    let kiloToPound = Number(input) * 2.2046;
    let poundToKilo = Number(input) * 0.4536;
    return [kiloToPound.toFixed(3), poundToKilo.toFixed(3)];
}
