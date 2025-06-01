import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", event => {
    event.preventDefault();

    const query = event.target.elements.search.value.trim();
    if (!query) {
        iziToast.warning({
            title: "warning",
            message: "Please enter a search term",
            position: 'topRight'
        });
        return;
    }
    gallery.innerHTML = "";
}
)