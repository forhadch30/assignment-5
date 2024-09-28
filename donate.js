const donationTab = document.getElementById('donate-btn');
const historyTab = document.getElementById('history-btn');
historyTab.addEventListener('click', function () {
    historyTab.className = 'bg-[#B4F461] py-2 px-4 rounded-lg text-xl font-bold border';
    donationTab.removeAttribute('class');
    donationTab.classList.add('py-2', 'px-4', 'rounded-lg', 'text-xl', 'font-bold', 'border')
});

donationTab.addEventListener('click', function () {
    donationTab.className = 'bg-[#B4F461] py-2 px-4 rounded-lg text-xl font-bold';
    historyTab.removeAttribute('class')
    historyTab.classList.add('py-2', 'px-4', 'rounded-lg', 'text-xl', 'font-bold', 'border')
})

// Noakhali area
document.getElementById('btn-donation').addEventListener('click', function () {

    const amountBalanceUp = writeDonateAmountElement('balance-Amount-nav');
    const amountBalance = writeDonateAmountElement('amount-balance');
    const amountDonateInput = writeDonateAmount('donation-input');

    if (isNaN(amountDonateInput) || amountDonateInput <= 0) {
        alert('Please Provide the number');
        return;
    }

    document.getElementById('donation-input').value = '';

    const totalBalance = amountBalance + amountDonateInput;

    document.getElementById('amount-balance').innerText = totalBalance;



    const cosAmount = amountBalanceUp - totalBalance;
    document.getElementById('balance-Amount-nav').innerText = cosAmount;

    const historyDiv = document.createElement('div');
    historyDiv.classList.add('border', 'px-3', 'py-3', 'mt-3', 'rounded-md')
    historyDiv.innerHTML = `
    <p class='text-xl font-bold py-3'>${totalBalance} Taka is Donate for famine-2024 at Feni, BangleDeash</p>
    <p class='text-xl'>date: ${new Date().toString()}</p>
    `
    const historyArea = document.getElementById('history-area-container');
    // historyArea.classList.add();
    historyArea.insertBefore(historyDiv, historyArea.firstChild);
    my_modal_1.showModal()
})

// Feni Bangladesh
document.getElementById('btn-donation-feni').addEventListener('click', function () {

    const noakhaliBalance = writeDonateAmountElement('balance-Amount-nav');
    const noakhaliAmount = writeDonateAmountElement('noakhali-amount');
    const noakhaliInputDonate = writeDonateAmount('donation-input-noakhali');

    if (isNaN(noakhaliInputDonate) || noakhaliInputDonate <= 0) {
        alert('Please Provide the number');
        return;
    }

    document.getElementById('donation-input-noakhali').value = '';

    const noakhaliTotalAmount = noakhaliAmount + noakhaliInputDonate
    document.getElementById('noakhali-amount').innerText = noakhaliTotalAmount;

    const noakhaliTotalCos = noakhaliBalance - noakhaliInputDonate;
    document.getElementById('balance-Amount-nav').innerText = noakhaliTotalCos;


    const historyDiv = document.createElement('div');
    historyDiv.classList.add('border', 'px-3', 'py-3', 'mt-3', 'rounded-md')
    historyDiv.innerHTML = `
    <p class='text-xl font-bold py-3'>${noakhaliTotalAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
    <p class='text-xl'>date: ${new Date().toString()}</p>
    `
    const historyArea = document.getElementById('history-area-container');
    historyArea.insertBefore(historyDiv, historyArea.firstChild);

    my_modal_2.showModal();
})


//  Quota Movement Bangladesh
document.getElementById('quota-btn-donation').addEventListener('click', function () {

    const noakhaliBalance = writeDonateAmountElement('balance-Amount-nav');
    const noakhaliAmount = writeDonateAmountElement('quota-amount-balance');
    const noakhaliInputQuota = writeDonateAmount('quota-donation-input');

    if (isNaN(noakhaliInputQuota) || noakhaliInputQuota <= 0) {
        alert('Please Provide the number');
        return;
    }

    document.getElementById('quota-donation-input').value = '';


    const quotaMovementAmount = noakhaliAmount + noakhaliInputQuota
    document.getElementById('quota-amount-balance').innerText = quotaMovementAmount;

    const noakhaliTotalCos = noakhaliBalance - noakhaliInputQuota;
    document.getElementById('balance-Amount-nav').innerText = noakhaliTotalCos;

    const historyDiv = document.createElement('div');
    historyDiv.classList.add('border', 'px-3', 'py-3', 'mt-3', 'rounded-md')
    historyDiv.innerHTML = `
    <p class='text-xl font-bold py-3'>${quotaMovementAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class='text-xl'>date: ${new Date().toString()}</p>
    `
    const historyArea = document.getElementById('history-area-container');
    historyArea.insertBefore(historyDiv, historyArea.firstChild);

    my_modal_3.showModal();
})



// donation history area
document.getElementById('donate-btn').addEventListener('click', function () {
    document.getElementById('card-container').classList.remove('hidden');

    const hiddenBtn = document.getElementById('history-area-container');
    hiddenBtn.classList.add('hidden')
});
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('card-container').classList.add('hidden');

    const hiddenBtn = document.getElementById('history-area-container');
    hiddenBtn.classList.remove('hidden')
})


