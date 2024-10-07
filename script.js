const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.getElementById('close');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = thumbnail.src; // Mostrar la imagen grande
    });
});

close.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Cerrar la lightbox
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Cerrar al hacer clic fuera de la imagen
});


