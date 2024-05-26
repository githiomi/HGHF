const theme_icon = document.querySelector('.theme-icon i');
const body = document.querySelector('body');
const menu_hamburger_icon = document.querySelector('.menu-icon i');
const close_menu_icon = document.querySelector('.close-icon i');
const navigation_menu = document.querySelector('nav');

theme_icon.addEventListener('click', () => {
   if (theme_icon.classList.contains('bxs-sun')) {
      theme_icon.classList.remove('bxs-sun')
      theme_icon.classList.add('bxs-moon')

      body.classList.toggle('dark_mode');
      return
   }

   theme_icon.classList.remove('bxs-moon')
   theme_icon.classList.add('bxs-sun')
   body.classList.toggle('dark_mode');

});

menu_hamburger_icon.addEventListener('click', () => {
   navigation_menu.classList.remove('hide');
});

close_menu_icon.addEventListener('click', () => {
   navigation_menu.classList.add('hide');
});