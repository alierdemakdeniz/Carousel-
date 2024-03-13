// owlCarousel
$(`.home-slider`).owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 3,
    loop: true,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        },
        1300: {
            items: 5
        }
    }
})
// swiper
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });


