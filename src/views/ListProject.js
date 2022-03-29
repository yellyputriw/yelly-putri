import Project from '@utils/Project';

const projects = [
  Project.add(
    '/images/project/health-care.png',
    'Health Care',
    'Some quick example text to build on the card title and make up the bulk of the cards content.',
  ),
  Project.add(
    '/images/project/my-clock.png',
    'My Clock',
    'Some quick example text to build on the card title and make up the bulk of the cards content.',
  ),
  Project.add(
    '/images/project/yelingkaran.png',
    'Yelingkaran',
    'Some quick example text to build on the card title and make up the bulk of the cards content.',
  ),
  Project.add(
    '/images/project/tl-landing-page.png',
    'Taman Langit Web',
    'Some quick example text to build on the card title and make up the bulk of the cards content.',
  ),
];

const projectWrapper = document.querySelector('.project-wrapper');

projects.map(({ image, title, description, link }) => {
  projectWrapper.innerHTML += /* html */ `
    <div class="col-md-5 card m-3 px-0 border-0 card-shadow project-card">
      <img src="${image}" class="card-img-top" alt="${title}">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <i class="uil uil-external-link-alt"></i>
        <a href="${link}" class="project-link text-decoration-none">Go to site</a>
      </div>
    </div>
  `;
});
