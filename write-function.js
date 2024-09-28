// One function area 
function writeDonateAmount(id) {
    const amount = parseFloat(document.getElementById(id).value);
    return amount;
}
function writeDonateAmountElement(id) {
    const balance = parseFloat(document.getElementById(id).innerText);
    return balance;
}
