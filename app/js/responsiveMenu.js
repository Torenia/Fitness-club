//Responsive Menu

function responsiveMenu() {
    var menu = document.getElementById("menu");
    if (menu.className === "menu__navigation") {
        menu.className += " menu__responsive";
    } else {
        menu.className = "menu__navigation";
    }
}


//Add classes to the mobile menu

$("#first-sub-menu").click(function () {
    $("#second-menu").removeClass("sub-menu__visible-menu");
    $("#first-menu").toggleClass("sub-menu__visible-menu");
});

$("#second-sub-menu").click(function () {
    $("#first-menu").removeClass("sub-menu__visible-menu");
    $("#second-menu").toggleClass("sub-menu__visible-menu");
});

$("#icon").click(function () {
    $("#first-menu").removeClass("sub-menu__visible-menu");
    $("#second-menu").removeClass("sub-menu__visible-menu");
});
