import Project from '@utils/Project';

const projects = [
  Project.add('/images/project/health-care.png', 'Health Care', 'Some quick example text to build on the card title and make up the bulk of the cards content.'),
  Project.add('/images/project/oneyel-coffee.png', 'Oneyel Coffee Landing Page', 'Some quick example text to build on the card title and make up the bulk of the cards content.'),
  Project.add('/images/project/yelingkaran.png', 'Yelingkaran', 'Some quick example text to build on the card title and make up the bulk of the cards content.'),
  Project.add('/images/project/my-clock.png', 'My Clock', 'Some quick example text to build on the card title and make up the bulk of the cards content.'),
];

const projectWrapper = document.querySelector('.project-wrapper');

projects.map(({ image, title, description, link }) => {
  projectWrapper.innerHTML += /* html */ `
    <div class="col-md-5 card m-3 px-0 border-0 card-shadow project-card">
      <img src="${image}" class="card-img-top" alt="${title}">
      <div class="card-body">
        <h3 class="card-title fs-4">${title}</h3>
        <p class="card-text">${description}</p>
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#F25287" d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"/></svg>
        <a href="${link}" class="project-link text-decoration-none">Go to site</a>
      </div>
    </div>
  `;
});
