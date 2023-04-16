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

  headerContainer.classList.add('header');
  nav.classList.add('nav');
  ul.classList.add('navMenu');
  logo.classList.add('logo');

  logo.textContent = 'Atomic Eatery';

  navMenu.forEach((menu) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.classList.add('navItem');

    a.href = menu.url;
    a.textContent = menu.label;
    a.id = menu.label.toLowerCase();

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(logo);
  nav.appendChild(ul);
  headerContainer.appendChild(nav);

  const getHeader = () => headerContainer;

  const getNavMenus = () => {
    const navMenus = document.querySelectorAll('.navItem');
    return navMenus;
  };

  return {
    getHeader,
    getNavMenus,
  };
})();

export default header;
