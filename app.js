var executeMe = function () {
    let menuArrayIDs = ["home", "skills", "project", "experience", "academics", "blog"];
    let menuArray = ["home", "skills-row", "project-row", "experience-row", "academics-row", "blog-row"];
    let finishedMapping = getMappedHeights(menuArray);
    $(window).scroll(function () {
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        var rightElement = getRightDivision(finishedMapping, viewportBottom)
        deActivateWrongButtons(menuArrayIDs[rightElement.index], menuArrayIDs);
        if (menuArrayIDs[rightElement.index] !== "home") {
            manageRestOfCSS(menuArrayIDs[rightElement.index])
        } else {
            manageHomeCSS();
        }

    })
};
var getBottomHeight = function (id) {
    var firstRowRef = $("#" + id);
    var topOfRow = firstRowRef.offset().top;
    var heightOfFirstElem = firstRowRef.height();
    var bottomOfElem = topOfRow + heightOfFirstElem;
    return bottomOfElem;
}

var manageHomeCSS = function () {
    var homeClassRef = $("#home-button");
    var navBar = $("#navigation-bar");
    homeClassRef.addClass('active');
    navBar.removeClass("navbar-dark");
    navBar.removeClass("bg-dark");
    navBar.addClass("bg-light");
    navBar.addClass("navbar-light");
}

var deActivateWrongButtons = function (exceptThis, menuArrayIDs) {
    menuArrayIDs.forEach(function (value) {
        if (value !== exceptThis) {
            $("#" + value + "-button").removeClass("active");
        }
    })
}

var manageRestOfCSS = function (id) {
    var projectClassRef = $("#" + id + "-button");
    var navBar = $("#navigation-bar");
    projectClassRef.addClass('active');
    navBar.addClass("navbar-dark");
    navBar.addClass("bg-dark");
    navBar.addClass("transition-duration", "5s");
    navBar.removeClass("bg-light");
    navBar.removeClass("navbar-light");
}

var getRightDivision = function (ids, bottomindex) {
    for (let i = 0; i < ids.length; i++) {
        if (ids[i] > bottomindex - 200) { return { index: i, measure: ids[i] }; }
    }
    return { index: ids.length - 1, measure: bottomindex }
}
var getMappedHeights = function (ids) {
    let heightArray = new Array();
    ids.forEach(element => {
        heightArray.push(getBottomHeight(element))
    });
    return heightArray;
}
$(document).on('click', 'a[href^="#"]', function (e) {
    var id = $(this).attr('href');
    if (id === "#carouselExampleIndicators")
        return;
    var hightOfNav = $("#navigation-bar").height();
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().top - hightOfNav - 20;
    $('body, html').animate({ scrollTop: pos });
});
$(document).ready(function () {
    executeMe();
});
var goToMyBlog = function () {
    location.href = "https://techvoker.wordpress.com";
}