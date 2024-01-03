// Menu 

let menubtn = document.querySelector('#menubtn');
let menu = document.querySelector('.menu');
let $main = document.querySelector('main');
let menucontent = document.querySelector('.menu-content');

menu.style.width = '0%';
menu.style.display = 'none';
menucontent.style.width = '0%';

menubtn.addEventListener('click', () => {
    menubtn.style.display = 'none';
    menu.style.display = 'block'
    menu.style.width = '100%';
    menucontent.style.width = '80%';
    $main.style.display = 'none';
});

menu.addEventListener('click', () => {
    menubtn.style.display = 'block';
    menu.style.display = 'none'
    menu.style.width = '0%';
    menucontent.style.width = '0%';
    $main.style.display = 'block';
});

// Menu

// Start Accardions 
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        const content = item.querySelector('.accordion-content');
        content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
    });
});
// End Accardions