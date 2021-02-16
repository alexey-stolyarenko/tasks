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



