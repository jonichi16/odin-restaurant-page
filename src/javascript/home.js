const home = (() => {
  const homeContainer = document.createElement('div');
  const title = document.createElement('h1');
  const description = document.createElement('p');
  const container = document.createElement('div');

  homeContainer.classList.add('home');
  title.classList.add('title');
  description.classList.add('description');
  container.classList.add('container');

  title.textContent = 'Welcome to Atomic Eatery!';
  description.textContent =
    'Located in the heart of downtown, Atomic Eatery is a retro-themed restaurant that specializes in classic American comfort food. Our menu is packed with mouth-watering dishes that will transport you back to the 1950s, including burgers, buffalo wings, and homemade pies.';

  container.append(title, description);
  homeContainer.appendChild(container);

  const getPage = () => homeContainer;

  return {
    getPage,
  };
})();

export default home;
