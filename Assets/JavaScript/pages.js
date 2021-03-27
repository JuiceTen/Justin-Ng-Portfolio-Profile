let aboutMe = $('#about')
let projects = $('#proj')
let contacts = $('#cont')
let resume = $('#res')
let footer = $('footer')
let landing = $('.center')
let aboutText = $('#about-me')
let projText = $('#projects')
let conText = $('#contacts')
let resText = $('#resume')

function aboutFunct() {

    $(aboutText).removeClass('hide')
    $(projText).addClass('hide')
    $(conText).addClass('hide')
    $(resText).addClass('hide')
    $(footer).removeClass('hide')
    $(landing).addClass('hide')

};

function projectFunct() {

    $(projText).removeClass('hide')
    $(aboutText).addClass('hide')
    $(conText).addClass('hide')
    $(resText).addClass('hide')
    $(footer).removeClass('hide')
    $(landing).addClass('hide')

};
function contactFunct() {

    $(conText).removeClass('hide')
    $(projText).addClass('hide')
    $(aboutText).addClass('hide')
    $(resText).addClass('hide')
    $(footer).removeClass('hide')
    $(landing).addClass('hide')

};
function resumeFunct() {

    $(resText).removeClass('hide')
    $(projText).addClass('hide')
    $(conText).addClass('hide')
    $(aboutText).addClass('hide')
    $(footer).removeClass('hide')
    $(landing).addClass('hide')

};

aboutMe.on('click', aboutFunct)
projects.on('click', projectFunct)
contacts.on('click', contactFunct)
resume.on('click', resumeFunct)




