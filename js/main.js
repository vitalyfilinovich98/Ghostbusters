$(document).ready(function () {
    const mMenuBtn = $(".m-menu-button");
    const mMenu = $(".m-menu");
    const tab = $(".tab");
    mMenuBtn.on('click', function () {
        mMenu.toggleClass('active');
        $('body').toggleClass("no-scroll");
    });

    tab.on('click', function () {
        tab.removeClass("active");
        $(this).toggleClass("active");
        let activeTabContetnt = $(this).attr("data-target");
        $(".tabs-content").removeClass("visible");
        $(activeTabContetnt).toggleClass("visible");
    });





    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 25,
        loop: true,
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
                slideoffsetAfter: 50,
                navigation: {
                    nextEl: ".button-next",
                }
            },
        }
    });

});