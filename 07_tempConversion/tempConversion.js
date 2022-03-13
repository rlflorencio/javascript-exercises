const ftoc = function(ftemp) {
  const temp = parseFloat(ftemp);
  let result = (temp - 32) * (5/9);
  let roundResult = Math.round(result * 10) / 10;
  
  return roundResult
};

const ctof = function(ctemp) {
  const temp = parseFloat(ctemp);
  let result = (temp * (9/5)) + 32;
  let roundResult = Math.round(result * 10) / 10;
  
  return roundResult
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
