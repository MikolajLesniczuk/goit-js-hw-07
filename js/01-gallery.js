import { galleryItems } from './gallery-items.js';

const Gallery = document.querySelector('.gallery')



const createGallery = () => {
  
    let newGallery = [];

galleryItems.forEach((e ,i) =>{
const {preview , original , description} = galleryItems[i]

const li = document.createElement('li');
const a = document.createElement('a')
const img = document.createElement('img')

li.classList.add('gallery__item')
a.classList.add('gallery__link')
img.classList.add('gallery__image')

a.setAttribute('href' , original)
img.setAttribute('src', preview)
img.setAttribute('data-source',original)
img.setAttribute('alt',description )

li.append(a)
a.append(img)

newGallery.push(li)


})
Gallery.append(...newGallery)

}

const Event = (event) => {
  event.preventDefault();
  if(event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(

    `<img src="${event.target.dataset.source}">`
    
  );

  instance.show();

  const visible = basicLightbox.visible();
  if (visible) {
    document.addEventListener('keyup', ( {key} ) => {
      if (key === 'Escape') {
        instance.close();
      }
    });
  }

}

createGallery()

Gallery.addEventListener("click", Event);




console.log(galleryItems);





