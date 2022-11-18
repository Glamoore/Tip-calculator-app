// Global Variables
let billInput;
let splitBy;
let customTip;
let customTipInput;
let customTipPercentage;
let errorMessageForZero = "Can't be zero";

// 5% tip
function totalPerPerson5() {
  // Setting up the value input fields
  billInput = document.getElementById("bill_amount").value;
  splitBy = Number(document.getElementById("numberOfPeople").value);

  // Calculating the values to be displayed after input
  let totalBill = billInput;
  let tipAmountPerPerson = (billInput * 0.05) / splitBy;
  let tipAmountPerPersonRounded = tipAmountPerPerson.toFixed(2);
  let totalTip = billInput * 0.05;
  let totalCostWithTip = totalTip + Number(totalBill);
  let totalCostPerPerson = totalCostWithTip / splitBy;
  let totalCostPerPersonRounded = totalCostPerPerson.toFixed(2);

  // Displaying the results of the calculation
  document.getElementById(
    "tipPerPerson"
  ).innerHTML = `£${tipAmountPerPersonRounded}`;

  document.getElementById(
    "totalPerPerson"
  ).innerHTML = `£${totalCostPerPersonRounded}`;

  // Number of people < Zero - error message
  if (splitBy === 0) {
    console.log("Less than Zero");
    let splitByElement = document.getElementById("numberOfPeople-Input");
    splitByElement.style.border = "2px solid hsla(13, 70%, 60%, 1)";
    document.getElementById("zeroErrorMessage").innerHTML = errorMessageForZero;
    document.getElementById("tipPerPerson").innerHTML = "£0.00";
    document.getElementById("totalPerPerson").innerHTML = "£0.00";
  }

  // Changing the colour of the button on select
  let fivePercentBtn = document.getElementById("5");
  fivePercentBtn.style.backgroundColor = "hsla(172, 67%, 45%, 1)";
  fivePercentBtn.style.color = "hsla(183, 100%, 15%, 1)";
}

// 10% tip
function totalPerPerson10() {
  // Setting up the value input fields
  billInput = document.getElementById("bill_amount").value;
  splitBy = Number(document.getElementById("numberOfPeople").value);

  // Calculating the values to be displayed after input
  let totalBill = billInput;
  let tipAmountPerPerson = (billInput * 0.1) / splitBy;
  let totalTip = billInput * 0.1;
  let tipAmountPerPersonRounded = tipAmountPerPerson.toFixed(2);
  let totalCostWithTip = totalTip + Number(totalBill);
  let totalCostPerPerson = totalCostWithTip / splitBy;
  let totalCostPerPersonRounded = totalCostPerPerson.toFixed(2);

  // Displaying the results of the calculation
  document.getElementById(
    "tipPerPerson"
  ).innerHTML = `£${tipAmountPerPersonRounded}`;
  document.getElementById(
    "totalPerPerson"
  ).innerHTML = `£${totalCostPerPersonRounded}`;

  // Number of people < Zero - error message
  if (splitBy === 0) {
    console.log("Less than Zero");
    let splitByElement = document.getElementById("numberOfPeople-Input");
    splitByElement.style.border = "2px solid hsla(13, 70%, 60%, 1)";
    document.getElementById("zeroErrorMessage").innerHTML = errorMessageForZero;
    document.getElementById("tipPerPerson").innerHTML = "£0.00";
    document.getElementById("totalPerPerson").innerHTML = "£0.00";
  }

  // Changing the colour of the button on selection
  let tenPercentBtn = document.getElementById("10");
  tenPercentBtn.style.backgroundColor = "hsla(172, 67%, 45%, 1)";
  tenPercentBtn.style.color = "hsla(183, 100%, 15%, 1)";
}

