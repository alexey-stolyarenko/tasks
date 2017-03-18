app.directive('findKey',function () {
        return function (scope, element, attr) {
            element.bind("keyup", function (e) {
                    if ($('input').eq(0).val().length == 1) {
                        $('.panel-default').show();
                    }
                    else {
                        if (e.keyCode == 8 || e.keyCode == 46) {
                            $('.panel-default').hide();
                            $("h5:contains(" + $('input').eq(0).val() + ")").closest('.panel-default').show();
                        }
                        if (e.keyCode == 13) {
                            $('.panel-default').hide();
                            $("h5:contains(" + $('input').eq(0).val() + ")").closest('.panel-default').show();
                        }
                    }
                }
            );
        }
    }
);