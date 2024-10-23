const URL = 'https://pixabay.com/api/' //pixabay читаем библиотеку

const API_KEY = '45071357-999033ebbf151b40dc2c05ece'

export function fetchImages(query){ // фетч на запрос на сервер

    return fetch(`${URL}?key=${API_KEY}&q=${query}&image-type=photo&orientation=horizontal&safesearch=true`) //линк на бекенд, читаем библиотеку
    .then((response) => {
        if (!response.ok) {
          throw new Error('Sorry, there are no images matching your search query. Please try again!');
        }
        return response.json();
      });
  }
  










