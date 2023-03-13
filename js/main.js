console.log('hello');
let burger = document.querySelector('.burger'),
burger__menu = document.querySelector('.burger__menu');
console.log(burger);
console.log(burger__menu);
burger.addEventListener('click', function () {
burger__menu.classList.toggle('show');
})
let goods = document.querySelectorAll('.card');
console.log(goods);
for (let i =0; i < goods.length; i++){
    goods[i];
    goods[i].addEventListener('mouseenter', function () {
       goods[i].classList.add('wb');
    });
    goods[i].addEventListener('mouseleave', function () {
        goods[i].classList.remove('wb');
     });
} 


