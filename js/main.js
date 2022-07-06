setTimeout(function() {
    $('.loader_bg').fadeToggle();
}, 1000);








var list_item = document.getElementById('list-row');

list_item.addEventListener('click', function(e) {

    if (document.querySelector('#list-row li.active') !== null) {
        document.querySelector('#list-row li.active').classList.remove('active');
    }

    if (e.target.localName != 'ul') {
        e.target.className = "active";
    }

    var color_name = e.target.getAttribute('colors');
    var card = document.querySelector('.card');
    card.style.background = color_name;
});


$(document).ready(function() {
    // video///////////////
    // const videoSrc = $("#player-1").attr("src");
    // $(".video-play-btn ,.video-popup").on("click", function() {
    //     if ($(".video-popup").hasClass("open")) {
    //         $(".video-popup").removeClass("open");
    //         $("#player-1").attr("src", "");
    //     } else {
    //         $(".video-popup").addClass("open");
    //         if ($("#player-1").attr("src") == '') {
    //             $("#player-1").attr("src", videoSrc);
    //         }
    //     }
    // });





});

// --------------- Question
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find(".link-q");

        links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass("open");

        if (!e.data.multiple) {
            $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
        };
    }

    var accordion = new Accordion($("#accordion-q"), false);
});