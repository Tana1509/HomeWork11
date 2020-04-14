$(document).ready(function () {
    // nav
    let menuBtn = $(".header__burger");
    console.log(menuBtn);
    menuBtn.on("click", function () {
        let navigation = $(".header__nav__list");
        // console.log(navigation);
        navigation.toggleClass("active");
    });

    
});
