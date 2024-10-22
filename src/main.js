console.log('Hello world')


import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const URL = 'https://pixabay.com/api/'

const API_KEY = '45071357-999033ebbf151b40dc2c05ece'

const form = document.querySelector('.form')
const input = document.getElementById('input')
const button = document.querySelector('.button-submit')
const gallery = document.querySelector('.gallery')

form.addEventListener('submit', handleFormInput)

function fetchImages(query){

  return fetch(`${URL}?key=${API_KEY}&q=${query}&image-type=photo&orientation=horizontal&safesearch=true`)
  .then((response) => {
      if (!response.ok) {
        throw new Error('Sorry, there are no images matching your search query. Please try again!');
      }
      return response.json();
    });
}


function handleFormInput(event){
  event.preventDefault();
  const query = input.value.trim()
  if(!query) return;
  fetchImages(query)
.then(data => {
  const images = data.hits.slice(0,10);
  gallery.innerHTML = '';
  gallery.insertAdjacentHTML('beforeend', createImages(images))
  new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});



})
.catch(console.log)

}

function createImages(images) {
  

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



