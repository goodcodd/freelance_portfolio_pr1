const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './img/icons/nav-close.svg';
    } else {
        navBtnImg.src = './img/icons/nav-open.svg';
    }
}

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(function(el) {

    el.onclick = () => {
        [].forEach.call(navLink, function(link) {
            link.classList.remove("active");
        });
        el.classList.add('active');
        if (nav.classList.toggle('open')) {
            navBtnImg.src = './img/icons/nav-close.svg';
        } else {
            navBtnImg.src = './img/icons/nav-open.svg';
        }
    }
});
