const projectWrapper = document.querySelector('.project-wrapper');

class Project {
  constructor(image, title, desc, link) {
    this.image = image;
    this.title = title;
    this.desc = desc;
    this.link = link;
  }
}

const project1 = new Project('/project/myClock.png', 'My Clock', 'Some quick example text to build on the card title and make up the bulk of the cards content.', '#');

const project2 = new Project('/project/healthCare.png', 'Health Care', 'Some quick example text to build on the card title and make up the bulk of the cards content.', '#');

const project3 = new Project('/project/yelingkaran.png', 'Yelingkaran', 'Some quick example text to build on the card title and make up the bulk of the cards content.', '#');

const project4 = new Project('/project/myClock.png', 'My Clock', 'Some quick example text to build on the card title and make up the bulk of the cards content.', '#');

const projects = [project1, project2, project3, project4];

projects.map((project) => {
  projectWrapper.innerHTML += `
    <div class="col-md-5 card m-3 px-0 border-0 card-shadow project-card">
      <img src="${project.image}" class="card-img-top" alt="${project.title}">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.desc}</p>
        <i class="uil uil-external-link-alt"></i>
        <a href="${project.link}" class="project-link text-decoration-none">Go to site</a>
      </div>
    </div>
  `;
});
