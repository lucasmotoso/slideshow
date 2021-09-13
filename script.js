'use strict';
alert('Seja bem vindo! Esse é um slideshow no estilo carrosel feito em HTML, CSS e JS Puro. Se estiver visualizando em um aparelho Mobile, favor mudar a orientação para PAISAGEM.')
const images = [
    { 'id': '0', 'url':'./img/dbz0.gif'},
    { 'id': '1', 'url':'./img/dbz0.jpg'},
    { 'id': '2', 'url':'./img/dbz1.jpg'},
    { 'id': '3', 'url':'./img/dbz2.jpg'},
    { 'id': '4', 'url':'./img/dbz3.jpg'},
    { 'id': '5', 'url':'./img/dbz4.jpg'},
    { 'id': '6', 'url':'./img/dbz5.jpg'},
    { 'id': '7', 'url':'./img/dbz6.jpg'},
    { 'id': '8', 'url':'./img/dbz7.jpg'},
    { 'id': '9', 'url':'./img/dbz8.jpg'},
    { 'id': '10', 'url':'./img/dbz9.jpg'},
    { 'id': '11', 'url':'./img/dbz10.jpg'},
    { 'id': '12', 'url':'./img/dbz11.jpg'},
    { 'id': '13', 'url':'./img/dbz12.jpg'},
    { 'id': '14', 'url':'./img/dbz13.jpg'},
    { 'id': '15', 'url':'./img/dbz14.jpg'},
    { 'id': '16', 'url':'./img/dbz1.gif'},
    { 'id': '17', 'url':'./img/dbz2.gif'},
]

const containerItems = document.querySelector('#container-items');




const loadImages = (images, container ) => {
    images.forEach ( image => {
        container.innerHTML += ` 
            <div class='item'>
                <img src='${image.url}'
            
            </div>    
            `
        
    });
}



loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}


let next =  () => {
    
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
    
}
let play =  () => {
    
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
    
}





document.querySelector('#previous').addEventListener('click',next)
document.querySelector('#next').addEventListener('click', previous)
document.querySelector('#play').addEventListener('click', setInterval(play, 10000))

