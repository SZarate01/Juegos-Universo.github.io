window.onscroll = function() {
    toggleBotonVolverArriba();
  };
  
  function toggleBotonVolverArriba() {
    var boton = document.getElementById("btn-volver-arriba");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      boton.style.display = "block";
    } else {
      boton.style.display = "none";
    }
  }
  
  document.getElementById("btn-volver-arriba").addEventListener("click", function() {
    scrollToTop(500); // Velocidad de desplazamiento en milisegundos
  });
  
  function scrollToTop(duration) {
    var startPosition = window.pageYOffset;
    var startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var scrollY = easeInOutCubic(timeElapsed, startPosition, -startPosition, duration);
      window.scrollTo(0, scrollY);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function easeInOutCubic(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
    };
  
    requestAnimationFrame(animation);
  }
  