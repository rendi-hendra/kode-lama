let stateNum = 1;
function generate() {
  let min = document.getElementById("min").value;
  let numberRandom = (document.getElementById("numberRandom").innerHTML =
    stateNum);
  // console.log(Number(numberRandom + 1));
  console.log(stateNum);
  return stateNum++;
}
