// Esperamos a que la página cargue completamente
window.addEventListener('load', function () {
    // Ocultar el loader una vez que la página esté lista
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

// Función para validar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación básica
    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Mostrar mensaje de éxito si todo es válido
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.style.display = 'block';
    }

    // Limpiar el formulario
    document.getElementById('contactForm').reset();
});

// Mostrar el botón "Volver arriba" cuando se desplace por la página
const backToTopBtn = document.getElementById('backToTopBtn');

// Mostrar el botón cuando el usuario haga scroll
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

// Hacer scroll hacia arriba al hacer clic en el botón
backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Agregar comportamiento suave de scroll
    });
});

// script.js

// Asegúrate de que el documento esté listo
$(document).ready(function () {

    // Cuando se hace clic en "Ver más", mostramos las pestañas
    $('.btn-primary').on('click', function () {
        var target = $(this).data('target');  // Obtiene el target (ID) de cada sección
        $(target).collapse('toggle');  // Alterna la visibilidad de esa sección
    });

    // Configuración de las pestañas de Bootstrap
    $('#tabQuinua a, #tabAmaranto a, #tabMaiz a').on('click', function (e) {
        e.preventDefault(); // Previene el comportamiento por defecto de los enlaces
        $(this).tab('show'); // Muestra la pestaña correspondiente
    });

    // Mostrar el botón "Volver arriba" cuando el usuario se desplace
    var backToTopBtn = $('#backToTopBtn');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            backToTopBtn.fadeIn();
        } else {
            backToTopBtn.fadeOut();
        }
    });

    // Al hacer clic en el botón "Volver arriba", el usuario será llevado al principio de la página
    backToTopBtn.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
});

// Configuración de las pestañas de Bootstrap
document.querySelectorAll('.nav-tabs a').forEach(function (tab) {
    tab.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el comportamiento por defecto de los enlaces
        const tabContentId = tab.getAttribute('href').substring(1); // Obtiene el ID del contenido de la pestaña
        const tabContent = document.getElementById(tabContentId);

        // Cambia la pestaña activa
        tab.classList.add('active');
        
        // Muestra el contenido de la pestaña correspondiente
        tabContent.classList.add('show', 'active');

        // Oculta otros contenidos de pestañas
        tab.closest('.tab-content').querySelectorAll('.tab-pane').forEach(function (pane) {
            if (pane.id !== tabContentId) {
                pane.classList.remove('show', 'active');
            }
        });

        // Desactiva otras pestañas
        tab.closest('.nav-tabs').querySelectorAll('.nav-link').forEach(function (navTab) {
            if (navTab !== tab) {
                navTab.classList.remove('active');
            }
        });
    });
});

// Activar la primera pestaña por defecto al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const firstTab = document.querySelector('.nav-tabs a');
    if (firstTab) {
        firstTab.click(); // Activa la primera pestaña
    }
});

