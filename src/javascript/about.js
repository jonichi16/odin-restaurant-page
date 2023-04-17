const about = (() => {
  const aboutContainer = document.createElement('div');
  const header = document.createElement('h1');
  const content = document.createElement('p');

  aboutContainer.classList.add('about');
  header.classList.add('title');
  content.classList.add('description');

  header.textContent = 'About Us';
  content.textContent =
    'Atomic Eatery was founded in 2010 by two friends who shared a passion for retro Americana. They wanted to create a restaurant that celebrated the classic diners of the 1950s, complete with checkered floors, vinyl booths, and vintage decor. Today, Atomic Eatery is a beloved institution in the downtown area, known for its delicious food and welcoming atmosphere.';

  aboutContainer.append(header, content);
  const getPage = () => aboutContainer;

  return {
    getPage,
  };
})();

export default about;
