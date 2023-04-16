import './stylesheets/reset.css';
import './stylesheets/styles.css';
import header from './javascript/header';

const content = document.querySelector('.content');

content.appendChild(header.getHeader());

header.getNavMenus().forEach((navMenu) => {
  navMenu.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
