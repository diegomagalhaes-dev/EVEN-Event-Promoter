const btnMobile = document.getElementById('btn-mobile');

let aux = true;
function toggleMenu(event) {
    if (document.body.style.overflow !== 'hidden') { document.body.style.overflow = 'hidden' } else { document.body.style.overflow = 'initial' }
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
// document.body.style.overflow = aux ? "hidden" : "initial"

