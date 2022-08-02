// Global Variables
let billInput;
let splitBy;
let customTip;
let customTipInput;
let customTipPercentage;

// 5% tip
function totalPerPerson5() {
  billInput = document.getElementById("bill_amount").value;
  splitBy = Number(document.getElementById("numberOfPeople").value);

  let totalBill = billInput;
  let tipAmountPerPerson = (billInput * 0.05) / splitBy;
  let totalTip = billInput * 0.05;
  let totalCostWithTip = totalTip + Number(totalBill);
  let totalCostPerPerson = totalCostWithTip / splitBy;

  document.getElementById("tipPerPerson").innerHTML = tipAmountPerPerson;

  document.getElementById("totalPerPerson").innerHTML = totalCostPerPerson;
}

// 10% tip
function totalPerPerson10() {
  billInput = document.getElementById("bill_amount").value;
  splitBy = Number(document.getElementById("numberOfPeople").value);

  let totalBill = billInput;
  let tipAmountPerPerson = (billInput * 0.1) / splitBy;
  let totalTip = billInput * 0.1;
  let totalCostWithTip = totalTip + Number(totalBill);
  let totalCostPerPerson = totalCostWithTip / splitBy;

  document.getElementById("tipPerPerson").innerHTML = tipAmountPerPerson;

  document.getElementById("totalPerPerson").innerHTML = totalCostPerPerson;
}

// 15% tip
function totalPerPerson15() {
  billInput = document.getElementById("bill_amount").value;
  splitBy = Number(document.getElementById("numberOfPeople").value);

  let totalBill = billInput;
  let tipAmountPerPerson = (billInput * 0.15) / splitBy;
  let totalTip = billInput * 0.15;
  let totalCostWithTip = totalTip + Number(totalBill);
  let totalCostPerPerson = totalCostWithTip / splitBy;

  document.getElementById("tipPerPerson").innerHTML = tipAmountPerPerson;

  document.getElementById("totalPerPerson").innerHTML = totalCostPerPerson;
}

// 25% tip
function totalPerPerson25() {
  billInput = document.getElementById("bill_amount").value;
  splitBy = Number(document.getElementById("numberOfPeople").value);

  let totalBill = billInput;
  let tipAmountPerPerson = (billInput * 0.25) / splitBy;
  let totalTip = billInput * 0.25;
  let totalCostWithTip = totalTip + Number(totalBill);
  let totalCostPerPerson = totalCostWithTip / splitBy;

  document.getElementById("tipPerPerson").innerHTML = tipAmountPerPerson;

  document.getElementById("totalPerPerson").innerHTML = totalCostPerPerson;
}

// 50% tip
function totalPerPerson50() {
  billInput = document.getElementById("bill_amount").value;
  splitBy = Number(document.getElementById("numberOfPeople").value);

  let totalBill = billInput;
  let tipAmountPerPerson = (billInput * 0.5) / splitBy;
  let totalTip = billInput * 0.5;
  let totalCostWithTip = totalTip + Number(totalBill);
  let totalCostPerPerson = totalCostWithTip / splitBy;

  document.getElementById("tipPerPerson").innerHTML = tipAmountPerPerson;

  document.getElementById("totalPerPerson").innerHTML = totalCostPerPerson;
}

// custom% tip
function totalPerPersonCustom() {
  billInput = document.getElementById("bill_amount").value;
  splitBy = Number(document.getElementById("numberOfPeople").value);
  customTipInput = document.getElementById("custom_input").value;
  customTipPercentage = customTipInput / 100;

  let totalBill = billInput;
  let tipAmountPerPerson = (billInput * customTipPercentage) / splitBy;
  let totalTip = billInput * customTipPercentage;
  let totalCostWithTip = totalTip + Number(totalBill);
  let totalCostPerPerson = totalCostWithTip / splitBy;

  document.getElementById("tipPerPerson").innerHTML = tipAmountPerPerson;

  document.getElementById("totalPerPerson").innerHTML = totalCostPerPerson;

  console.log("custom tip input", customTipPercentage);
}
