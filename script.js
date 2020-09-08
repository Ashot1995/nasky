$('.list li').click(function () {
    $('.myIcon').remove()
    let a  = $(this).children('button').attr('style').replace(/background: /, '').trim()
    console.log(a)
    $('.constructor,.par').css('background-color','"'+ a +'"');
    $(this).append('<i class="fa fa-check-circle myIcon" style="position: absolute; color: green; font-size: 30px; margin: -31px 3px; z-index: 9999999;"></i>')
})


$(".customDesign").on('click', function () {
    $('.ishide').show();
    $('.isshow').hide();
});

function conBut(e) {
    if (e === 'front') {
        $('.front').css('display', 'block')
        $('.back').css('display', 'none')
        $('.frontBack').css('display', 'none')
        $('.constructor').css('display', 'block')
    } else if (e === 'back') {
        $('.constructor').css('display', 'block')
        $('.front').css('display', 'none')
        $('.back').css('display', 'block')
        $('.frontBack').css('display', 'none')
    } else {
        $('.front').css('display', 'none')
        $('.constructor').css('display', 'none')
        $('.back').css('display', 'none')
        $('.frontBack').css('display', 'flex')
    }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


