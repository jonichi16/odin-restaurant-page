const contacts = (() => {
  const contactsContainer = document.createElement('div');
  const header = document.createElement('h1');
  const content = document.createElement('p');

  const contactInfo = [
    '123 Main Street',
    'Anytown, USA 12345',
    '(555) 555-5555',
    'info@atomiceatery.com',
    'Open Monday-Saturday, 11am-10pm',
    'Closed Sunday',
  ];

  contactsContainer.classList.add('contacts');
  header.classList.add('title');
  content.classList.add('description');

  header.textContent = 'Contact Us';
  contactInfo.forEach((info) => {
    const infoContainer = document.createElement('div');

    infoContainer.textContent = info;

    content.appendChild(infoContainer);
  });

  contactsContainer.append(header, content);

  const getPage = () => contactsContainer;

  return {
    getPage,
  };
})();

export default contacts;
