// ---------------Variables
const nav = document.getElementById('offcanvas');
const toggleButton = document.getElementById('toggle');
const dynamicCards = document.querySelector('#dynamic-cards');
const dynamicModal = document.querySelector('#dynamic-modal');
const closeButton = document.querySelector('.close-button');
// ---------------Script for the mobile hamburguer menu offcanvas
toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggleButton.classList.toggle('active');
});

document.querySelectorAll('#offcanvas a').forEach((n) =>
  n.addEventListener('click', () => {
    nav.classList.remove('active');
    toggleButton.classList.remove('active');
  })
);

//  -------------------Modal I/O function

function toggleModal(Id) {
  const modal = document.getElementById(Id);
  modal.classList.add('active');
}

// --------------Arrays of project cards objects

const projects = [
  {
    projectId: 0,
    title: 'Multi-post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    imageBig: 'link to the image',
    imageSmall: 'link to the image',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    linkLive: 'https://www.limavfabio.github.io',
    linkSource: 'https://github.com/limavfabio/my-portfolio',
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 1,
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageBig: 'link to the image',
    imageSmall: 'link to the image',
    technologies: ['HTML', 'CSS', 'Ruby'],
    linkLive: 'https://www.limavfabio.github.io',
    linkSource: 'https://github.com/limavfabio/my-portfolio',
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 2,
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageBig: 'link to the image',
    imageSmall: 'link to the image',
    technologies: ['HTML', 'CSS', 'Ruby'],
    linkLive: 'https://www.limavfabio.github.io',
    linkSource: 'https://github.com/limavfabio/my-portfolio',
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 3,
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageBig: 'link to the image',
    imageSmall: 'link to the image',
    technologies: ['HTML', 'CSS', 'Ruby'],
    linkLive: 'https://www.limavfabio.github.io',
    linkSource: 'https://github.com/limavfabio/my-portfolio',
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 4,
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageBig: 'link to the image',
    imageSmall: 'link to the image',
    technologies: ['HTML', 'CSS', 'Ruby'],
    linkLive: 'https://www.limavfabio.github.io',
    linkSource: 'https://github.com/limavfabio/my-portfolio',
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 5,
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageBig: 'link to the image',
    imageSmall: 'link to the image',
    technologies: ['HTML', 'CSS', 'Ruby'],
    linkLive: 'https://www.limavfabio.github.io',
    linkSource: 'https://github.com/limavfabio/my-portfolio',
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 6,
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageBig: 'link to the image',
    imageSmall: 'link to the image',
    technologies: ['HTML', 'CSS', 'Ruby'],
    linkLive: 'https://www.limavfabio.github.io',
    linkSource: 'https://github.com/limavfabio/my-portfolio',
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
];

// ----------------generate project cards
for (let index = 1; index < projects.length; index += 1) {
  const project = projects[index];
  //  Generate secondary-card main div
  const secondaryCard = document.createElement('div');
  secondaryCard.setAttribute('class', 'secondary-card');
  //  Generate title
  const projectTitle = document.createElement('h3');
  const projectTitleText = document.createTextNode(project.title);
  projectTitle.setAttribute('class', 'project-title');
  projectTitle.appendChild(projectTitleText);
  secondaryCard.appendChild(projectTitle);
  //  Generate Description
  const description = document.createElement('p');
  const descriptionText = document.createTextNode(project.description);
  description.setAttribute('class', 'description');
  description.appendChild(descriptionText);
  secondaryCard.appendChild(description);
  //  Technologies buttons
  const techButtons = document.createElement('ul');
  techButtons.setAttribute('class', 'tech-buttons');
  const techs = project.technologies;
  // For each techButton, generate a li element and a text node and append it to each parent accordingly
  techs.forEach((item) => {
    const techElement = document.createElement('li');
    const techText = document.createTextNode(item);
    techElement.setAttribute('class', 'simple-button');
    techElement.appendChild(techText);
    techButtons.appendChild(techElement);
    // secondaryCard.appendChild(techButtons);
  });
  //  Generate see project button
  const projectButton = document.createElement('button');
  const btnText = document.createTextNode('See project');
  projectButton.setAttribute('class', 'project-button');
  projectButton.setAttribute('Id', project.projectId);
  projectButton.appendChild(btnText);
  secondaryCard.appendChild(projectButton);

  //  Add div to dinamicProjects
  dynamicCards.appendChild(secondaryCard);
}

// ----------------Generate Modals
function fillModal(Id) {
  const element = projects[Id];
  //  modalHead, a div for the title and techButtons
  const modalHead = document.createElement('div');
  modalHead.setAttribute('class', 'modal-head');
  dynamicModal.appendChild(modalHead);
  const modalTitle = document.createElement('h2');
  const titleText = document.createTextNode(element.title);
  modalTitle.appendChild(titleText);
  modalHead.appendChild(modalTitle);
  //  modalHead techButtons
  const techButtons = document.createElement('ul');
  techButtons.setAttribute('class', 'tech-buttons');
  const techs = element.technologies;
  techs.forEach((item) => {
    const techElement = document.createElement('li');
    const techText = document.createTextNode(item);
    techElement.appendChild(techText);
    techButtons.appendChild(techElement);
    techElement.setAttribute('class', 'simple-button');
    modalHead.appendChild(techButtons);
  });
  //  mainElement, a div for image + description + links
  const mainElement = document.createElement('div');
  mainElement.setAttribute('class', 'modal-main-element');
  dynamicModal.appendChild(mainElement);
  //  Modal Image
  const modalImageElement = document.createElement('img');
  modalImageElement.setAttribute('src', 'media/modal-image-big.png');
  mainElement.appendChild(modalImageElement);
  //  bodyElement creates a div for description and links
  const bodyElement = document.createElement('div');
  bodyElement.setAttribute('class', 'body-element');
  mainElement.appendChild(bodyElement);
  //  Modal description
  const modalDescription = document.createElement('p');
  const modalDescriptionText = document.createTextNode(
    element.modalDescription
  );
  modalDescription.appendChild(modalDescriptionText);
  bodyElement.appendChild(modalDescription);
  //  linksElement creates a div for links
  const linksElement = document.createElement('div');
  linksElement.setAttribute('class', 'links-element');
  bodyElement.appendChild(linksElement);
  //  Generate links
  const linkLiveElement = document.createElement('a');
  const linkLiveText = document.createTextNode('See Live');
  const linkLiveIcon = document.createElement('div');
  linkLiveIcon.setAttribute('class', 'image-icon1');
  linkLiveElement.setAttribute('href', element.linkLive);
  linkLiveElement.setAttribute('class', 'link-live');
  const linkSourceIcon = document.createElement('div');
  linkSourceIcon.setAttribute('class', 'image-icon2');
  const linkSourceElement = document.createElement('a');
  const linkSourceText = document.createTextNode('See Source');
  linkSourceElement.setAttribute('href', element.linkSource);
  linkSourceElement.setAttribute('class', 'link-source-element');
  linkLiveElement.appendChild(linkLiveText);
  linkSourceElement.appendChild(linkSourceText);
  linkLiveElement.appendChild(linkLiveIcon);
  linkSourceElement.appendChild(linkSourceIcon);
  linksElement.appendChild(linkLiveElement);
  linksElement.appendChild(linkSourceElement);
  //  Close button for modal
  const closeButton = document.createElement('button');
  const closeButtonX = document.createTextNode('X');
  closeButton.setAttribute('id', 'x-button');
  closeButton.setAttribute('class', 'close-button');
  closeButton.appendChild(closeButtonX);
  dynamicModal.appendChild(closeButton);
}

function showModal(Id) {
  fillModal(Id);
  toggleModal('modal-section');
}

// eventListener for dynamic cards generator
dynamicCards.addEventListener('click', (event) => {
  const elementId = event.target.id;
  // But only alert for elements that have a .project-button class
  if (event.target.classList.contains('project-button')) {
    showModal(elementId);
  }
});

window.addEventListener('click', (event) => {
  const modal = document.querySelector('#modal-section');
  if (event.target === modal || event.target.className === 'close-button') {
    modal.classList.remove('active');
  }
});
