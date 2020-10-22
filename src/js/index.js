window.onload = function () {

    /* 轮播图开始 */
    var mySwiper = new Swiper(' .banner-two .swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        effect: "fade",

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
    /* 轮播图结束 */



    /* 倒计时开始 */

    var time1 = document.getElementById("time1");
    var time2 = document.getElementById("time2");
    var time3 = document.getElementById("time3");
    // console.log(time1);
    // console.log(time2);
    // console.log(time3)
    function diffence() {
        var t1 = new Date();
        var t2 = new Date("2020-10-21")
        var diff = parseInt(Math.abs(t1 - t2) / 1000);
        var date = Math.floor(diff / (24 * 60 * 60));
        var afterDate = diff - date * 24 * 60 * 60;
        var hour = Math.floor(afterDate / (60 * 60));
        hour = hour < 10 ? "0" + hour : hour;
        var afterHour = afterDate - hour * 3600;
        var minute = parseInt(afterHour / 60);
        minute = minute < 10 ? "0" + minute : minute;
        var second = afterHour - minute * 60;
        second = second < 10 ? "0" + second : second;

        time1.innerHTML = hour;
        time2.innerHTML = minute;
        time3.innerHTML = second;
    }
    setInterval(diffence, 1000)

    /* 倒计时结束 */



    /* 轮播图2开始 */
    var mySwiper = new Swiper('.miaosa .miaosa-two .miaosa-two-right .swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // effect: "cube",
        slidesPerView: 4,
        spaceBetween: 14,


        // slidesPerView: 3,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            // delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
    /* 轮播图2结束 */
}

