const main = (() => {
  const mainEl = document.createElement('main');

  mainEl.classList.add('main');

  const getMain = () => mainEl;

  const appendPage = (page) => {
    mainEl.textContent = '';
    mainEl.appendChild(page);
  };

  return {
    getMain,
    appendPage,
  };
})();

export default main;
