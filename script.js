// ---------------Variables
const nav = document.getElementById('offcanvas');
const toggleButton = document.getElementById('toggle');
const dynamicCards = document.querySelector('#dynamic-cards');

// ---------------Script for the mobile hamburguer menu offcanvas
toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggleButton.classList.toggle('active');
});

document.querySelectorAll('#offcanvas a').forEach((n) => n.addEventListener('click', () => {
  nav.classList.remove('active');
  toggleButton.classList.remove('active');
}));

// --------------Arrays of project cards objects

const projects = [
  {
    projectId: 0,
    title: 'Multi-post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    linkLive: 'https://www.limavfabio.github.io',
    linkSource: 'https://github.com/limavfabio/my-portfolio',
    modalDescription:
      'Lorem Ipsum is simply dummy tince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    projectId: 1,
    title: 'Project number 01 test test',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['HTML', 'CSS', 'Ruby'],
    linkLive: 'https://www.limavfabio.github.io',
    linkSource: 'https://github.com/limavfabio/my-portfolio',
    modalDescription:
      'Modal description of project niumber 01 ad not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    projectId: 2,
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['HTML', 'CSS', 'Ruby'],
    linkLive: 'https://www.limavfabio.github.io',
    linkSource: 'https://github.com/limavfabio/my-portfolio',
    modalDescription:
      "This is the second project modal, you can notice that the website is generating each modal based on the project Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 3,
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['HTML', 'CSS', 'Ruby'],
    linkLive: 'https://www.limavfabio.github.io',
    linkSource: 'https://github.com/limavfabio/my-portfolio',
    modalDescription:
      "his is the third project modal, you can notice that the website is generating each modal based on the projectLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 4,
    title: 'Profesional Art n4 Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['HTML', 'CSS', 'Ruby'],
    linkLive: 'https://www.limavfabio.github.io',
    linkSource: 'https://github.com/limavfabio/my-portfolio',
    modalDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industr00s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    projectId: 5,
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
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
    technologies: ['HTML', 'CSS', 'Ruby'],
    linkLive: 'https://www.limavfabio.github.io',
    linkSource: 'https://github.com/limavfabio/my-portfolio',
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
];

// ----------------generate project cards
for (let i = 1; i < projects.length; i += 1) {
  const project = projects[i];
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
  // For each techButton, generate a li element and a
  // text node and append it to each parent accordingly
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
  projectButton.setAttribute('onclick', `createModal(${project.projectId})`);
  projectButton.appendChild(btnText);
  secondaryCard.appendChild(projectButton);

  //  Add div to dinamicProjects
  dynamicCards.appendChild(secondaryCard);
}

// ----------------Generate Modals
function createModal(Id) {
  const element = projects[Id];
  //  Create modal-section, a div enclosing the modal
  const modalSection = document.createElement('div');
  modalSection.setAttribute('class', 'modal-section active');
  modalSection.setAttribute('id', 'modal-section');
  //  Create #dynamic-modal.modal-container, the modal white background
  const modalContainer = document.createElement('div');
  modalContainer.setAttribute('class', 'modal-container');
  modalContainer.setAttribute('id', 'dynamic-modal');
  modalSection.appendChild(modalContainer);
  // Create .modal-head, a div enclosing the close button, the title and the techbuttons
  const modalHead = document.createElement('div');
  modalHead.setAttribute('class', 'modal-head');
  modalContainer.appendChild(modalHead);
  // Create .buttonX, the close button
  const buttonX = document.createElement('button');
  const buttonXText = document.createTextNode('X');
  buttonX.setAttribute('class', 'buttonX');
  buttonX.setAttribute('onclick', 'closeModal()');
  buttonX.appendChild(buttonXText);
  modalHead.appendChild(buttonX);
  // Create h2, the title
  const modalTitle = document.createElement('h2');
  const modalTitleText = document.createTextNode(element.title);
  modalTitle.appendChild(modalTitleText);
  modalHead.appendChild(modalTitle);
  // Create ul.tech-buttons
  const modalTechButtons = document.createElement('ul');
  modalTechButtons.setAttribute('class', 'tech-buttons');
  modalHead.appendChild(modalTechButtons);
  // For each techButton, generate a li element and a text node and append it to ul.tech-buttons
  const techs = element.technologies;
  techs.forEach((item) => {
    const techButtons = document.querySelector('.tech-buttons');
    const techElement = document.createElement('li');
    const techText = document.createTextNode(item);
    techElement.appendChild(techText);
    techButtons.appendChild(techElement);
    techElement.setAttribute('class', 'simple-button');
    modalTechButtons.appendChild(techElement);
  });
  //  mainElement, a div for image + .modal-p-btns, a div enclosing the description and the buttons
  const mainElement = document.createElement('div');
  mainElement.setAttribute('class', 'main-element');
  modalContainer.appendChild(mainElement);
  //  Modal Image
  const modalImageElement = document.createElement('img');
  modalImageElement.setAttribute('src', 'media/modal-image-big.png');
  mainElement.appendChild(modalImageElement);
  //  .modal-p-btns creates a div for description and links
  const modalPBtns = document.createElement('div');
  modalPBtns.setAttribute('class', 'modal-p-btns');
  mainElement.appendChild(modalPBtns);
  //  Modal description
  const modalDescription = document.createElement('p');
  const modalDescriptionText = document.createTextNode(
    element.modalDescription,
  );
  modalDescription.appendChild(modalDescriptionText);
  modalPBtns.appendChild(modalDescription);
  //  linksElement creates a ul for links
  const linksElement = document.createElement('ul');
  modalPBtns.appendChild(linksElement);
  //  Generate links
  const linkLiveElement = document.createElement('li');
  linkLiveElement.setAttribute('class', 'project-button');
  const linkLiveElementText = document.createTextNode('See Live');
  const liveElementIcon = document.createElement('img');
  liveElementIcon.setAttribute('src', 'media/Icons/see-live-icon.svg');
  linkLiveElement.appendChild(linkLiveElementText);
  linkLiveElement.appendChild(liveElementIcon);
  linksElement.appendChild(linkLiveElement);
  const linkSourceElement = document.createElement('li');
  linkSourceElement.setAttribute('class', 'project-button');
  const linkSourceElementText = document.createTextNode('See Source');
  const sourceElementIcon = document.createElement('img');
  sourceElementIcon.setAttribute('src', 'media/Icons/source-icon-github.svg');
  linkSourceElement.appendChild(linkSourceElementText);
  linkSourceElement.appendChild(sourceElementIcon);
  linksElement.appendChild(linkSourceElement);
  // Append modal-section to body
  const body = document.querySelector('body');
  body.appendChild(modalSection);
}
//  -------------------Modal Open/Close function

function closeModal() {
  const modal = document.getElementById('modal-section');
  modal.remove();
}

document.querySelector('label').addEventListener('click', () => {
  createModal();
  closeModal();
});

// ------------------- form validator

const form = document.querySelector('form');
const error = document.querySelector('p.error');
const email = document.querySelector('#mail');
function validateEmail() {
  const emailValue = email.value.trim();
  if (emailValue !== emailValue.toLowerCase()) {
    return false;
  }
  return true;
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { email } = form.elements;
  const isValidEmail = validateEmail(email);
  if (isValidEmail) {
    error.style.display = 'none';
    form.submit();
  } else {
    error.style.display = 'block';
    error.innerHTML = '*Please type email adress in lowercase';
  }
});

// ------------------- Form Local Storage

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const fullName = document.getElementById('fullname');
const FormEmail = document.getElementById('mail');
const messageForm = document.querySelector('#msg');
function handleChange() {
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    fullName: fullName.value,
    email: FormEmail.value,
    message: messageForm.value,
  };
  localStorage.setItem('form', JSON.stringify(formData));
}
document.addEventListener('DOMContentLoaded', () => {
  const formDataValue = localStorage.getItem('form');
  if (formDataValue) {
    const formObject = JSON.parse(formDataValue);
    firstName.value = formObject.firstName;
    lastName.value = formObject.lastName;
    fullName.value = formObject.fullName;
    FormEmail.value = formObject.email;
    messageForm.value = formObject.message;
  }
});
  firstName.onchange = handleChange;
  lastName.onchange = handleChange;
  fullName.onchange = handleChange;
  FormEmail.onchange = handleChange;
  messageForm.onchange = handleChange;
