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
swipeBottomFunk(swipeBottomSliderSection);