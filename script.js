function changeColor(e) {
    $('.back').css('background', '#' + e)
    let a = e + '.jpeg'
    $('.image_preview').attr('src', 'image/img/' + a)
}


//send mail

$("#submit").on("click", function () {
    // alert("ok")
    $.ajax({
        headers: {'api-key': 'myKey'},
        url: "contact.php",
        type: "get",
        data: {
            name: 'hello',
            mail: 'hello@ff.lod',
            description: 'hello'
        },
        success: function () {
            alert("Your message sent");
        }
    });
    $("#send").css("display", "none");

});
///////////

$('.list li').click(function () {
    $('.myIcon').remove()
    let a = $(this).children('button').attr('style').replace(/background: /, '').trim()
    let b = a.replace(/;/, '');
    $('.par').css("background-color", b)
    $(this).append('<i class="fa fa-check-circle myIcon" style="position: absolute; color: green; font-size: 30px; margin: -32px 3px; z-index: 9999999;"></i>')
})
$('.openModel').click(function () {

})

$(".customDesign").on('click', function () {
    $('.ishide').show();
    $('.isshow').hide();
});

function conBut(e, show) {
    if (show) {
        $('.right').addClass('active')
    } else {
        $('.right').attr('class', 'btn btn-outline-info conBut right')

    }
    if (e === 'front') {
        $('.front').css('display', 'block')
        $('.back').css('display', 'none')
        $('.frontBack').css('display', 'none')
        $('.constructor').css('display', 'flex')
        $('.image_preview_box').css('display', 'flex')
    } else if (e === 'back') {
        $('.image_preview_box').css('display', 'flex')
        $('.constructor').css('display', 'block')
        $('.front').css('display', 'none')
        $('.back').css('display', 'block')
        $('.frontBack').css('display', 'none')
    } else {
        $('.image_preview_box').css('display', 'flex')
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

let resizeableImage = function (image_target) {
    $('.resize-image').hide();
    // Some variable and settings
    var $container,
        orig_src = new Image(),
        image_target = $(image_target).get(0),
        event_state = {},
        constrain = false,
        min_width = 60, // Change as required
        min_height = 60,
        max_width = 1800, // Change as required
        max_height = 1900,
        init_height = '100%',
        resize_canvas = document.createElement('canvas');
    imageData = null;

    init = function () {
        $('.js-loadfile').change(function (evt) {
           $('.choose_iamge').css('display','block')
           $('.aaa').css('display','block')
            setTimeout(function () {
                let imgSrc = $('img.resize-image').attr('src');
                let getWhite = $('img.resize-image').width();
                let getHeight = $('img.resize-image').height();
                $('img.choose_iamge').attr('src', imgSrc)
                $('img.choose_iamge').css('width', getWhite / 2.7 + 'px')
                $('img.choose_iamge').css('height', getHeight / 1.8 + 'px')
            }, 600);

            $('.image_preview_box').css('display', 'flex')
            let files = evt.target.files; // FileList object
            let reader = new FileReader();

            reader.onload = function (e) {
                imageData = reader.result;
                loadData();
            }
            reader.readAsDataURL(files[0]);
                $('.aaa').show();
        });

        // When resizing, we will always use this copy of the original as the base
        orig_src.src = image_target.src;

        // Wrap the image with the container and add resize handles
        $(image_target).height(init_height)
            .wrap('<div class="resize-container"></div>')
            .before('<span class="resize-handle resize-handle-nw"></span>')
            .before('<span class="resize-handle resize-handle-ne"></span>')
            .after('<span class="resize-handle resize-handle-se"></span>')
            .after('<span class="resize-handle resize-handle-sw"></span>');

        // Assign the container to a variable
        $container = $('.resize-container');

        $container.prepend('<div class="resize-container-ontop"></div>');

        // Add events
        $container.on('mousedown touchstart', '.resize-handle', startResize);
        $container.on('mousedown touchstart', '.resize-container-ontop', startMoving);

    };

    loadData = function () {

        //set the image target
        image_target.src = imageData;
        orig_src.src = image_target.src;

        //set the image tot he init height
        $(image_target).css({
            width: '100%',
            height: init_height
        });


        //resize the canvas
        $(orig_src).bind('load', function () {
            resizeImageCanvas($(image_target).width(), $(image_target).height());
        });
    };

    startResize = function (e) {
        e.preventDefault();
        e.stopPropagation();
        saveEventState(e);
        $(document).on('mousemove touchmove', resizing);
        $(document).on('mouseup touchend', endResize);
    };

    endResize = function (e) {
        resizeImageCanvas($(image_target).width(), $(image_target).height())
        e.preventDefault();
        $(document).off('mouseup touchend', endResize);
        $(document).off('mousemove touchmove', resizing);
    };

    saveEventState = function (e) {
        // Save the initial event details and container state
        event_state.container_width = $container.width();
        event_state.container_height = $container.height();
        event_state.container_left = $container.offset().left;
        event_state.container_top = $container.offset().top;
        event_state.mouse_x = (e.clientX || e.pageX || e.originalEvent.touches[0].clientX) + $(window).scrollLeft();
        event_state.mouse_y = (e.clientY || e.pageY || e.originalEvent.touches[0].clientY) + $(window).scrollTop();

        // This is a fix for mobile safari
        // For some reason it does not allow a direct copy of the touches property
        if (typeof e.originalEvent.touches !== 'undefined') {
            event_state.touches = [];
            $.each(e.originalEvent.touches, function (i, ob) {
                event_state.touches[i] = {};
                event_state.touches[i].clientX = 0 + ob.clientX;
                event_state.touches[i].clientY = 0 + ob.clientY;
            });
        }
        event_state.evnt = e;
    };

    resizing = function (e) {
        var mouse = {}, width, height, left, top, offset = $container.offset();
        mouse.x = (e.clientX || e.pageX || e.originalEvent.touches[0].clientX) + $(window).scrollLeft();
        mouse.y = (e.clientY || e.pageY || e.originalEvent.touches[0].clientY) + $(window).scrollTop();

        // Position image differently depending on the corner dragged and constraints
        if ($(event_state.evnt.target).hasClass('resize-handle-se')) {
            width = mouse.x - event_state.container_left;
            height = mouse.y - event_state.container_top;
            left = event_state.container_left;
            top = event_state.container_top;
        } else if ($(event_state.evnt.target).hasClass('resize-handle-sw')) {
            width = event_state.container_width - (mouse.x - event_state.container_left);
            height = mouse.y - event_state.container_top;
            left = mouse.x;
            top = event_state.container_top;
        } else if ($(event_state.evnt.target).hasClass('resize-handle-nw')) {
            width = event_state.container_width - (mouse.x - event_state.container_left);
            height = event_state.container_height - (mouse.y - event_state.container_top);
            left = mouse.x;
            top = mouse.y;
            if (constrain || e.shiftKey) {
                top = mouse.y - ((width / orig_src.width * orig_src.height) - height);
            }
        } else if ($(event_state.evnt.target).hasClass('resize-handle-ne')) {
            width = mouse.x - event_state.container_left;
            height = event_state.container_height - (mouse.y - event_state.container_top);
            left = event_state.container_left;
            top = mouse.y;
            if (constrain || e.shiftKey) {
                top = mouse.y - ((width / orig_src.width * orig_src.height) - height);
            }
        }

        // Optionally maintain aspect ratio
        if (constrain || e.shiftKey) {
            height = width / orig_src.width * orig_src.height;
        }

        if (width > min_width && height > min_height && width < max_width && height < max_height) {
            // To improve performance you might limit how often resizeImage() is called
            resizeImage(width, height);
            // Without this Firefox will not re-calculate the the image dimensions until drag end
            $container.offset({'left': left, 'top': top});
        }
    }

    resizeImage = function (width, height) {
        $(image_target).width(width).height(height);
    };

    resizeImageCanvas = function (width, height) {
        resize_canvas.width = width;
        resize_canvas.height = height;
        resize_canvas.getContext('2d').drawImage(orig_src, 0, 0, width, height);
        $(image_target).attr('src', resize_canvas.toDataURL("image/png"));

        let getWhite = $('img.resize-image').width();
        let getHeight = $('img.resize-image').height();
        if (getWhite > 123) {
            $('img.choose_iamge').css('width', 123 / 2.8 + 'px')
            $('img.resize-image').css('width', 123 + 'px')
        } else {
            $('img.choose_iamge').css('width', getWhite / 2.8 + 'px')

        }
        if (getHeight > 278) {
            $('img.choose_iamge').css('height', 278 / 1.8 + 'px')
            $('img.resize-image').css('height', 278 + 'px')
        } else {
            $('img.choose_iamge').css('height', getHeight / 1.8 + 'px')
        }

    };

    startMoving = function (e) {
        e.preventDefault();
        e.stopPropagation();
        saveEventState(e);
        $(document).on('mousemove touchmove', moving);
        $(document).on('mouseup touchend', endMoving);
    };

    endMoving = function (e) {

        console.log(e.clientX)
        if (e.clientX > 300) {
            $('.choose_iamge').css('left', '212px')
        } else {
            $('.choose_iamge').css('left', '130px')

        }
        e.preventDefault();
        $(document).off('mouseup touchend', endMoving);
        $(document).off('mousemove touchmove', moving);
    };

    moving = function (e) {
        var mouse = {}, touches;
        e.preventDefault();
        e.stopPropagation();

        touches = e.originalEvent.touches;

        mouse.x = (e.clientX || e.pageX || touches[0].clientX) + $(window).scrollLeft();
        mouse.y = (e.clientY || e.pageY || touches[0].clientY) + $(window).scrollTop();
        $container.offset({
            'left': mouse.x - (event_state.mouse_x - event_state.container_left),
            'top': mouse.y - (event_state.mouse_y - event_state.container_top)
        });
        // Watch for pinch zoom gesture while moving
        if (event_state.touches && event_state.touches.length > 1 && touches.length > 1) {
            var width = event_state.container_width, height = event_state.container_height;
            var a = event_state.touches[0].clientX - event_state.touches[1].clientX;
            a = a * a;
            var b = event_state.touches[0].clientY - event_state.touches[1].clientY;
            b = b * b;
            var dist1 = Math.sqrt(a + b);

            a = e.originalEvent.touches[0].clientX - touches[1].clientX;
            a = a * a;
            b = e.originalEvent.touches[0].clientY - touches[1].clientY;
            b = b * b;
            var dist2 = Math.sqrt(a + b);

            var ratio = dist2 / dist1;

            width = width * ratio;
            height = height * ratio;
            // To improve performance you might limit how often resizeImage() is called
            resizeImage(width, height);
        }
    };
    init();
};

// Kick everything off with the target image
resizeableImage($('.resize-image'));

document.querySelector('#submit').addEventListener('click', function () {
    html2canvas(document.querySelector('.gago'), {
        onrendered: function (canvas) {
            // document.body.appendChild(canvas);
            return Canvas2Image.saveAsPNG(canvas);
        }
    });
});


