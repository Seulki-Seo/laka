$(function () {
    $("#menu").click(function () {
        $(".nav").animate({ left: 0 }, 300, "linear");
        $(".overlay").fadeIn({ display: "block" }, 300);
    });
    $(".btn_close").click(function () {
        $(".nav").animate({ left: -325 }, 300, "linear");
        $(".overlay").fadeOut({ display: "none" }, 300);
    });
});