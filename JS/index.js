const menu_hamburger_icon = document.querySelector('.hamburger_icon i');
const close_menu_icon = document.querySelector('.close_icon i');
const navigation_menu = document.querySelector('nav');

menu_hamburger_icon.addEventListener('click', () => {
   console.log("Opening menu");
   navigation_menu.classList.remove('hide');
});

close_menu_icon.addEventListener('click', () => {
   console.log("Closing Menu");
   navigation_menu.classList.add('hide');
});