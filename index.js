import{S as c}from"./assets/vendor-qvgbjSeY.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();console.log("Hello world");const a="https://pixabay.com/api/",u="45071357-999033ebbf151b40dc2c05ece",f=document.querySelector(".form"),d=document.getElementById("input");document.querySelector(".button-submit");const l=document.querySelector(".gallery");f.addEventListener("submit",p);function m(o){return fetch(`${a}?key=${u}&q=${o}&image-type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return e.json()})}function p(o){o.preventDefault();const e=d.value.trim();e&&m(e).then(i=>{const n=i.hits.slice(0,10);l.innerHTML="",l.insertAdjacentHTML("beforeend",h(n)),new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}).catch(console.log)}function h(o){return o.map(e=>`<li class = 'gallery-item'>
    <a class='gallery-link' href='${e.webformatURL}'>
    <img
      class='gallery-image'
      src=${e.webformatURL}
      data-source='${e.largeImageURL}'
      alt='${e.tags}'
      />
    </a>
    <ul>
    <li>
    <h3>Likes</h3>
    <p>${e.likes}</p>
    </li>
    <li>
    <h3>Views</h3>
    <p>${e.views}</p>
    </li>
    <li>
    <h3>Comments</h3>
    <p>${e.comments}</p>
    </li>
    <li>
    <h3>Downloads</h3>
    <p>${e.downloads}</p>
    </li>
    </ul>
    </li>
`).join("")}
//# sourceMappingURL=index.js.map
