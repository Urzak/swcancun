/*
    ###  Smooth Scroll
*/
$(window).load(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
/*
    Smooth Scroll  ###
*/

/*
    ###  Navbar Background
*/
$(window).load(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth <= 767) {
        $(".navbar").addClass("navbar-default");
        $('#logo').css("background-image", "url(dist/images/logo-grey-transparent.png)");  
    }
    else {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".navbar").addClass("navbar-default");
            $('#logo').css("background-image", "url(dist/images/logo-grey-transparent.png)");
        }
        else {
            $(".navbar").removeClass("navbar-default");
            $('#logo').css("background-image", "url(dist/images/logo-white.png)"); 
        }
        
        // Change navbar background color on scroll
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {        
                $(".navbar").addClass("navbar-default");
                $('#logo').css("background-image", "url(dist/images/logo-grey-transparent.png)");  
            } else {
                $(".navbar").removeClass("navbar-default");
                $('#logo').css("background-image", "url(dist/images/logo-white.png)"); 
            }
        });
    }
 });

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth <= 767) {
        $(".navbar").addClass("navbar-default");

        $('#logo').css("background-image", "url(dist/images/logo-grey-transparent.png)");  
        
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {}
        });
    }
    else {
        $(".navbar").removeClass("navbar-default");
        $('#logo').css("background-image", "url(dist/images/logo-white.png)"); 
        
        // Change navbar background color on scroll
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {        
                $(".navbar").addClass("navbar-default");
                $('#logo').css("background-image", "url(dist/images/logo-grey-transparent.png)");  
            } else {
                $(".navbar").removeClass("navbar-default");
                $('#logo').css("background-image", "url(dist/images/logo-grey-transparent.png)"); 
            }
        });
    }
});
/*
    Navbar Background  ##
*/
$(window).load(function() {
        var backgrounds = [
          'url(dist/images/chichen.png)', 
          'url(dist/images/arrecifes.png)',
          'url(dist/images/xcaret.png)'];
        var current = 0;

        function nextBackground() {
            /*$('.img-home').fadeOut(1000, function() {
                $(this)
                    .css('background-image',
                     backgrounds[current = ++current % backgrounds.length]);
                    $('.img-home').fadeIn(1000);
            })*/
            $('.img-home').css('background-image',backgrounds[current = ++current % backgrounds.length]);

            setTimeout(nextBackground, 4000);
        }
        setTimeout(nextBackground, 4000);
        body.css('background', backgrounds[0]);
});
jQuery(document).ready(function($) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        // nav: true,
        margin:10,
        // stagePadding: 50,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $("#js-text").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 4000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
});