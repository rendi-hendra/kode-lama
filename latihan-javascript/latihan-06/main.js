let arr = [];

let btn = $("button").click(function () {
  $("#mulai").remove();
  $("#hasil").remove();
  var button = $(this).val();
  // console.log(button)
  $("#value").append(`<a class"" id="btn">${button}</a`);
  // console.log(button)
  arr.push(button);
  // console.log(arr)
  return arr;
});

$("#jumlah").click(function () {
  arr.pop();
  let jumlah = arr.join("");
  if (jumlah >= 1) {
    console.log("sasa");
  }
  $("#value").html("");
  // console.log(eval(jumlah));
  if (eval(jumlah) == undefined) {
    $("#value").html("");
    $("#value").append(`<a class="animate-ping duration-150" id="mulai">_</a>`);
  } else {
    console.log(eval(jumlah) == Infinity);
    $("#value").append(`<a class"text-red-500" id="hasil"> ${eval(jumlah)}</a`);
    $("#histori").append(`<p class"" id="his"> ${jumlah} = ${eval(jumlah)}</p`);
  }
  arr = [];
  return arr;
});

$("#clear").click(function () {
  $("#value").html("");
  $("#value").append(`<a class="animate-ping duration-150" id="mulai">_</a>`);
  arr = [];
  return arr;
});
