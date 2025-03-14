window.addEventListener('load', function () {
   let preloader = document.getElementById('preloader');
   if (preloader) {
      document.documentElement.classList.add('loading'); // Add the loading class to <html>
      let loadTime = performance.now(); // Page load time in milliseconds
      let delay = Math.max(2000 - loadTime, 0); // Calculate the required delay
      setTimeout(() => {
         preloader.classList.add('loaded');
         document.documentElement.classList.remove('loading'); // Remove loading

         // Добавляем анимацию после прелодера
         let customAnimations = document.querySelectorAll('.custom-animation');
         if (customAnimations) {
            customAnimations.forEach(function(customAnimation) {
               customAnimation.classList.add('show');
            });
         }

      }, delay);
   }
});