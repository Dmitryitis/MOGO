$(function () {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOfset = $(window).scrollTop();

    checkScroll(scrollOfset);

    $(window).on("scroll", function () {
        scrollOfset = $(this).scrollTop();
        checkScroll(scrollOfset);
    });


    function checkScroll(scrollOfset) {
        if (scrollOfset+50 >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /*Smooth scroll*/
    $("[data-scroll]").on("click", function (event) {

        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOfset = $(blockId).offset().top;

        $('#nav a').removeClass("active");
        $this.addClass("active");
        $('#nav').removeClass("active");
        $('#nav_toggle').removeClass("active");


        $("html, body").animate({
            scrollTop: blockOfset -50
        }, 500);
    });

    /*Menu nav toggle*/
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();


        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });


    /*Collapse*/
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');


        $this.toggleClass("active");

    });



    /*Slider*/
    $("[data-slider]").slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1

    });



});
