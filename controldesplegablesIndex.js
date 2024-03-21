document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
    const btnCompras = document.querySelector(".dropdown button.dropbtn");
    const comprasDropdown = document.querySelector(".dropdown .dropdown-content");

    const btnCategorias = document.querySelector(".dropdown.mb-3 button.dropbtn");
    const categoriasDropdown = document.querySelector(".dropdown.mb-3 .dropdown-content");

    const userDropdown = document.querySelector(".user-profile");
    const userDropdownContent = document.querySelector(".user-dropdown-content");

    console.log(btnCategorias);
    console.log(comprasDropdown);
    console.log(btnCompras);
    console.log(categoriasDropdown);
    console.log(userDropdown);
    console.log(userDropdownContent);
    
    // Guarda los productos en un array
    const productos = document.querySelectorAll(".product-image");

    // Almacena el valor de desplazamiento anterior
    let lastScrollTop = 0;

    // Almacena la altura original del panel de productos
    const panelHeight = document.querySelector('.product-panel').offsetHeight;

    // Mostrar/ocultar elementos basados en la dirección del scroll
    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll hacia abajo
            document.querySelector('.product-panel').style.height = 'auto';
            document.querySelector('footer').classList.remove('footer-fixed'); // Quita la clase que fija el footer
        } else {
            // Scroll hacia arriba
            if (scrollTop < panelHeight) {
                document.querySelector('.product-panel').style.height = panelHeight + 'px'; // Restaura la altura original
            }
            if (scrollTop <= 0) {
                document.querySelector('footer').classList.add('footer-fixed'); // Fija el footer en la parte inferior de la ventana
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

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

    // Mostrar el desplegable de categorías al pasar el ratón sobre el botón
    btnCategorias.addEventListener("mouseenter", function () {
        toggleDropdown(categoriasDropdown, true);
    });

    // Ocultar el desplegable de categorías solo cuando el cursor salga tanto del botón como del desplegable
    btnCategorias.addEventListener("mouseleave", function (event) {
        if (!event.relatedTarget || !event.relatedTarget.closest(".dropdown.mb-3")) {
            toggleDropdown(categoriasDropdown, false);
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
            toggleDropdown(categoriasDropdown, false);
        }
    });
});

// Función para alternar la visualización de un dropdown
function toggleDropdown(dropdown, display) {
    dropdown.style.display = display ? 'block' : 'none';
}
