const showHideBlock = $('.footer_show_menu');
showHideBlock.each(function () {
    $(this).click(function (e) {
        const showHideImg = $(this).find('img');
        showHideImg.toggleClass('footer_rotate_180')
        $(this).next().toggleClass('footer_menu_hide')
    })
})