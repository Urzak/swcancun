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
    Navbar Background  ###
*/

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
    })
});