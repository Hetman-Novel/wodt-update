document.addEventListener('DOMContentLoaded', function () {
   let preloader = document.getElementById('preloader');
   if (preloader) {
      let loadTime = performance.now(); // Page load time in milliseconds
      let delay = Math.max(2000 - loadTime, 0); // Calculate the delay

      if (preloader) {
         setTimeout(() => {
            preloader.classList.add('loaded');
         }, delay);
      }
   }
});