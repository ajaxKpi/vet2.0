$(document).ready(() => {
    $('.content').css('display', 'none')
    $('.content').fadeIn(2000, 'linear', () => {
        $('.second-appear').removeClass('hidden');
    });
    $('section').horizon({
        scrollTimeout: null,
        scrollEndDelay: 250,
        scrollDuration: 400,
        i: 0,
        limit: 0,
        docWidth: 0,
        sections: null,
        swipe: true,
        fnCallback: function (i) {
        }
    });

})




