$(function () {
    /* 导航变色效果 */
    $(".nav .navmain .navmain-left ul li>a").on({
        "mouseover": function () {
            $(this)
                .addClass("on")
                .parent()
                .siblings()
                .children()
                .removeClass("on");
        },
        "mouseout": function () {
            $(this).removeClass("on");
        }
    })

    // $(".nav .navmain .navmain-left ul li:nth-child(11)>a").on({
    //     "mouseover": function () {
    //         $(this)
    //             .siblings()
    //             .children("img")
    //             .addClass("active")
    //     },
    //     "mouseout": function () {
    //         $(this)
    //             .siblings()
    //             .children("img")
    //             .removeClass("active")
    //     }
    // })
    $(".nav .navmain .navmain-left ul li:nth-child(11)").mouseover(function () {
        $(this)

            .children("p")

            .slideDown()
            .stop()
    })
    $(".nav .navmain .navmain-left ul li:nth-child(11)").mouseout(function () {
        $(this)

            .children("p")
            .stop()
            .slideUp()
    })

    // $(".nav .navmain .navmain-left ul li:nth-child(11)>a").mouseover(function () {
    //     $(this)
    //         .siblings("p")
    //         // .children("img")
    //         .stop()
    //         .slideToggle()
    // })
    /* 导航变色效果 */


    /* logo效果结束 */
    $(".banner .banner-one .banner-one-left .banner-one-main").mouseover(function () {
        $(this).children(".banner-one-mainlogo").addClass("logomove")
    })
    $(".banner .banner-one .banner-one-left .banner-one-main").mouseout(function () {
        $(this).children(".banner-one-mainlogo").removeClass("logomove")
    })
    /* logo效果结束 */

    /* 搜索效果 */
    $(".banner .banner-one .banner-one-right .txt").on("input", function () {
        var text = $(this).val()
        $.ajax({
            url: "https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=7513,32617,1441,32791,32706,32231,7516,22160&req=2&csor=1",
            data: {
                wd: text
            },
            dataType: "jsonp",
            jsonp: "cb"
        })
            .then(function (res) {
                $(".banner .banner-one .banner-one-right ul").empty().addClass("ulmove")
                console.log(res.g)
                $.each(res.g, function (i, v) {
                    $(".banner .banner-one .banner-one-right ul").append("<li>" + v.q + "</li>")
                })
            })
    })
    $(".banner .banner-one .banner-one-right .txt").blur(function () {
        $(".banner .banner-one .banner-one-right ul").empty().removeClass("ulmove");
    })

    /* 搜索效果 */

    /* 中间导航下拉列表开始 */
    // $(".banner .banner-one .banner-one-middle .banner-one-middle-ul .banner-one-middle-li ").mouseover(function () {
    //     $(this).children("div").show().stop();
    // })
    // $(".banner .banner-one .banner-one-middle .banner-one-middle-ul .banner-one-middle-li ").mouseout(function () {
    //     $(this).children("div").stop().hide();
    // })

    $(".banner .banner-one .banner-one-middle .banner-one-middle-ul .banner-one-middle-li ").mouseover(function () {
        $(this).children("div").show().stop();
    })
    $(".banner .banner-one .banner-one-middle .banner-one-middle-ul .banner-one-middle-li ").mouseout(function () {
        $(this).children("div").stop().hide();
    })
    /* 中间导航下拉列表结束 */



    /*左边列表效果  */
    $(".banner .banner-two .banner-two-left .banner-two-left-ul .banner-two-left-ul-li").mouseover(function () {
        $(this).children("div").css({ display: "block" })
    })
    $(".banner .banner-two .banner-two-left .banner-two-left-ul .banner-two-left-ul-li").mouseout(function () {
        $(this).children("div").css({ display: "none" })
    })
    /* 左边列表效果结束 */


    /* 登陆注册开始 */
    $(".nav .navmain .navmain-middle ul li:nth-child(1) a").click(function () {
        location.href = "../pages/login.html"
    })
    $(".nav .navmain .navmain-middle ul li:nth-child(2) a").click(function () {
        location.href = "../pages/register.html"
    })
    /* 登陆注册结束 */


    /* 加入购物车开始 */
    $(".news-two .news-two-right").find(".add").click(function () {
        location.href = "../pages/detil.html"
    })


    //点击查看购物车,进入购物车页面
    $('#cart').click(function () {
        location.href = "../pages/cart.html"
    })


    /* 加入购物车结束 */

})



