$(document).ready(function () {


    $(".filter a").on("click", function (e) {
        e.preventDefault();
        var sort = $(this).attr("href");
        $grid.isotope({ filter: sort });
    })
});

$(document).ready(function () {
    var token = "IGQVJWakFXNFUtTVMyNHQwYVdlS05hb0NwbnpmMk5BMGY2TjhPckNQRFpCajFJc2oxQjM4MVRaRTUtZAHhWTVhQNU8tWXhxYzFZAa0czaktrY1BBRzFBQUYxNkUzUjJaZAnEySUo0dDRR";

    $.ajax({
        url: "https://graph.instagram.com/me/media?access_token=" + token + "&fields=id,caption,media_type,media_url,thumbnail_url,permalink",
        dataType: "jsonp"
    }).done(function (data) {
        console.log(data);
        window.data = data;
        var list = "";

        $.each(data.data, function (i, v) {
            list += "<div class='item'>";
            list += "<div class='instagram-box'>";
            list += "<a href='" + v.permalink + "' target='_blank' style='background:url(" + v.media_url + ") no-repeat center center;''>";
            list += "<p>" + v.caption + "</p>";
            list += "</a>";
            list += "</div>";
            list += "</div>";
        });

        var $grid = $(".container").isotope({
            itemSelector: ".item",
            conlumnwidth: ".item",
            percentPosition: true,
            transitionDuration: "0.5s"
        });

        $('.container').append(list);
    }).fail(function () {
        console.log("fail");
    });
});