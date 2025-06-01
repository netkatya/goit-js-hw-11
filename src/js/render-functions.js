import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function createGallery(images) {
    const markup = images.map(image => `
        <li class="gallery-item">
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" />
            </a>
            <div class="description">
                <p>Likes:${image.likes}</p>
                <p>Views:${image.views}</p>
                <p>Comments:${image.comments}</p>
                <p>Downloads:${image.downloads}</p>
            </div>
        </li >`
        )
        .join("");  
    
    gallery.insertAdjacentHTML('beforeend', markup);
}