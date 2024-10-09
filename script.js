const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.getElementById('close');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = thumbnail.src; 
    });
});

close.addEventListener('click', () => {
    lightbox.style.display = 'none'; 
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'; 
});


