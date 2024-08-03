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

const arabToRoman = (num, ret = "") => {
  for (digit in romanDigits) {
    if(num >= romanDigits[digit]) {
      ret += digit;
      num - romanDigits[digit];
      return arabToRoman(num - romanDigits[digit], ret)
    };
  };
  return ret
};

const romanToArab = str => {
  str = str.split("");
  let ret = 0;
  for (i = 0; i < str.length; i++) {
    if(romanDigits[str[i]] < romanDigits[str[i + 1]]) {
      ret -= romanDigits[str[i]]
    } else {
      ret += romanDigits[str[i]]
    }
  }
  return ret
};

function calculator(string) {
  if(string.split(" ").length !== 3) throw "";
  let [a, op, b] = string.split(" ");
  let ret = "";
  let isRoman = false;
  if(romanDigits[a[0]]) isRoman = true;
  if(isRoman) {
    a = romanToArab(a)
    b = romanToArab(b)
  }

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
      throw "";
  }
  if(isRoman) return arabToRoman(ret)
  return ret;
}
console.log(calculator(""))
module.exports = calculator; // Не трогайте эту строчку