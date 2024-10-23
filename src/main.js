console.log('Hello world')


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api";
import { showLoader, hideLoader, createImages } from "./js/render-functions";

const form = document.querySelector('.form')
const input = document.getElementById('input')

const gallery = document.querySelector('.gallery')
const loader = document.querySelector('.loader')

loader.style.display = 'none'
form.addEventListener('submit', handleFormInput)


function handleFormInput(event){
  event.preventDefault(); // обнуляем стандартное поведение формы
  const query = input.value.trim()
  if(!query) return;
  showLoader(loader)
  fetchImages(query) //прорабатываем фетч
.then(data => {
  const images = data.hits.slice(0,10); //ограничиваем галлерею 10ю картинками
  gallery.innerHTML = ''; //очищаем галлерею при каждой новой инициализации
  gallery.insertAdjacentHTML('beforeend', createImages(images)) // создаем галлерею
  new SimpleLightbox('.gallery a', { //модальное окно (должно инициализироваться после функции созадания галереи)
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

})
.catch((error) => {
console.log(error);
iziToast.error({
  title: 'Error',
  message: error.message
})
})
.finally(() => hideLoader(loader))
}







/**
 * import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const URL = 'https://pixabay.com/api/' //pixabay читаем библиотеку

const API_KEY = '45071357-999033ebbf151b40dc2c05ece'

const form = document.querySelector('.form')
const input = document.getElementById('input')

const gallery = document.querySelector('.gallery')
const loader = document.querySelector('.loader')

loader.style.display = 'none'
form.addEventListener('submit', handleFormInput)


function fetchImages(query){ // фетч на запрос на сервер

  return fetch(`${URL}?key=${API_KEY}&q=${query}&image-type=photo&orientation=horizontal&safesearch=true`) //линк на бекенд, читаем библиотеку
  .then((response) => {
      if (!response.ok) {
        throw new Error('Sorry, there are no images matching your search query. Please try again!');
      }
      return response.json();
    });
}


function handleFormInput(event){
  event.preventDefault(); // обнуляем стандартное поведение формы
  const query = input.value.trim()
  if(!query) return;
  loader.style.display = 'block';
  fetchImages(query) //прорабатываем фетч
.then(data => {
  const images = data.hits.slice(0,10); //ограничиваем галлерею 10ю картинками
  gallery.innerHTML = ''; //очищаем галлерею при каждой новой инициализации
  gallery.insertAdjacentHTML('beforeend', createImages(images)) // создаем галлерею
  new SimpleLightbox('.gallery a', { //модальное окно (должно инициализироваться после функции созадания галереи)
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

})
.catch((error) => {
console.log(error);
iziToast.error({
  title: 'Error',
  message: error.message
})
})
.finally(() => loader.style.display = 'none')
}


function createImages(images) { //функция создания галлереи
  

  return images.map(image => {
  return `<li class = 'gallery-item'>
    <a class='gallery-link' href='${image.webformatURL}'>
    <img
      class='gallery-image'
      src=${image.webformatURL}
      data-source='${image.largeImageURL}'
      alt='${image.tags}'
      />
    </a>
    <ul>
    <li>
    <h3>Likes</h3>
    <p>${image.likes}</p>
    </li>
    <li>
    <h3>Views</h3>
    <p>${image.views}</p>
    </li>
    <li>
    <h3>Comments</h3>
    <p>${image.comments}</p>
    </li>
    <li>
    <h3>Downloads</h3>
    <p>${image.downloads}</p>
    </li>
    </ul>
    </li>
`
  }).join("")
}
 */