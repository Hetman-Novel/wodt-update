window.addEventListener('load', function () {
   let preloader = document.getElementById('preloader');
   let loadTime = performance.now(); // Время загрузки страницы в миллисекундах
   let delay = Math.max(3000 - loadTime, 0); // Рассчитываем, нужна ли задержка

   if (preloader) {
      setTimeout(() => {
         preloader.classList.add('loaded');
      }, delay);
   }
});