// 15% tip
function totalPerPerson15() {
  // Setting up the value input fields
  billInput = document.getElementById("bill_amount").value;
  splitBy = Number(document.getElementById("numberOfPeople").value);

  // Calculating the values to be displayed after input
  let totalBill = billInput;
  let tipAmountPerPerson = (billInput * 0.15) / splitBy;
  let tipAmountPerPersonRounded = tipAmountPerPerson.toFixed(2);
  let totalTip = billInput * 0.15;
  let totalCostWithTip = totalTip + Number(totalBill);
  let totalCostPerPerson = totalCostWithTip / splitBy;
  let totalCostPerPersonRounded = totalCostPerPerson.toFixed(2);

  // Displaying the results of the calculation
  document.getElementById(
    "tipPerPerson"
  ).innerHTML = `£${tipAmountPerPersonRounded}`;
  document.getElementById(
    "totalPerPerson"
  ).innerHTML = `£${totalCostPerPersonRounded}`;

  // Number of people < Zero - error message
  if (splitBy === 0) {
    console.log("Less than Zero");
    let splitByElement = document.getElementById("numberOfPeople-Input");
    splitByElement.style.border = "2px solid hsla(13, 70%, 60%, 1)";
    document.getElementById("zeroErrorMessage").innerHTML = errorMessageForZero;
    document.getElementById("tipPerPerson").innerHTML = "£0.00";
    document.getElementById("totalPerPerson").innerHTML = "£0.00";
  }

  // Changing the colour of the button on selection
  let fifteenPercentBtn = document.getElementById("15");
  fifteenPercentBtn.style.backgroundColor = "hsla(172, 67%, 45%, 1)";
  fifteenPercentBtn.style.color = "hsla(183, 100%, 15%, 1)";
}

// 25% tip
function totalPerPerson25() {
  // Setting up the value input fields
  billInput = document.getElementById("bill_amount").value;
  splitBy = Number(document.getElementById("numberOfPeople").value);

  // Calculating the values to be displayed after input
  let totalBill = billInput;
  let tipAmountPerPerson = (billInput * 0.25) / splitBy;
  let tipAmountPerPersonRounded = tipAmountPerPerson.toFixed(2);
  let totalTip = billInput * 0.25;
  let totalCostWithTip = totalTip + Number(totalBill);
  let totalCostPerPerson = totalCostWithTip / splitBy;
  let totalCostPerPersonRounded = totalCostPerPerson.toFixed(2);

  // Displaying the results of the calculation
  document.getElementById(
    "tipPerPerson"
  ).innerHTML = `£${tipAmountPerPersonRounded}`;
  document.getElementById(
    "totalPerPerson"
  ).innerHTML = `£${totalCostPerPersonRounded}`;

  // Number of people < Zero - error message
  if (splitBy === 0) {
    console.log("Less than Zero");
    let splitByElement = document.getElementById("numberOfPeople-Input");
    splitByElement.style.border = "2px solid hsla(13, 70%, 60%, 1)";
    document.getElementById("zeroErrorMessage").innerHTML = errorMessageForZero;
    document.getElementById("tipPerPerson").innerHTML = "£0.00";
    document.getElementById("totalPerPerson").innerHTML = "£0.00";
  }

  // Changing the colour of the button on selection
  let twentyFivePercentBtn = document.getElementById("25");
  twentyFivePercentBtn.style.backgroundColor = "hsla(172, 67%, 45%, 1)";
  twentyFivePercentBtn.style.color = "hsla(183, 100%, 15%, 1)";
}

// 50% tip
function totalPerPerson50() {
  // Setting up the value input fields
  billInput = document.getElementById("bill_amount").value;
  splitBy = Number(document.getElementById("numberOfPeople").value);

  // Calculating the values to be displayed after input
  let totalBill = billInput;
  let tipAmountPerPerson = (billInput * 0.5) / splitBy;
  let tipAmountPerPersonRounded = tipAmountPerPerson.toFixed(2);
  let totalTip = billInput * 0.5;
  let totalCostWithTip = totalTip + Number(totalBill);
  let totalCostPerPerson = totalCostWithTip / splitBy;
  let totalCostPerPersonRounded = totalCostPerPerson.toFixed(2);

  // Displaying the results of the calculation
  document.getElementById(
    "tipPerPerson"
  ).innerHTML = `£${tipAmountPerPersonRounded}`;
  document.getElementById(
    "totalPerPerson"
  ).innerHTML = `£${totalCostPerPersonRounded}`;

  // Number of people < Zero - error message
  if (splitBy === 0) {
    console.log("Less than Zero");
    let splitByElement = document.getElementById("numberOfPeople-Input");
    splitByElement.style.border = "2px solid hsla(13, 70%, 60%, 1)";
    document.getElementById("zeroErrorMessage").innerHTML = errorMessageForZero;
    document.getElementById("tipPerPerson").innerHTML = "£0.00";
    document.getElementById("totalPerPerson").innerHTML = "£0.00";
  }

  // Changing the colour of the button on selection
  let fiftyPercentBtn = document.getElementById("50");
  fiftyPercentBtn.style.backgroundColor = "hsla(172, 67%, 45%, 1)";
  fiftyPercentBtn.style.color = "hsla(183, 100%, 15%, 1)";
}

