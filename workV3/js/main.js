var countUsers = 11;
var countModal = setInterval(function () {
    var sectionModal = $('section');
    var divModal = $('.collapse');
    if(divModal.length>=countUsers){
        var changePlusMinus = function () {
            $(document).bind("click", function (e) {
                var sect =  $(e.target).closest("section");
                if(sect.attr('aria-expanded')=='true') {
                    sect.find('i').removeClass('fa-plus');
                    sect.find('i').addClass('fa-minus');
                    var nextCount = $(e.target).closest('.panel-default').nextAll('div');
                    var prevCount = $(e.target).closest('.panel-default').prevAll('div');
                    for(var i=0;i<nextCount.length; i++){
                        if(nextCount.eq([i]).find('i').hasClass('fa-minus')){
                            nextCount.eq([i]).find('i').removeClass('fa-minus');
                            nextCount.eq([i]).find('i').addClass('fa-plus');
                        }
                    }
                    for(var i=0;i<prevCount.length; i++){
                        if(prevCount.eq([i]).find('i').hasClass('fa-minus')){
                            prevCount.eq([i]).find('i').removeClass('fa-minus');
                            prevCount.eq([i]).find('i').addClass('fa-plus');
                        }
                    }
                }
                if(sect.attr('aria-expanded')=='false'){
                    sect.find('i').removeClass('fa-minus');
                    sect.find('i').addClass('fa-plus')
                }
            });
        };
        changePlusMinus();
        function changeIdModals () {
            $('.main_block:even').css('background-color', '#7c888f');
            $('.main_display_block:even').css('background','#7c888f');
            $('.main_block:odd').css('background-color', '#c9d0d6');
            for( var i=0; i<countUsers; i++){
                sectionModal.eq([i]).attr('href', '#collapse' + [i] );
                divModal.eq([i]).attr('id', 'collapse' + [i])
            }
        }
        changeIdModals();
        return clearInterval(countModal)
    }
    else {return false}
}, 500);












