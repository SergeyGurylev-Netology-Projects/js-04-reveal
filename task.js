const reveals = Array.from(document.querySelectorAll('.reveal'));
document.addEventListener('scroll', onScroll);

function onScroll(e) {
    reveals.forEach(el => {
        const {top, bottom} = el.getBoundingClientRect();
        const isVisible= top <= window.innerHeight && bottom >= 0;

        if (el.classList.contains('reveal_active') !== isVisible) {
            el.classList.toggle('reveal_active');
        }
    })
}