let weightInput = document.querySelector('#weightInput');
let tbsaInput = document.querySelector('#tbsaInput');
let calcSubmit = document.querySelector('#calcSubmit');
let weightPrint = document.querySelector('#weightPrint');
let tbsaPrint = document.querySelector('#tbsaPrint');
let initialDemand = document.querySelector('#initialDemand');
let rateHour = document.querySelector('#rateHour');
let tenMin = document.querySelector('#tenMin');
let fifteenMin = document.querySelector('#fifteenMin');
let twentyMin = document.querySelector('#twentyMin');
let sixtyMin = document.querySelector('#sixtyMin');
let tenSec = document.querySelector('#tenSec');
let fifteeSec = document.querySelector('#fifteenSec');
let twentySec = document.querySelector('#twentySec');
let sixtySec = document.querySelector('#sixtySec');
let results = [
  weightPrint,
  tbsaPrint,
  initialDemand,
  rateHour,
  tenMin,
  fifteenMin,
  twentyMin,
  sixtyMin,
  tenSec,
  fifteeSec,
  twentySec,
  sixtySec,
];

weightInput.addEventListener('change', () => {
  weightPrint.textContent = weightInput.value;
});

tbsaInput.addEventListener('change', () => {
  tbsaPrint.textContent = Math.round(tbsaInput.value);
});

calcSubmit.addEventListener('click', () => {
  ruleOfTens();
  let ratePerHour = Math.round(result / 24);
  let tenGttsMin = Math.round((result * 10) / 60);
  let fifteenGttsMin = Math.round((result * 15) / 60);
  let twentyGttsMin = Math.round((result * 20) / 60);
  let sixtyGttsMin = Math.round((result * 60) / 60);
  let tenGttsSec = Math.round(tenGttsMin / 60);
  let fifteenGttsSec = Math.round(fifteenGttsMin / 60);
  let twentyGttsSec = Math.round(twentyGttsMin / 60);
  let sixtyGttsSec = Math.round(sixtyGttsMin / 60);
  initialDemand.textContent = result;
  rateHour.textContent = ratePerHour;
  tenMin.textContent = tenGttsMin;
  fifteenMin.textContent = fifteenGttsMin;
  twentyMin.textContent = twentyGttsMin;
  sixtyMin.textContent = sixtyGttsMin;
  tenSec.textContent = tenGttsSec;
  fifteenSec.textContent = fifteenGttsSec;
  twentySec.textContent = twentyGttsSec;
  sixtySec.textContent = sixtyGttsSec;
});

calcClear.addEventListener('click', () => {
  results.forEach((result) => {
    result.textContent = '0';
  });
  weightInput.value = '';
  tbsaInput.value = '';
});
