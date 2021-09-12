'use strict';

const images = [
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

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', next)
document.querySelector('#next').addEventListener('click', previous)
