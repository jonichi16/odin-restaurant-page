import './stylesheets/reset.css';
import './stylesheets/styles.css';
import header from './javascript/header';
import main from './javascript/main-element';
import footer from './javascript/footer';
import home from './javascript/home';

const content = document.querySelector('.content');
const mainContainer = main.getMain();

mainContainer.appendChild(home.getPage());

content.append(header.getHeader(), mainContainer, footer.getFooter());

const pageLoader = (page) => {
  let pageLoad = null;
  if (page === 'home') {
    pageLoad = home.getPage();
  }

  return pageLoad;
};

header.getNavMenus().forEach((navMenu) => {
  navMenu.addEventListener('click', (e) => {
    e.preventDefault();

    const page = pageLoader(navMenu.id);

    if (page) {
      main.appendPage(pageLoader(navMenu.id));
    }
  });
});
