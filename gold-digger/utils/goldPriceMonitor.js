export function goldPriceMonitor(goldPrice) {
    // random rate is between -10% and 10%
    const randomRate = (Math.random()  - 0.5) / 5;
    console.log(randomRate)
    return goldPrice * (1 + randomRate);
}
