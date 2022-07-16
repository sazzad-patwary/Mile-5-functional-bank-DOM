
// using function 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);      // string convert into text/digit
    inputField.value = '';                            // clear deposit input value 
    return amountValue;

}
// update total field 
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;

}
// deposite button deposite section
document.getElementById('deposit-submit-button').addEventListener('click', function () {

    // deposit input value 
    /*  
     const inputField = document.getElementById('deposit-amount');
     const inputAmountText = inputField.value;
     const amountValue = parseFloat(inputAmountText);  // text convert string
      */

    // using function 
    const depositAmount = getInputValue('deposit-amount');

    // update show total deposit value 
    /* 
    const depositTotal = document.getElementById('total-deposit');
    const previousDepositText = depositTotal.innerText;
    const previousDeposit = parseFloat(previousDepositText);
    depositTotal.innerText = previousDeposit + depositAmount;    //OR  const amountValueTotal = previousDeposit + amountValue;
    */
    updateTotalField('total-deposit', depositAmount);

    // update balance
    const balanceTotal = document.getElementById('total-balance');
    const previousText = balanceTotal.innerText;
    const previousbalance = parseFloat(previousText);
    balanceTotal.innerText = previousbalance + depositAmount;



})
// withdraw section 
document.getElementById('withdraw-submit-button').addEventListener('click', function () {
    /* 
    const withdrawInput = document.getElementById('withdraw-amount');
    const newWidthdrawText = withdrawInput.value;
    const newWithdraw = parseFloat(newWidthdrawText);
     */
    const withdrawAmount = getInputValue('withdraw-amount');

    /* 
    const withdrawTotal = document.getElementById('total-withdraw');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdraw = parseFloat(previousWithdrawText);
    withdrawTotal.innerText = previousWithdraw + withdrawAmount;    //OR    const newTotalWithdraw = previousWithdraw + withdrawAmount;
     */

    // OR?
    updateTotalField('total-withdraw', withdrawAmount);

    // update balance 
    const balanceTotal = document.getElementById('total-balance');
    const previousText = balanceTotal.innerText;
    const previousbalance = parseFloat(previousText);
    balanceTotal.innerText = previousbalance - withdrawAmount;  //OR    const newBalanceTotal = previousbalance - withdrawAmount;


})
