
let menuToggle = document.getElementById('menuToggle');
let navigation = document.querySelector('.navigation');
let header = document.querySelector('.header');


menuToggle.onclick = function(){
    header.classList.toggle('open');
    searchBtn.classList.remove('active');
}