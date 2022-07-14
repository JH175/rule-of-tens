let weightInput = document.querySelector('#weightInput');
let tbsaInput = document.querySelector('#tbsaInput');
let calcSubmit = document.querySelector('#calcSubmit');
let weightPrint = document.querySelector('#weightPrint');
let tbsaPrint = document.querySelector('#tbsaPrint');
let initialDemand = document.querySelector('#initialDemand');
let rateHour = document.querySelector('#rateHour');

weightInput.addEventListener('change', () => {
  weightPrint.textContent = weightInput.value;
});

tbsaInput.addEventListener('change', () => {
  tbsaPrint.textContent = tbsaInput.value;
});

calcSubmit.addEventListener('click', () => {
  ruleOfTens();
  let ratePerHour = Math.round(result / 24);
  initialDemand.textContent = result;
  rateHour.textContent = ratePerHour;
});

calcClear.addEventListener('click', () => {
  initialDemand.textContent = '';
  weightInput.value = '';
  tbsaInput.value = '';
});
