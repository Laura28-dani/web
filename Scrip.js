
/*sección información adicional*/
document.getElementById('toggle-info-btn').addEventListener('click', function () {
    const info = document.getElementById('info-adicional');
    if (info.style.display === 'none') {
        info.style.display = 'block';
        this.textContent = 'Mostrar menos';
    } else {
        info.style.display = 'none';
        this.textContent = 'Mostrar más';
    }
});
/*Letrero Bienvenida*/
window.onload = function () {
    alert('¡Bienvenido a Pasión por Correr! Explora todo lo que tenemos para ti.');
};

/* Contacto*/
document.getElementById('contact-form').addEventListener('submit', function (event) {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
        event.preventDefault(); 
        alert('Por favor, completa todos los campos antes de enviar.');
    } else {
        alert('Gracias por contactarnos, ' + nombre + '. Pronto nos pondremos en contacto contigo.');
    }
});

const images = ['runner1.jpg', 'runner2.jpg', 'runner3.jpg'];
let currentImageIndex = 0;


function changeImage(imageSrc) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = imageSrc;
    currentImageIndex = images.indexOf(imageSrc);
}


document.getElementById('prev-btn').addEventListener('click', showPreviousImage);
document.getElementById('next-btn').addEventListener('click', showNextImage);