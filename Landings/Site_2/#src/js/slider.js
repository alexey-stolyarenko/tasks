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





