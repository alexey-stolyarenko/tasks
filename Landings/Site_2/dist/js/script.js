
$(document).ready(function (){
    $('.header__burger').click(function (e){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});
$(document).ready(function () {
    function createSliderBtn() {
        for (let i = 0; i < $('.slide_img').length; i++) {
            $('.slider_btn_block').append($('<div class="slider_btn_block_btn">'))
        }
    }

    function showSlide() {
        $('.slider_btn_block_btn').each(function (i) {
            i === 0 ? $(this).addClass('active_btn') : $(this).css('marginLeft', 7 + 'px')
            $(this).click(function () {
                $('.slider_btn_block_btn').removeClass('active_btn');
                $(this).addClass('active_btn')
                $('.slide_img').removeClass('active')
                $('.slide_img')[i].classList.add('active')
            })
        })
    }

    createSliderBtn()
    showSlide()
})

function swipeTopFunk(swipeSection) {
    let touchsurface = swipeSection,
        startX,
        startY,
        dist,
        threshold = 100, // минимальное расстояние для swipe
        allowedTime = 500, // максимальное время прохождения установленного расстояния
        elapsedTime,
        startTime

    function handleswipe(isrightswipe,) {
        if (isrightswipe) {
            swipeTopSlider.leftSwipe()
        } else {
            swipeTopSlider.rightSwipe()
        }
    }

    touchsurface.addEventListener('touchstart', function (e) {
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime()
    }, false)

    touchsurface.addEventListener('touchmove', function (e) {
    }, false)

    touchsurface.addEventListener('touchend', function (e) {
        let touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startX
        elapsedTime = new Date().getTime() - startTime
        let swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleswipe(swiperightBol)
    }, false)
}

class Swipe {
    constructor(slideBtn, slideImg) {
        this.num = 0;
        this.slideBtn = slideBtn;
        this.slideImg = slideImg
    }

    checkIndex() {
        for (let i = 0; i < this.slideBtn.length; i++) {
            if (this.slideBtn[i].classList.contains('active_btn')) {
                this.num = i;
                return this.num;
            }
        }
    }

    rightSwipe() {
        this.index = this.checkIndex();
        this.slideBtn[this.index].classList.remove('active_btn')
        this.slideImg[this.index].classList.remove('active')
        if (this.num === (this.slideBtn.length - 1)) {
            this.index = 0;
            this.slideBtn[this.index].classList.add('active_btn')
            this.slideImg[this.index].classList.add('active')
        } else {
            this.slideBtn[this.index + 1].classList.add('active_btn')
            this.slideImg[this.index + 1].classList.add('active')
        }
    }

    leftSwipe() {
        this.index = this.checkIndex();
        this.slideBtn[this.index].classList.remove('active_btn')
        this.slideImg[this.index].classList.remove('active')
        if (this.num === 0) {
            this.index = (this.slideBtn.length - 1);
            this.slideBtn[this.index].classList.add('active_btn')
            this.slideImg[this.index].classList.add('active')
        } else {
            this.slideBtn[this.index - 1].classList.add('active_btn')
            this.slideImg[this.index - 1].classList.add('active')
        }
    }
}

const swipeTopSliderBtn = document.getElementsByClassName('slider_btn_block_btn');
const swipeTopSliderImg = document.getElementsByClassName('slide_img')
const swipeTopSlider = new Swipe(swipeTopSliderBtn, swipeTopSliderImg);


const swipeTopSliderSection = document.getElementsByClassName('slider_block_section')[0]
swipeTopFunk(swipeTopSliderSection);





;
const tabView = $('.tab_view')
const btnTab = $('.tabs_btn')
const tabViewSlide = $('.tab_view_slide')

btnTab.each(function (i) {
    $(this).click(function () {
        $('.tabs_btn').removeClass('active_tab_btn')
        $(this).addClass('active_tab_btn')
        tabView.removeClass('tab_view_active')
        tabView[i].classList.add('tab_view_active')
        tabViewSlide.removeClass('splide')
        tabViewSlide[i].classList.add('splide')
        new Splide( '.splide', {
            perPage: 1,
            perMove: 1,
            autoWidth: true,
            breakpoins: {
                1700: {
                }
            },
             autoplay: true
        } ).mount();
        $('.topGames_tabs_title_right').empty();
        $('.splide__pagination').appendTo($('.topGames_tabs_title_right'))
        $('.splide__arrows').empty()
    })
})


new Splide( '.splide', {
    perPage: 1,
    perMove: 1,
    autoWidth: true,
    breakpoins: {
        1700: {
        }
    },
    autoplay: true
} ).mount();

$('.splide__pagination').appendTo($('.topGames_tabs_title_right'))
$('.splide__arrows').empty();
$('document').ready(function () {
    function createScrollSliderBtn() {
        for (let i = 0; i < $('.scroll_img').length; i++) {
            $('.scroll-slider_btn_block').append($('<div class="scroll-slider_btn_block_btn">'))
        }
    }

    function showScrollSlider() {
        $('.scroll-slider_btn_block_btn').each(function (i) {
            console.log($(this))
            i === 0 ? $(this).addClass('active_btn') : $(this).css('marginLeft', 7 + 'px')
            $(this).click(function () {
                $('.scroll-slider_btn_block_btn').removeClass('active_btn');
                $(this).addClass('active_btn')
                $('.scroll_img').removeClass('active')
                $('.scroll_img')[i].classList.add('active')
            })
        })
    }

    createScrollSliderBtn()
    showScrollSlider()
})

function swipeBottomFunk(swipeSection) {
    let touchsurface = swipeSection,
        startX,
        startY,
        dist,
        threshold = 100, // минимальное расстояние для swipe
        allowedTime = 500, // максимальное время прохождения установленного расстояния
        elapsedTime,
        startTime

    function handleswipe(isrightswipe,) {
        if (isrightswipe) {
            swipeBottomSlider.leftSwipe()

        } else {
            swipeBottomSlider.rightSwipe()
        }
    }

    touchsurface.addEventListener('touchstart', function (e) {
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime()
    }, false)

    touchsurface.addEventListener('touchmove', function (e) {
    }, false)

    touchsurface.addEventListener('touchend', function (e) {
        let touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startX
        elapsedTime = new Date().getTime() - startTime
        let swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleswipe(swiperightBol)
        e.preventDefault()
    }, false)
}

const swipeBottomSliderBtn = document.getElementsByClassName('scroll-slider_btn_block_btn');
const swipeBottomSliderImg = document.getElementsByClassName('scroll_img')
const swipeBottomSlider = new Swipe(swipeBottomSliderBtn, swipeBottomSliderImg);

const swipeBottomSliderSection = document.getElementsByClassName('scroll-slider_content')[0]
swipeBottomFunk(swipeBottomSliderSection);;
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    function updateClock() {
        var t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline="January 01 2022 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);;
const showHideBlock = $('.footer_show_menu');
showHideBlock.each(function () {
    $(this).click(function (e) {
        const showHideImg = $(this).find('img');
        showHideImg.toggleClass('footer_rotate_180')
        $(this).next().toggleClass('footer_menu_hide')
    })
});
class Popup {
    constructor() {
    }
    showPopup(button, popup) {
        button.each(function () {
            $(this).click(function () {
                popup.addClass('show_popup');
            })
        })
    };
    hidePopup(popup) {
        $('.popup_cover').click(() => {
            popup.removeClass('show_popup')
        })
    }
}

const popupReg = new Popup();
popupReg.showPopup($('.reg'), $('#popup_reg'));
popupReg.hidePopup($('#popup_reg'));

const popupSign = new Popup();
popupSign.showPopup($('.sign'),$('#popup_sign'));
popupSign.hidePopup($('#popup_sign'))



;



$('.btn-global-primary a').click(function (e){
    e.preventDefault();
})


