import{S as c,i as u}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const d="https://pixabay.com/api/",f="45071357-999033ebbf151b40dc2c05ece";function p(o){return fetch(`${d}?key=${f}&q=${o}&image-type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return e.json()})}function m(o){o.style.display="block"}function y(o){o.style.display="none"}function h(o){return o.map(e=>`<li class = 'gallery-item'>
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
  `).join("")}console.log("Hello world");const g=document.querySelector(".form"),L=document.getElementById("input"),a=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";g.addEventListener("submit",b);function b(o){o.preventDefault();const e=L.value.trim();e&&(m(l),p(e).then(n=>{const s=n.hits.slice(0,10);a.innerHTML="",a.insertAdjacentHTML("beforeend",h(s)),new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}).catch(n=>{console.log(n),u.error({title:"Error",message:n.message})}).finally(()=>y(l)))}
//# sourceMappingURL=index.js.map
