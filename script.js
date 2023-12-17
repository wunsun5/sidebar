document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', e => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('show');
    })
});

document.querySelector('.bx-menu').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('close');
    document.querySelectorAll('.sidebar .nav-link li').forEach(submenu => {
        submenu.classList.remove('show');
    })
});