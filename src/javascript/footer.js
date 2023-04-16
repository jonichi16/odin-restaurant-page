const footer = (() => {
  const footerEl = document.createElement('footer');
  const createdBy = document.createElement('p');
  const link = document.createElement('a');

  footerEl.classList.add('footer');
  createdBy.classList.add('create-by');
  link.classList.add('github-link');

  createdBy.textContent = 'Created by: ';
  link.href = 'https://github.com/jonichi16';
  link.textContent = 'jonichi';

  createdBy.appendChild(link);
  footerEl.appendChild(createdBy);

  const getFooter = () => footerEl;

  return {
    getFooter,
  };
})();

export default footer;
