$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 569) {
      $(".navbar").addClass("navbar-fixed-top dark-bar");
    } else {
      $(".navbar").removeClass("navbar-fixed-top dark-bar");
    }
  });

  // Smooth Scroll

  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") ||
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 452,
          },
          1000
        );
        return false;
      }
    }
  });

  // Popup

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // Slider

  $("#workstation-slider").owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $("#expert-slider").owlCarousel({
    loop: true,
    items: 1,
  });

  // height

  var h = $(".expert").height();
  $(".expert .col-sm-6 div").height(function (index, height) {
    return h;
  });

  // Menu bar
  $(".menu").click(function () {
    $(this).toggleClass("m c");
    $(".menu span").toggleClass("ion-navicon ion-android-close");
    $("#menu-item").toggleClass("show-menu hide-menu");
  });

  $("#menu-item a").click(function () {
    $(".menu").toggleClass("c m");
    $(".menu span").toggleClass("ion-navicon ion-android-close");
    $("#menu-item").toggleClass("show-menu hide-menu");
  });

  // Case Study Button
  $(document).ready(function () {
    $(".case-study-button").click(function () {
      // Remove 'active' class from all buttons
      $(".case-study-button").removeClass("active");
      // Add 'active' class to the clicked button
      $(this).addClass("active");

      // Get the 'data-target' attribute of the clicked button
      var target = $(this).attr("data-target");
      // Hide all case study content
      $(".case-study-text").removeClass("active");
      // Show the targeted case study content
      $("#" + target).addClass("active");
    });
  });

  $(document).ready(function() {
    // Panel Button click handler
    $(".service-item.flip").on("click", function() {
      $("#panel").toggle(); // Toggle the display of the #panel element
    });
  
    // Close panel when clicking outside of it
    $(document).on("click", function(event) {
      if (!$(event.target).closest("#panel").length && !$(event.target).hasClass("service-item")) {
        $("#panel").hide(); // Hide the #panel if clicked outside of it and not on .service-item
      }
    });
  
    // Prevent closing panel when clicking on .service-item
    $(".service-item").on("click", function(event) {
      event.stopPropagation(); // Prevent the click event from propagating to the document
    });
  });
  
});
