let hours = prompt("enter your hours worked");
let wage = prompt("enter your wage");

if (hours >= 40) {
  regpay = wage * hours;
  overtime = wage * 0.5 * (hours - 40);
  let pay = regpay + overtime;
  console.log(pay);
} else {
  regpay = wage * hours;
  overtime = 0;
  let pay = regpay + overtime;
  console.log(pay);
}

let weeks = 1000000 / pay;
console.log(Math.ceil(weeks));
