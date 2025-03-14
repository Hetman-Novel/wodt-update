const lazyImages = document.querySelectorAll('img[loading="lazy"]'); // Get all images with the loading="lazy" attribute
function addLoadedClass(image) { // Function to add class to image parent after it is loaded
   const parentElement = image.parentElement;
   if (image.complete) { // Check if the image is loaded
      parentElement.classList.add('loaded');
   } else {
      image.addEventListener('load', function() { // Add a load event to add the class after the image has loaded
         parentElement.classList.add('loaded');
      });
   }
}
lazyImages.forEach(addLoadedClass); // Loop through all the images and call the addLoadedClass function for each one

/* === */
let swiperInstance;
function initSwiper() {
   if (!swiperInstance) {
      swiperInstance = new Swiper(fsListSlider, {
         centeredSlides: true,
         direction: 'vertical',
         loop: true,
         speed: 600,
         slidesPerView: 5.2,
         watchOverflow: true,
         mousewheel: {
            sensitivity: 1,
            eventsTarget: "#fs-list-slider",
         },
         breakpoints: {
            0: {
               slidesPerView: 3,
            },
            541: {
               slidesPerView: 5.2,
            }
         }
      });
   }
}