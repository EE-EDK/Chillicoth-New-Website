// --- Smooth Scrolling & Active Nav Highlighting ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - (document.querySelector('.main-header').offsetHeight + document.querySelector('.main-nav').offsetHeight),
                behavior: 'smooth'
            });
        }
    });
});

const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.main-nav ul li a');
const headerAndNavHeight = document.querySelector('.main-header').offsetHeight + document.querySelector('.main-nav').offsetHeight;

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - headerAndNavHeight - 20) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});

// --- Animation Reset on Scroll-to-Top ---
const ladleContainer = document.querySelector('.ladle-container');
const pourStream = document.querySelector('.pour-stream');
let hasAnimatedOnce = false;

function resetHeroAnimations() {
    ladleContainer.style.animation = 'none';
    pourStream.style.animation = 'none';

    ladleContainer.offsetHeight;
    pourStream.offsetHeight;

    ladleContainer.style.animation = 'swing-and-tip 3.5s ease-in-out forwards';
    pourStream.style.animation = 'stream-across 1.5s ease-out 2.8s forwards';
}

setTimeout(() => {
    resetHeroAnimations();
    hasAnimatedOnce = true;
}, 100);

window.addEventListener('scroll', () => {
    if (window.scrollY <= 5 && hasAnimatedOnce) {
        resetHeroAnimations();
    }
});

// --- Project Gallery Modal ---
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', event => {
        modal.classList.add('is-open');
        modalImg.src = item.querySelector('img').src;
        captionText.innerHTML = item.querySelector('.gallery-caption').innerHTML;
    });
});

const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.classList.remove('is-open');
}
