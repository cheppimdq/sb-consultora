// HEADER SLIDE
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento del nav
    var nav = document.querySelector('.nav-negro');
  
    // Obtener la altura actual del nav
    var navHeight = nav.offsetHeight;
  
    // Aplicar la altura al header
    var header = document.getElementById('alturaHeader');
    header.style.height = `calc(100vh - ${navHeight}px)`;
  });