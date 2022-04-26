// Parallax
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.02 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    nav.style.top = value * 0.5 + 'px';
})

const twitter = document.getElementsByClassName('twitter');
const ig = document.getElementsByClassName('ig');
const dc = document.getElementsByClassName('dc');

twitter[0].addEventListener('click', function () {
    window.open("https://twitter.com/xRdtya", '_blank');
})

ig[0].addEventListener('click', function () {
    window.open("https://instagram.com/rdittty", '_blank');
})

dc[0].addEventListener('click', function () {
    window.open("https://discordapp.com/users/476384299290198026/", '_blank');
})