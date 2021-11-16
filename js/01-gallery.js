import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMurkup = createGalleryMurkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMurkup);

function createGalleryMurkup(items) {
    return items
    .map(({ preview, original, description }) => {

       return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
        .join('');
    }
galleryContainer.addEventListener('click', onGalleryContainerClick);
function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  galleryItems.map((img) => {
    if (img.original === evt.target.dataset.source) {
      const instance = basicLightbox.create(
        `<img src=${img.original} width="800" height="600">`
      );
      instance.show();
      document.addEventListener("keydown", evt => {
        if (evt.key === "Escape") {
        instance.close();
      }
    });
    }
  });
}


