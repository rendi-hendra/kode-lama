function apiMovie() {
  $("#judul").html("");
  $.ajax({
    url: "https://api.themoviedb.org/3/search/movie",
    type: "GET",
    dataType: "json",
    data: {
      api_key: "7f3a81372babefe58e7166f441ce75f1",
      language: "id",
      page: $("#page").val(),
      query: $("#pencarian").val(),
    },
    success: function (result) {
      if (result.total_results != 0) {
        let page = result.page;
        let film = result.results;
        let foto = "https://image.tmdb.org/t/p/original";
        $("#notfound").html("");
        $("#pagee").html(`Page: ${page}`);
        $.each(film, function (i, data) {
          if (data.poster_path != null) {
            $("#judul").append(`<div class="col">
                                            <div class="card h-100">
                                                <img src="${foto}${data.poster_path}" class="card-img-top" alt="...">
                                                <div class="card-body">
                                                    <h5 class="card-title">${data.title}</h5>
                                                </div>
                                            </div>
                                        </div>`);
          }
        });

        $("#pencarian").val("");
        $("#page").val();
      } else {
        $("#pagee").html("");
        $("#notfound").html(
          '<h1 class="text-center text-dark">Movie Not Found</h1>'
        );
        $("#pencarian").val("");
        $("#page").val(1);
      }
    },
  });
}

$("#pencarian").on("keyup", function (e) {
  if (e.keyCode === 13) {
    if ($("#pencarian").val() != "") {
      apiMovie();
    }
  }
});
