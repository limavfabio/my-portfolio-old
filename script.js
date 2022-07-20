// ---------------Variables
const nav = document.getElementById('offcanvas');
const toggleButton = document.getElementById('toggle');
const dynamicCards = document.querySelector('#dynamic-cards');

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
  techs.forEach((tech) => {
    const techElement = document.createElement('li');
    const techText = document.createTextNode(tech);
    techElement.setAttribute('class', 'simple-button');
    techElement.appendChild(techText);
    techButtons.appendChild(techElement);
    secondaryCard.appendChild(techButtons);
  });
  //  Generate see project button
  const projectButton = document.createElement('button');
  const btnText = document.createTextNode('See project');
  projectButton.setAttribute('class', 'project-button');
  projectButton.setAttribute('id', project.projectId);
  projectButton.appendChild(btnText);
  secondaryCard.appendChild(projectButton);

  //  Add div to dinamicProjects
  dynamicCards.appendChild(secondaryCard);
}
