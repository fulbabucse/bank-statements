document.getElementById("deposit-btn").addEventListener("click", function () {
    const inputDepositFieldElement = document.getElementById("deposit-field");
    const inputDepositFieldString = inputDepositFieldElement.value;
    const inputDepositAmount = parseFloat(inputDepositFieldString);

    const preDepositElement = document.getElementById("pre-deposit-amount");
    const preDepostAmount = preDepositElement.innerText;
    const preDepositString = parseFloat(preDepostAmount);
    const preDepositTotal = inputDepositAmount + preDepositString;
    preDepositElement.innerText = preDepositTotal;


    const preTotalElement = document.getElementById("pre-total-balance");
    const preTotalString = preTotalElement.innerText;
    const preTotalAmount = parseFloat(preTotalString);
    const currentTotalAmount = inputDepositAmount + preTotalAmount;

    preTotalElement.innerText = currentTotalAmount;

    inputDepositFieldElement.value = "";
})

document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawFieldElement = document.getElementById("withdraw-field");
    const withdrawFieldString = withdrawFieldElement.value;
    const WithdrowAmount = parseFloat(withdrawFieldString);

    const preWithdrowElement = document.getElementById("pre-withdrow-amount");
    const preWithdrowAmountString = preWithdrowElement.innerText;
    const preWithdrowAmount = parseFloat(preWithdrowAmountString);

    const preTotalWithdrowAmount = preWithdrowAmount + WithdrowAmount;
    preWithdrowElement.innerText = preTotalWithdrowAmount;

    const preTotalBalanceElement = document.getElementById("pre-total-balance");
    const preTotalBalanceString = preTotalBalanceElement.innerText;
    const preTotalBalnce = parseFloat(preTotalBalanceString);

    const currentTotalBalance = preTotalBalnce - WithdrowAmount;

    preTotalBalanceElement.innerText = currentTotalBalance;

    withdrawFieldElement.value = "";

    if (currentTotalBalance === 0) {
        alert("insufficient balance")
    }

})