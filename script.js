$('.colorInput').click(function () {
    alert(8889)
    console.log($('.colorInput').val());
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


