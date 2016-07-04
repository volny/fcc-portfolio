(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

// Magnific Popup
$(document).ready(function() {
  $('.open-modal').magnificPopup({
    type: 'inline',
    midclick: true, // allow middle mouse click to open modal
    showCloseBtn: true,
    closeOnContentClick: false,
    closeOnBgClick: false,
    enableEscapeKey: false,
    fixedContentPos: true,
  });
});

function closePopup() {
  $.magnificPopup.close();
};

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

//jqBootstrapValidation + Formspree + Ajax
$(function() {
  $("input,textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      console.log("submitError!")
    },
    submitSuccess: function($form, event) {
      console.log("submitSuccess!!!")
      event.preventDefault();
      $.ajax({
        url: 'https://formspree.io/felix@volny.co',
        method: 'POST',
        //data: $(this).serialize(),
        data: $form.serialize(),
        dataType: 'json',
        beforeSend: function() {
          $('#send-button').hide();
          $('#sending').show();
        },
        success: function (data) {
          $('#sending').hide();
          $('.input-element').fadeOut(500, function() {
            $('#sent-success').show();
          });
       },
        error: function (err) {
          $('#sending').hide();
          $('#sent-error').show();
          $('#send-button').show();
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
