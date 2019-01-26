$(document).ready(function () {

    $(".navigation-header ul").hide();
    $(".navigation-header i").hide();

    $(".navigation-header>li:last-of-type").hover(
        function () {
            $(".navigation-header ul:last-of-type").show();
            $(".navigation-header i:last-of-type").show();
        },
        function () {
            $(".navigation-header ul:last-of-type").hide();
            $(".navigation-header i:last-of-type").hide();
        }
    );



    $(".info li:odd").hide();

    let secondLiInfo = $(".info li:nth-child(2)");
    let fourthLiInfo = $(".info li:nth-child(4)");

    $(".info li:nth-child(1)").on("click", showInfoFirst);

    function showInfoFirst() {

        secondLiInfo.show();
        fourthLiInfo.hide();
    }

    $(".info li:nth-child(3)").on("click", showInfoSecond);

    function showInfoSecond() {

        fourthLiInfo.show();
        secondLiInfo.hide();
    }

    secondLiInfo.on("click", hideInfoFirst);

    function hideInfoFirst() {
        secondLiInfo.hide();
    }

    fourthLiInfo.on("click", hideInfoSecond);

    function hideInfoSecond() {
        fourthLiInfo.hide();
    }





})