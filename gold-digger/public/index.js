const eventSource = new EventSource('/api/price-updated');
const liveUpdateIndicator = document.getElementById('connection-status');
const livePrice = document.getElementById('price-display');
const investBtn = document.getElementById('invest-btn');
const investedDialog = document.getElementById('invested-dialog');
const investGoldForm = document.getElementById('invest-gold-form');
const closeModalBtn = document.getElementById('close-summary-btn');
const investmentSummary = document.getElementById('investment-summary')
let investmentAmount = document.getElementById('investment-amount');
let price;

function updateLivePrice(price) {
    livePrice.textContent = price;
    liveUpdateIndicator.textContent = 'Live Price 🟢';
    return;
}


eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
    price = Number(data.price);
    console.log(typeof price)
    updateLivePrice(price)
}

eventSource.onerror = (err) => {
    liveUpdateIndicator.textContent = 'Live Price 🔴'
}

investGoldForm.addEventListener('submit', (event)=>{
    const goldWeight = (Number(investmentAmount.value)/Number(price));
    const htmlContent = `You just bought ${goldWeight} ounces (ozt) for £${price}. <br> You will receive documentation shortly.`
    event.preventDefault()
    investmentSummary.innerHTML = htmlContent;
    investedDialog.showModal();

})

closeModalBtn.addEventListener('click', (e) => {
    investedDialog.close();
    investmentAmount.value = '';
})
