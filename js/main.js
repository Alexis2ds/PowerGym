   const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const menuClose = document.getElementById('menuClose');
    const menuOverlay = document.getElementById('menuOverlay');

    // Función para abrir el menú móvil
    menuToggle.addEventListener('click', () => {
        navLinks.classList.add('active');
        menuOverlay.classList.add('active');
    });

    // Función para cerrar el menú móvil (Dando clic en la X)
    menuClose.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
    });

    // Cerrar también si el usuario da clic en la parte oscura de la pantalla
    menuOverlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
    });
