function trending(list, pagelist) {
  $("#trending").html("");

  if (list != "tv") {
    $.ajax({
      type: "get",
      url: `https://api.themoviedb.org/3/trending/${list}/day`,
      data: {
        api_key: "7f3a81372babefe58e7166f441ce75f1",
        language: "id-ID",
        page: pagelist,
      },
      dataType: "json",
      success: function (result) {
        let trending = result.results;
        let foto = "https://image.tmdb.org/t/p/original";
        console.log(trending[0].original_title);
        $.each(trending, function (i, data) {
          $("#trending").append(`<div class="col">
                                                <div class="card text-bg-dark h-100">
                                                    <img src="${foto}${data.poster_path}" class="card-img-top" alt="...">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${data.original_title}</h5>
                                                        <a class="coba text-decoration-none mDetail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.id}">Detail</a>
                                                    </div>
                                                </div>
                                            </div>`);
        });

        $("#page").removeClass("d-none");
      },
    });
  } else {
    $.ajax({
      type: "get",
      url: `https://api.themoviedb.org/3/trending/${list}/day`,
      data: {
        api_key: "7f3a81372babefe58e7166f441ce75f1",
        language: "id-ID",
        page: pagelist,
      },
      dataType: "json",
      success: function (result) {
        let trending = result.results;
        let foto = "https://image.tmdb.org/t/p/original";
        console.log(trending[0].original_name);
        $.each(trending, function (i, data) {
          $("#trending").append(`<div class="col">
                                                <div class="card text-bg-dark h-100">
                                                    <img src="${foto}${data.poster_path}" class="card-img-top" alt="...">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${data.original_name}</h5>
                                                        <a class="coba text-decoration-none tDetail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.id}">Detail</a>
                                                    </div>
                                                </div>
                                            </div>`);
        });

        $("#page").removeClass("d-none");
        pagelist == undefined
          ? $(`#page1`).addClass("pageOn")
          : $("#page1").removeClass("pageOn");

        const arr = [1, 2, 3, 4, 5];

        for (let i = 1; i < arr.length + 1; i++) {
          if (pagelist != i) {
            $(`#page${i}`).removeClass("pageOn");
          }
        }

        if (pagelist != undefined) {
          arr.push(pagelist);
          $(`#page${pagelist}`).addClass("pageOn");
        }
      },
    });
  }
}

// Detail Api
function detailApi(listDetail) {
  $("#trending").html("");

  if (listDetail != "tv") {
    $("#trending").on("click", ".mDetail", function () {
      let idMovie = $(this).data("id");

      $.ajax({
        type: "GET",
        url: `https://api.themoviedb.org/3/${listDetail}/${idMovie}`,
        data: {
          api_key: "7f3a81372babefe58e7166f441ce75f1",
          language: "en-Us",
        },
        dataType: "json",
        success: function (movie) {
          console.log(movie.title);
          let reversee = movie.release_date;

          if (movie.status === "Released") {
            $("#mBody").html(`<div>Judul: ${movie.title}</div>
                                      <div>Genre: ${movie.genres[0].name}</div>
                                      <div>Rilis: ${reversee.slice(
                                        8,
                                        10
                                      )}-${reversee.slice(
              5,
              7
            )}-${reversee.slice(0, 4)}</div>
                                      <div>Sinopsis: ${movie.overview}</div>`);
          }
        },
      });
    });
  } else {
    $("#trending").on("click", ".tDetail", function () {
      let idMovie = $(this).data("id");

      $.ajax({
        type: "GET",
        url: `https://api.themoviedb.org/3/${listDetail}/${idMovie}`,
        data: {
          api_key: "7f3a81372babefe58e7166f441ce75f1",
          language: "en-Us",
        },
        dataType: "json",
        success: function (movie) {
          // console.log(movie);
          console.log(movie.name);
          let reversee = movie.last_air_date;
          $("#mBody").html(`<div>Judul: ${movie.name}</div>
                                      <div>Genre: ${movie.genres[0].name}</div>
                                      <div>Rilis: ${reversee.slice(
                                        8,
                                        10
                                      )}-${reversee.slice(
            5,
            7
          )}-${reversee.slice(0, 4)}</div>
                                      <div>Sinopsis: ${movie.overview}</div>`);
        },
      });
    });
  }
}

$("#myid li").click(function () {
  let list = $(this).attr("value");
  let listDetail = $(this).attr("value");
  trending(list);
  detailApi(listDetail);
  $("#pagelist li").click(function () {
    let pagelist = $(this).attr("value");
    trending(list, pagelist);
  });
});
