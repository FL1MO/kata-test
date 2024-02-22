const romanDigits = {
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
const arabToRoman = num => {
  let ret = ""
  for(;+num > 0;) {
    for(let i in romanDigits) {
      if(+num >= romanDigits[i]) {
        ret += i;
        num -= romanDigits[i];
      }
    }
  }
  return ret;
}

const romanToArab = num => {
  
}

function calculator(string) {
  let [a, op, b] = string.split(" ");
  let ret = "";
  let isRoman = false;


  if(romanDigits[a[0]]) isRoman = true;

  switch (op) {
    case "+":
      ret = `${Math.trunc(+a + +b)}`;
      break;
    case "-":
      ret = `${Math.trunc(+a - +b)}`;
      break;
    case "*":
      ret = `${Math.trunc(+a * +b)}`;
      break;
    case "/":
      ret = `${Math.trunc(+a / +b)}`;
      break;
    default:
      ret = "";
  }
  return ret;
}

console.log(arabToRoman("78"))
console.log(calculator("3 * 2"))
// console.log(calculator("I + I"))
// console.log(calculator(""))
// console.log(calculator(""))
console.log()
module.exports = calculator; // Не трогайте эту строчку