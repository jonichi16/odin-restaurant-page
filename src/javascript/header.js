const header = (() => {
  const navMenu = [
    { label: 'Home', url: '#' },
    { label: 'Menu', url: '#' },
    { label: 'About Us', url: '#' },
    { label: 'Contacts', url: '#' },
  ];

  const headerContainer = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const logo = document.createElement('div');
  const navToggle = document.createElement('div');
  const hamburgerMenu = document.createElement('div');

  headerContainer.classList.add('header', 'relative');
  nav.classList.add('nav');
  ul.classList.add('nav-menu', 'hidden');
  logo.classList.add('logo');
  navToggle.classList.add('nav-toggle');
  hamburgerMenu.classList.add('hamburger');

  logo.textContent = 'Atomic Eatery';

  navMenu.forEach((menu) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.classList.add('nav-item');

    a.href = menu.url;
    a.textContent = menu.label;
    a.id = menu.label.toLowerCase();

    li.appendChild(a);
    ul.appendChild(li);
  });

  navToggle.addEventListener('click', () => {
    ul.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target)) {
      if (!ul.contains(e.target)) {
        ul.classList.add('hidden');
      }
    }
  });

  navToggle.appendChild(hamburgerMenu);
  nav.append(logo, ul, navToggle);
  headerContainer.appendChild(nav);

  const getHeader = () => headerContainer;

  const getNavMenus = () => {
    const navMenus = document.querySelectorAll('.nav-item');
    return navMenus;
  };

  const closeMenu = () => {
    ul.classList.add('hidden');
  };

  return {
    getHeader,
    getNavMenus,
    closeMenu,
  };
})();

export default header;
