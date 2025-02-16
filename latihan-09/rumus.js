$("#total").click(function () {
  const vKecepatan = $.isNumeric($("#kecepatan").val());
  const vWaktu = $.isNumeric($("#waktu").val());
  //   console.log(kecepatan == false ? "Harap Masukan Angka" : "");
  if (vKecepatan == true && vWaktu == true) {
    const kecepatan = $("#kecepatan").val();
    const waktu = $("#waktu").val();
    $("#rumus").html(`
    <h3 class="mt-5">Rumus</h3>
    <div class="mt-4">
    <h4>s = v x t</h4>
    <h4>s = ${kecepatan} x ${waktu}</h4>
    <h4>s = ${kecepatan * waktu} km</h4>
    </div>
    `);
  }
});
