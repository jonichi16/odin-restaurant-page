import MenuOne from '../images/menu/menu-1.jpg';
import MenuTwo from '../images/menu/menu-2.jpg';
import MenuThree from '../images/menu/menu-3.jpg';
import MenuFour from '../images/menu/menu-4.jpg';
import MenuFive from '../images/menu/menu-5.jpg';
import MenuSix from '../images/menu/menu-6.jpg';

const menu = (() => {
  const menuContainer = document.createElement('div');
  const menuItemContainer = document.createElement('div');
  const menuList = [
    {
      img: MenuOne,
      name: 'Bacon Cheeseburger',
      price: '$11.99',
      description:
        'Our classic burger topped with crispy bacon and melted American cheese for an extra burst of flavor.',
    },
    {
      img: MenuTwo,
      name: 'Atomic Wings',
      price: '$8.99 (6 pcs)',
      description:
        'Crispy fried chicken wings tossed in our signature spicy Atomic sauce, served with celery and blue cheese dressing on the side.',
    },
    {
      img: MenuThree,
      name: 'Apple Pie',
      price: '$5.99 per slice',
      description:
        'A classic American dessert made with fresh apples, cinnamon, and a flaky crust, served warm with a scoop of vanilla ice cream on top.',
    },
    {
      img: MenuFour,
      name: 'Atomic Club',
      price: '$10.99',
      description:
        'A sandwich made with roasted turkey, crispy bacon, lettuce, tomato, and mayo, served on toasted white bread.',
    },
    {
      img: MenuFive,
      name: 'Chocolate Peanut Butter Shake',
      price: '$6.99',
      description:
        'A thick and creamy milkshake made with vanilla ice cream, chocolate syrup, and creamy peanut butter, topped with whipped cream and a cherry.',
    },
    {
      img: MenuSix,
      name: 'Sweet Tea',
      price: '$2.99 (16 oz)',
      description:
        'A refreshing and sweet iced tea made with our house blend of black tea, served over ice.',
    },
  ];

  menuContainer.classList.add('menu');
  menuItemContainer.classList.add('menu-item');

  menuList.forEach((menuImage) => {
    const menuImageContainer = document.createElement('div');
    const menuItem = new Image();
    const details = document.createElement('div');
    const namePrice = document.createElement('div');
    const name = document.createElement('h2');
    const price = document.createElement('p');
    const description = document.createElement('p');

    menuImageContainer.classList.add('menu-item-card');
    menuItem.classList.add('menu-img');
    details.classList.add('details');
    namePrice.classList.add('menu-name-price');
    name.classList.add('menu-name');
    price.classList.add('menu-price');
    description.classList.add('menu-description');

    menuItem.src = menuImage.img;
    name.textContent = menuImage.name;
    price.textContent = menuImage.price;
    description.textContent = menuImage.description;

    namePrice.append(name, price);
    details.append(namePrice, description);
    menuImageContainer.append(menuItem, details);
    menuItemContainer.appendChild(menuImageContainer);
  });

  menuContainer.appendChild(menuItemContainer);

  const getPage = () => menuContainer;

  return {
    getPage,
  };
})();

export default menu;
