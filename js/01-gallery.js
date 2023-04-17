import { galleryItems } from './gallery-items.js';
// Change code below this line
const Gallery = document.querySelector('.gallery')



const createGallery = () => {
  
    let newGallery = [];

galleryItems.forEach((e ,i) =>{
const {preview , original , description} = galleryItems[i]

const div = document.createElement('div');
const a = document.createElement('a')
const img = document.createElement('img')

div.classList.add('gallery__item')
a.classList.add('gallery__link')
img.classList.add('gallery__image')

a.setAttribute('href' , original)
img.setAttribute('src', preview)
img.setAttribute('data-source',original)
img.setAttribute('alt',description )

div.append(a)
a.append(img)

newGallery.push(div)


})
Gallery.append(...newGallery)

}
Gallery.addEventListener("click", (event) => {
    event.preventDefault();
 
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
  });

createGallery()


console.log(galleryItems);
