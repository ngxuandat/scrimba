const schemeSelector = document.getElementById("scheme-mode");
const colorSelector = document.getElementById("get-color")
const getColorSchemeBtn = document.getElementById("get-color-scheme-btn");
const scheme = document.getElementById("color-scheme");

let selectedSchemeMode = schemeSelector.value;
let selectedColor = colorSelector.value.slice(1);


schemeSelector.addEventListener("change", ()=>{
    selectedSchemeMode=schemeSelector.value;
});

colorSelector.addEventListener("change", ()=>{
    selectedColor = colorSelector.value.slice(1);
})

function getColorScheme() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedSchemeMode}&count=5`)
        .then(res => res.json())
        .then(data => {
            scheme.innerHTML = '';
            data.colors.forEach((color)=> {
                let hexValue = color.hex.value;
                scheme.innerHTML += `
                            <div>
                                <div style="background-color: ${hexValue}" class="color-display"></div>
                                <button class="color-hex" data-hex="${hexValue}">${hexValue}</button>
                            </div>
                `;
            });

        })
        .catch(err=> console.error("Failed to fetch data", err))
}

getColorSchemeBtn.addEventListener("click", getColorScheme)
scheme.addEventListener("click", (e)=>{
    if(e.target.matches(".color-hex")) {
        navigator.clipboard.writeText(e.target.dataset.hex);
        e.target.textContent = "Copied!"
        setTimeout(()=>{
            e.target.textContent = e.target.dataset.hex;
        }, 1500)
    }
});
