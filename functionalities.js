$(document).ready(function () {

    $(".navigation-header ul").hide();
    $(".navigation-header i").hide();

    $(".navigation-header>li:nth-child(1)").hover(
        function () {
            $("#drop-down-menu-Home").show();
            },
        function () {
            $("#drop-down-menu-Home").hide();
        }
    );

    $(".navigation-header>li:nth-child(2)").hover(
        function () {
            $("#drop-down-menu-Sports").show();
            },
        function () {
            $("#drop-down-menu-Sports").hide();
        }
    );

    $(".navigation-header>li:nth-child(3)").hover(
        function () {
            $("#drop-down-menu-Casino").show();
            },
        function () {
            $("#drop-down-menu-Casino").hide();
        }
    );

    $(".navigation-header>li:nth-child(4)").hover(
        function () {
            $("#drop-down-menu-Games").show();
            },
        function () {
            $("#drop-down-menu-Games").hide();
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

    //click flag
    $(".flags img").on("click", function () {

        $(".flags img").css({"border": "2px solid rgb(163, 163, 163)"})
        $(this).css({"border": "2px solid rgb(0, 0, 0)"})
        $(this).unbind("mouseenter mouseleave");

    })

    //hover flag
         $(".flags img").hover(function () {
            $(this).css({"border": "2px solid rgb(0, 0, 0)"})
        },
        function () {

            $(this).css({"border": "2px solid rgb(163, 163, 163)"})

        });

})