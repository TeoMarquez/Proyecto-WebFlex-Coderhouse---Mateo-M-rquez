document.addEventListener("DOMContentLoaded", function () {
    
    AOS.init();
    
    const btnCompras = document.querySelector(".dropdown button.dropbtn");
    const comprasDropdown = document.querySelector(".dropdown .dropdown-content");

    const userDropdown = document.querySelector(".user-profile");
    const userDropdownContent = document.querySelector(".user-dropdown-content");

    console.log(comprasDropdown);
    console.log(btnCompras);
    console.log(userDropdown);
    console.log(userDropdownContent);
    
    // Mostrar el desplegable de compras al pasar el ratón sobre el botón
    btnCompras.addEventListener("mouseenter", function () {
        toggleDropdown(comprasDropdown, true);
    });

    // Ocultar el desplegable de compras solo cuando el cursor salga tanto del botón como del desplegable
    btnCompras.addEventListener("mouseleave", function (event) {
        if (!event.relatedTarget || !event.relatedTarget.closest(".dropdown")) {
            toggleDropdown(comprasDropdown, false);
        }
    });

    // Mostrar/ocultar el menú de usuario al hacer clic en el perfil de usuario
    userDropdown.addEventListener("click", function () {
        console.log("clickeaste usuario");
        toggleDropdown(userDropdownContent, userDropdownContent.style.display !== 'block');
    });

    // Ocultar los desplegables de compras y categorías cuando se haga clic fuera de ellos
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown") && !event.target.closest(".user-profile")) {
            toggleDropdown(comprasDropdown, false);
        }
    });
});

// Función para alternar la visualización de un dropdown
function toggleDropdown(dropdown, display) {
    dropdown.style.display = display ? 'block' : 'none';
}
