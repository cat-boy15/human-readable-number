module.exports = function toReadable (a) {
    let first = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let second = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    let third = [" ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    
      if (a <= 9) return first[a]
      else if (a > 9 && a < 20) return second[Math.round(a%10)]
      else if (a >= 20 && a < 100 && a % 10 == 0) return third[Math.floor((a/10)%10)-1]
      else if (a >= 20 && a < 100) return third[Math.floor((a/10)%10)-1] + " " + first[Math.round(a%10)]
      else if (a >= 100 && a < 1000 && (a%100)>=20 && a%10 == 0) {return first[Math.floor(a/100)] + " hundred " + third[Math.floor((a/10)%10)-1]}
      else if (a >= 100 && a < 1000 && (a%100)>=20) {return first[Math.floor(a/100)] + " hundred " + third[Math.floor((a/10)%10)-1] + " " + first[Math.round(a%10)]}
      else if (a >= 100 && a < 1000 && (a%100)<20 && (a%100)>=10) {return first[Math.floor(a/100)] + " hundred " + second[Math.round(a%10)]}
      else if (a >= 100 && a < 1000 && Number.isInteger(a/100)) {return first[Math.floor(a/100)] + " hundred" }
      else if (a >= 100 && a < 1000 && (a%100)<10) {return first[Math.floor(a/100)] + " hundred " + first[Math.round(a%10)]}
      else {return "undefind"}
    };