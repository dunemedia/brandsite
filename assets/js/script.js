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

  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".case-study-button");
    const texts = document.querySelectorAll(".case-study-text");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-target");

        // Hide all texts
        texts.forEach((text) => {
          text.classList.remove("active");
        });

        // Show the selected text
        const selectedText = document.getElementById(target);
        selectedText.classList.add("active");

        // Activate the selected button
        buttons.forEach((btn) => {
          btn.classList.remove("active");
        });
        button.classList.add("active");
      });
    });
  });
});
