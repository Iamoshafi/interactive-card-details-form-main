"use strict";
const cardName = document.querySelector(".card-name");
const cardNumber = document.querySelector(".card-number");
const expiryDate = document.querySelector(".expiry-date");
const cardCvv = document.querySelector(".card-cvv");

const holderName = document.getElementById("holder-name");
const holderNumber = document.getElementById("holder-number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvv = document.getElementById("cvv");

const button = document.querySelector(".button");
const button2 = document.querySelector(".button2");
const form = document.querySelector(".form");
const loginSuccess = document.querySelector(".login-success");

// Errors
const nameError = document.querySelector(".name-error");
const numberError = document.querySelector(".number-error");
const dateError = document.querySelector(".date-error");
const cvvError = document.querySelector(".cvv-error");
let numbers = /^[0-9]+$/;
let letters = /^[A-Za-z]+$/;

// Input calls
holderName.addEventListener("input", function (e) {
  e.preventDefault();
  validateformName();
});

holderNumber.addEventListener("input", function (e) {
  e.preventDefault();
  validateformNumber();
});

month.addEventListener("input", function (e) {
  e.preventDefault();
  validateformMonth();
});

year.addEventListener("input", function (e) {
  e.preventDefault();
  validateformMonth();
});

cvv.addEventListener("input", function (e) {
  e.preventDefault();
  validateformCvv();
});


// Button call
button.addEventListener("click", function (e) {
  e.preventDefault();
  // Login functions calls
  validateformName();
  validateformNumber();
  validateformMonth();
  validateformCvv();
  buttonLogin();
});


// Login functions
function validateformName() {
  if (holderName.value === "") {
    holderName.style.borderColor = "var(--red-input-errors)";
    nameError.textContent = "Card name is required";
  } else {
    holderName.style.borderColor = "var(--input-active-border)";
    nameError.style.visibility = "hidden";
    cardName.textContent = holderName.value;
  }
}

function validateformNumber() {
  if (holderNumber.value === "") {
    holderNumber.style.borderColor = "var(--red-input-errors)";
    numberError.textContent = "Can`t be blank";
  } else if (!holderNumber.value.match(numbers)) {
    holderNumber.style.borderColor = "var(--red-input-errors)";
    numberError.textContent = "Wrong format, numbers only";
    numberError.style.visibility = "visible";
    cardNumber.textContent = holderNumber.value;
  } else {
    holderNumber.style.borderColor = "var(--input-active-border)";
    cardNumber.textContent = holderNumber.value;
    numberError.style.visibility = "hidden";
  }
}

function validateformMonth() {
  if (month.value === "") {
    month.style.borderColor = "var(--red-input-errors)";
    dateError.textContent = "Can`t be blank";
  } else if (year.value === "") {
    year.style.borderColor = "var(--red-input-errors)";
    dateError.textContent = "Can`t be blank";
    dateError.style.visibility = "visible";
  } else if (!month.value.match(numbers)) {
    month.style.borderColor = "var(--red-input-errors)";
    dateError.textContent = "Wrong format, numbers only";
    dateError.style.visibility = "visible";
  } else if (!year.value.match(numbers)) {
    year.style.borderColor = "var(--red-input-errors)";
    dateError.textContent = "Wrong format, numbers only";
    dateError.style.visibility = "visible";
  } else {
    month.style.borderColor = "var(--input-active-border)";
    year.style.borderColor = "var(--input-active-border)";
    expiryDate.textContent = `${month.value}/${year.value}`;
    dateError.style.visibility = "hidden";
  }
}

function validateformCvv() {
  if (cvv.value === "") {
    cvv.style.borderColor = "var(--red-input-errors)";
    cvvError.textContent = "Can`t be blank";
  } else if (!cvv.value.match(numbers)) {
    cvv.style.borderColor = "var(--red-input-errors)";
    cvvError.textContent = "Wrong format, numbers only";
    cvvError.style.visibility = "visible";
  } else {
    cvv.style.borderColor = "var(--input-active-border)";
    cvvError.style.visibility = "hidden";
    cardCvv.textContent = cvv.value;
    cvvError.style.visibility = "hidden";
  }
}


//Button function
function buttonLogin() {
  if (holderName.value === "") {
    holderName.style.borderColor = "var(--red-input-errors)";
    nameError.textContent = "Card name is required";
  } else if (holderNumber.value === "" || !holderNumber.value.match(numbers)) {
    if (holderNumber.value === "") {
      holderNumber.style.borderColor = "var(--red-input-errors)";
      numberError.textContent = "Can`t be blank";
    } else if (!holderNumber.value.match(numbers)) {
      holderNumber.style.borderColor = "var(--red-input-errors)";
      numberError.textContent = "Wrong format, numbers only";
      numberError.style.visibility = "visible";
      cardNumber.textContent = holderNumber.value;
    } else {
      holderNumber.style.borderColor = "var(--input-active-border)";
      cardNumber.textContent = holderNumber.value;
    }
  } else if (month.value === "" || year.value === "") {
    if (month.value === "") {
      month.style.borderColor = "var(--red-input-errors)";
      dateError.textContent = "Can`t be blank";
    } else if (year.value === "") {
      year.style.borderColor = "var(--red-input-errors)";
      dateError.textContent = "Can`t be blank";
    } else {
      month.style.borderColor = "var(--input-active-border)";
      year.style.borderColor = "var(--input-active-border)";
      expiryDate.textContent = `${month.value}/${year.value}`;
      dateError.style.visibility = "hidden";
    }
  } else if (cvv.value === "" || !cvv.value.match(numbers)) {
    if (cvv.value === "") {
      cvv.style.borderColor = "var(--red-input-errors)";
      cvvError.textContent = "Can`t be blank";
    } else if (!cvv.value.match(numbers)) {
      cvv.style.borderColor = "var(--red-input-errors)";
      cvvError.textContent = "Wrong format, numbers only";
      cvvError.style.visibility = "visible";
    } else {
      cvv.style.borderColor = "var(--input-active-border)";
      cvvError.style.visibility = "hidden";
      cardCvv.textContent = cvv.value;
      cvvError.style.visibility = "hidden";
    }
  } else {
    loginSuccess.classList.toggle("hidden");
    form.classList.toggle("hidden");
  }
}
