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
$('.splide__arrows').empty()