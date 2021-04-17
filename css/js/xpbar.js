var form = document.querySelector('#formDiv');
var inputs = form.querySelectorAll('input, textarea');
var percentElement = form.querySelector('.percentage');
var progresstext = form.querySelector('.progressiontext');
var txtprogr = form.querySelector('.txtprog');

function checkProgression() {
    var progress = 0;

    inputs.forEach(function(input) {
        if (input.value.length > 0) {
            progress += 1;
        }
    });



    var percent = (progress / inputs.length) * 100;
    percentElement.style.width = Math.round(percent) + '%';

    progresstext.innerText = "Votre Progression : " + Math.round(percent) + '%';
    let coulg = false;
    // percentElement.style.background= #0B9710;
    console.log(percent)
    if (percent > 49 && coulg === false) {
        percentElement.classList.add('green');
        progresstext.innerText = "Vous avez bientot fini ! : " + Math.round(percent) + '%';

        coulg = true;
        // percentElement.style.color = "#0B9710"
    } else {
        percentElement.classList.remove('green');

    }
};