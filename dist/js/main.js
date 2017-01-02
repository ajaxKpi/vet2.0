// appereance in start
$(document).ready(() => {


    $("[name='tel']").mask("(999) 999-99-99").on("blur", function () {
        var last = $(this).val().substr($(this).val().indexOf("-") + 1);

        if (last.length == 5) {
            var move = $(this).val().substr($(this).val().indexOf("-") + 1, 1);

            var lastfour = last.substr(1, 4);

            var first = $(this).val().substr(0, 9);

            $(this).val(first + move + '-' + lastfour);
        }
    });


    $('html, body').animate({
        scrollTop: 0,
        scrollLeft: 0
    }, 200)
    $('.content').fadeTo(2000, 1, () => {
        $('.first-appear').fadeTo(1000, 1, () => {
            $('.second-appear').removeClass('hidden');
            $('.arrow-pulse').addClass('pulse');
            // two layers img in contant should be the same (at later as posible)
            let imageContainer = $('.container-line');
            $('.container-line img').css({
                width: imageContainer.width(),
                height: imageContainer.height()
            })
            window.onresize = () => {
                $('.container-line img').css({
                    width: imageContainer.width(),
                    height: imageContainer.height()
                })
            }
        })
    });

    // horizon scroll 
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



// content page animation


function animateColorFill(i) {
    var current = $('#section-section' + (i + 1) + ' .pending')
    if (!current.length) { return }
    $('.active-img').animate({
        height: '84%'
    }, 5000, "linear", () => {
        $('.next-active-img').width('2%').animate({
            width: '100%'
        }, 4000, "linear").removeClass('pending')
    }
    ).removeClass('pending');
}




// form page
$('.main_form').submit(event => {
    let noErrors = true;
    let inputArray = Object.keys(event.target).filter(el => ++el == el).map(fe => event.target[fe]);
    let validatioResult = validateAll(inputArray);

    Object.keys(validatioResult).forEach(el => {
        if (!validatioResult[el]) {
            noErrors = false;
            $(`.form-group.${el}`).addClass('error');
        }
    })
    return noErrors;
})
    .change(e => {
        let inputName = e.target.name;
        validateField(e.target) ?
            $(`.form-group.${inputName}`).removeClass('error')
            : $(`.form-group.${inputName}`).addClass('error')
    })

// validation sevice
function validateAll(arrayInputs) {
    let validationObj = {};
    arrayInputs.forEach(ai => {
        validationObj[ai.name] = validateField(ai);
    })
    return validationObj;
}

function validateField(field) {
    let controlName = field.name;
    switch (controlName) {
        case 'name':
        case 'message':
            return validateName(field.value);
        case 'email':
            return validateEmail(field.value);
        case 'tel':
            return validatePhone(field.value);
        default:
            return true;

    }
}

function validateEmail(val) {
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(val);
}
function validatePhone(val) {
    return val.length > 6;
}
function validateName(val) {
    return !!val.length;
}



