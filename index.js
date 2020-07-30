$(document).ready(function () {
    // nav
    let menuBtn = $(".header__burger");
    console.log(menuBtn);
    menuBtn.on("click", function () {
        let navigation = $(".header__nav__list");
        // console.log(navigation);
        navigation.toggleClass("active");
    });

    // кнопка "наверх"
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $(".to__top").fadeIn();
        } else {
            $(".to__top").fadeOut();
        }
    });
    $(".to__top").click(function () {
        $("body,html").animate(
            {
                scrollTop: 0,
            },
            500
        );
        return false;
    });
});
