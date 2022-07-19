// ---------------Variables
const nav = document.getElementById("offcanvas");
const toggleButton = document.getElementById("toggle");

// ---------------Script for the mobile hamburguer menu offcanvas
toggleButton.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggleButton.classList.toggle("active");
});

document.querySelectorAll("#offcanvas a").forEach((n) =>
  n.addEventListener("click", () => {
    nav.classList.remove("active");
    toggleButton.classList.remove("active");
  })
);

// --------------Arrays of project cards objects

const projects = [
  {
    projectId: 0,
    name: "Multi-post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    imageBig: "link to the image",
    imageSmall: "link to the image",
    technologies: ["HTML", "CSS", "Bootstrap"],
    linkLiveVersion: "https://www.limavfabio.github.io",
    linkSource: "https://github.com/limavfabio/my-portfolio",
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 1,
    name: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageBig: "link to the image",
    imageSmall: "link to the image",
    technologies: ["HTML", "CSS", "Ruby"],
    linkLiveVersion: "https://www.limavfabio.github.io",
    linkSource: "https://github.com/limavfabio/my-portfolio",
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 2,
    name: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageBig: "link to the image",
    imageSmall: "link to the image",
    technologies: ["HTML", "CSS", "Ruby"],
    linkLiveVersion: "https://www.limavfabio.github.io",
    linkSource: "https://github.com/limavfabio/my-portfolio",
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 3,
    name: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageBig: "link to the image",
    imageSmall: "link to the image",
    technologies: ["HTML", "CSS", "Ruby"],
    linkLiveVersion: "https://www.limavfabio.github.io",
    linkSource: "https://github.com/limavfabio/my-portfolio",
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 4,
    name: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageBig: "link to the image",
    imageSmall: "link to the image",
    technologies: ["HTML", "CSS", "Ruby"],
    linkLiveVersion: "https://www.limavfabio.github.io",
    linkSource: "https://github.com/limavfabio/my-portfolio",
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 5,
    name: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageBig: "link to the image",
    imageSmall: "link to the image",
    technologies: ["HTML", "CSS", "Ruby"],
    linkLiveVersion: "https://www.limavfabio.github.io",
    linkSource: "https://github.com/limavfabio/my-portfolio",
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    projectId: 6,
    name: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageBig: "link to the image",
    imageSmall: "link to the image",
    technologies: ["HTML", "CSS", "Ruby"],
    linkLiveVersion: "https://www.limavfabio.github.io",
    linkSource: "https://github.com/limavfabio/my-portfolio",
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
];

// ----------------generate project cards
