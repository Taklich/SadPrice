let ButS = document.querySelector('.ButS');
let ButR = document.querySelector('.ButR');
let ButB = document.querySelector('.ButB');
let ButAll = document.querySelector('.ButAll');
let ButStash = document.querySelector('.ButStach');
let cartClose = document.querySelector('.cartClose');



let cardBut = document.querySelectorAll('.cardBut');
let collection = document.querySelectorAll('.cardCol');
let cart = document.querySelector('.wrCart');
let cartUl = document.querySelector('.cartUl');

ButS.addEventListener('click',function(){
    collection.forEach(element => {
        element.classList.remove('invisible');
    });
    collection.forEach(element => {
        if(element.className.indexOf('sqr') === -1) {
            element.classList.toggle('invisible');
        }
    });
})
ButR.addEventListener('click',function(){
    collection.forEach(element => {
        element.classList.remove('invisible');
    });
    collection.forEach(element => {
        if(element.className.indexOf('round') === -1) {
            element.classList.toggle('invisible');
        }
    });
})
ButB.addEventListener('click',function(){
    collection.forEach(element => {
        element.classList.remove('invisible');
    });
    collection.forEach(element => {
        if(element.className.indexOf('romb') === -1) {
            element.classList.toggle('invisible');
        }
    });
})
ButAll.addEventListener('click',function(){
    collection.forEach(element => {
        element.classList.remove('invisible');
    });
})
ButStash.addEventListener('click', function(){
    cart.classList.toggle('hideCart');
})
cartClose.addEventListener('click', function(){
    cart.classList.toggle('hideCart')
})

{
let stash = 0;
let sumcost = 0;
console.log(stash, sumcost);
function stashupd(stash){
    ButStash.textContent = `Корзина: ${stash} на ${sumcost}$`;
    
};
cardBut.forEach(function(item, i, arr){
    console.log(stash);
    cardBut[i].addEventListener('click', function(){
        stash = stash+1;
        sumcost = sumcost + Number(this.previousSibling.previousSibling.textContent.slice(0,length-1));
        stashupd(stash,sumcost);
        console.log(this.parentElement.children[0].textContent);
        cartUl.insertAdjacentHTML(
            'beforeend',
            `<li>${this.parentElement.children[0].textContent} за ${this.previousSibling.previousSibling.textContent.slice(0,length-1)}$ </li>`
        );
    })
})
}