// Dark mode
const checkbox = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

checkbox.addEventListener('click', function () {
    checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
    if(checkbox.checked) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
})

// Local storage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  checkbox.checked = true;
} else {
  document.documentElement.classList.remove('dark')
  checkbox.checked = false;
}


// Typewriter
document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter
    var dataText = ["Raditya", "Full Stack Developer"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h3
            document.querySelector("#home span").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 1000);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 0);
        }
        // check if dataText[i] exists
        if (dataText[i]) {
            if (i < dataText[i].length) {
                // text exists! start typewriter animation
                typeWriter(dataText[i], 0, function () {
                    // after callback (and whole text has been animated), start next text
                    StartTextAnimation(i + 1);
                });
            }
        }
    }
    // start the text animation
    StartTextAnimation(0);
});

// Navbar
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}
// Hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
})

window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})