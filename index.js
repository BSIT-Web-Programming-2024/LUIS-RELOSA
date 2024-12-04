const home = document.getElementById('home');
const model1 = document.getElementById('model1');

window.addEventListener('scroll',function(){
const value = window.scrollY;
home.style.marginLeft= value * 1.5 + 'px';
model1.style.marginLeft= value * 1.6 + 'px';
})

let item = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .items');

let countItem = item.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem- 1;
    }
    showSlider();

}


function showSlider(){
    
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .items.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    item[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

}

thumbnails.forEach((thumbnails, index) => {
    thumbnails.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    } )
})