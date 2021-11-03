const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "out" : "safe";
};

console.log(checkSum(50, 51));
console.log(checkSum(50, 50));
