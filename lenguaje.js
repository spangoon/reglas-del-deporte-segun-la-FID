function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const recuadro = document.querySelector('.recuadro');
    
    // Agrega o quita una clase para mostrar/ocultar el menú
    recuadro.classList.toggle('show-menu');
}