ruleOfTens = () => {
  let initCalc = tbsaInput.value * 10;
  if (weightInput.value > 80) {
    let overage = (weightInput.value - 80) / 10;
    let additionalDemand = overage * 100;
    let totalDemand = initCalc + additionalDemand;
    return (result = totalDemand);
  } else {
    return (result = initCalc);
  }
};
