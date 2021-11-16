import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryMurkup(items) {
    return items
    .map(({ preview, original, description }) => {

       return `
   <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
        .join('');
}
const galleryContainer = document.querySelector('.gallery');
const galleryMurkup = createGalleryMurkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMurkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
}
);