// custom tip
function totalPerPersonCustom() {
  // Setting up the value input fields
  billInput = document.getElementById("bill_amount").value;
  splitBy = Number(document.getElementById("numberOfPeople").value);
  customTipInput = document.getElementById("custom_input").value;
  customTipPercentage = customTipInput / 100;

  // Calculating the values to be displayed after input
  let totalBill = billInput;
  let tipAmountPerPerson = (billInput * customTipPercentage) / splitBy;
  let tipAmountPerPersonRounded = tipAmountPerPerson.toFixed(2);
  let totalTip = billInput * customTipPercentage;
  let totalCostWithTip = totalTip + Number(totalBill);
  let totalCostPerPerson = totalCostWithTip / splitBy;
  let totalCostPerPersonRounded = totalCostPerPerson.toFixed(2);

  // Displaying the results of the calculation
  document.getElementById(
    "tipPerPerson"
  ).innerHTML = `£${tipAmountPerPersonRounded}`;
  document.getElementById(
    "totalPerPerson"
  ).innerHTML = `£${totalCostPerPersonRounded}`;

  // Number of people < Zero - error message
  if (splitBy === 0) {
    console.log("Less than Zero");
    let splitByElement = document.getElementById("numberOfPeople-Input");
    splitByElement.style.border = "2px solid hsla(13, 70%, 60%, 1)";
    document.getElementById("zeroErrorMessage").innerHTML = errorMessageForZero;
    document.getElementById("tipPerPerson").innerHTML = "£0.00";
    document.getElementById("totalPerPerson").innerHTML = "£0.00";
  }
}

// Reset Button
function resetButton() {
  billInput = document.getElementById("bill_amount").value = "";
  splitBy = Number((document.getElementById("numberOfPeople").value = ""));
  customTipInput = document.getElementById("custom_input").value = "";

  let splitByElement = document.getElementById("numberOfPeople-Input");
  splitByElement.style.border = "none";
  document.getElementById("zeroErrorMessage").innerHTML = null;
  document.getElementById("tipPerPerson").innerHTML = "£0.00";
  document.getElementById("totalPerPerson").innerHTML = "£0.00";

  billInput = document.getElementById("bill_amount").value;
  splitBy = Number(document.getElementById("numberOfPeople").value);

  // 5% BUTTON
  let fivePercentBtn = document.getElementById("5");
  fivePercentBtn.style.backgroundColor = "";
  fivePercentBtn.style.color = "";

  // 10% BUTTON
  let tenPercentBtn = document.getElementById("10");
  tenPercentBtn.style.backgroundColor = "";
  tenPercentBtn.style.color = "";

  // 15% BUTTON
  let fifteenPercentBtn = document.getElementById("15");
  fifteenPercentBtn.style.backgroundColor = "";
  fifteenPercentBtn.style.color = "";

  // 25% BUTTON
  let twentyFivePercentBtn = document.getElementById("25");
  twentyFivePercentBtn.style.backgroundColor = "";
  twentyFivePercentBtn.style.color = "";

  // 50% BUTTON
  let fiftyPercentBtn = document.getElementById("50");
  fiftyPercentBtn.style.backgroundColor = "";
  fiftyPercentBtn.style.color = "";
}
