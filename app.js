var executeMe = function () {
    $(window).scroll(function () {
        var firstRowRef = $("#home");
        var topOfRow = firstRowRef.offset().top;
        var heightOfFirstElem = firstRowRef.height();
        var bottomOfElem = topOfRow + heightOfFirstElem;

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        var projectClassRef = $("#project-button");
        var homeClassRef = $("#home-button");
        var navBar = $("#navigation-bar");
        if (viewportBottom > bottomOfElem + 150) {
            projectClassRef.addClass('active');
            homeClassRef.removeClass('active');
            navBar.addClass("navbar-dark");
            navBar.addClass("bg-dark");
            navBar.addClass("transition-duration", "5s");
            navBar.removeClass("bg-light");
            navBar.removeClass("navbar-light");

        } else {
            projectClassRef.removeClass('active');
            homeClassRef.addClass('active');
            navBar.removeClass("navbar-dark");
            navBar.removeClass("bg-dark");
            navBar.addClass("bg-light");
            navBar.addClass("navbar-light");
        }

    })
};
$(document).on('click', 'a[href^="#"]', function (e) {
    // target element id
    var id = $(this).attr('href');
    var hightOfNav = $("#navigation-bar").height();
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top - hightOfNav;

    // animated top scrolling
    $('body, html').animate({ scrollTop: pos });
});
$(document).ready(function () {
    $("#project-2").hide();
});
executeMe();