// appereance in start
$(document).ready(() => {
    $('html, body').animate({
          scrollTop:0,
          scrollLeft:0
        }, 200)
    $('.content').fadeTo(2000, 1, () => {
        $('.first-appear').fadeTo(1000, 1, () => {
            $('.second-appear').removeClass('hidden');
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



