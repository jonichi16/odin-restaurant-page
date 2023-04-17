import './stylesheets/reset.css';
import './stylesheets/styles.css';
import header from './javascript/header';
import main from './javascript/main-element';
import footer from './javascript/footer';
import home from './javascript/home';
import menu from './javascript/menu';
import about from './javascript/about';

const content = document.querySelector('.content');
const mainContainer = main.getMain();

mainContainer.appendChild(home.getPage());

content.append(header.getHeader(), mainContainer);
content.append(footer.getFooter());

const pageLoader = (page) => {
  let pageLoad = null;
  if (page === 'home') {
    pageLoad = home.getPage();
  } else if (page === 'menu') {
    pageLoad = menu.getPage();
  } else if (page === 'about') {
    pageLoad = about.getPage();
  }

  return pageLoad;
};

header.getNavMenus().forEach((navMenu) => {
  navMenu.addEventListener('click', (e) => {
    e.preventDefault();
    const page = pageLoader(navMenu.id);

    if (page) {
      main.appendPage(pageLoader(navMenu.id));
      header.closeMenu();
    }
  });
});
