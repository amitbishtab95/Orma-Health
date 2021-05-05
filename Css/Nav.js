$("#search-icon").click(function () {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function () {
    // alert("zaid");
    $(".nav").toggleClass("mobile-nav");
    $(".page-wrapper").toggleClass("stick");
    // $(".logo").toggleClass("logoMargin");
    $(this).toggleClass("is-active");
});
