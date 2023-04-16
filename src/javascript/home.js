const home = (() => {
  const homeContainer = document.createElement('div');
  const title = document.createElement('h1');
  const resto = document.createElement('span');
  const description = document.createElement('p');

  homeContainer.classList.add('home');
  title.classList.add('title');
  resto.classList.add('resto');
  description.classList.add('description');

  title.textContent = 'Welcome to ';
  resto.textContent = 'Atomic Eatery';
  description.textContent =
    'Located in the heart of downtown, Atomic Eatery is a retro-themed restaurant that specializes in classic American comfort food. Our menu is packed with mouth-watering dishes that will transport you back to the 1950s, including burgers, buffalo wings, and homemade pies.';

  title.appendChild(resto);
  homeContainer.append(title, description);

  const getPage = () => homeContainer;

  return {
    getPage,
  };
})();

export default home;
