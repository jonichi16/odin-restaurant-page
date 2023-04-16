import './stylesheets/reset.css';
import './stylesheets/styles.css';
import header from './javascript/header';
import main from './javascript/main-element';

const content = document.querySelector('.content');

content.append(header.getHeader(), main.getMain());

header.getNavMenus().forEach((navMenu) => {
  navMenu.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
