function mean(...value) {
  const lengthArr = value.length;
  const sum = value.reduce((e, i) => e + i, 0);
  console.log(sum / lengthArr);
}

mean(7, 6, 4, 5, 3, 8, 9);

const meanSum = document.getElementById("mean");
console.log(meanSum);
