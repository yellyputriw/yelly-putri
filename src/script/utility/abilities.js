const abilitiesWrapper = document.querySelector('.abilities');

class Abilities {
  constructor(image, title) {
    this.image = image;
    this.title = title;
  }
}

const abilities1 = new Abilities('/about/webdesign.svg', 'Web Design');

const abilities2 = new Abilities('/about/webdevelopment.svg', 'Web Development');

const abilities3 = new Abilities('/about/responsiveLayoutDesign.svg', 'Responsive layout Design');

const abilities4 = new Abilities('/about/wireframe.svg', 'Wireframe & Prototyping');

const ability = [abilities1, abilities2, abilities3, abilities4];

ability.map((abilities) => {
  abilitiesWrapper.innerHTML += `
  <div class="col col-lg-5 d-flex justify-content-center">
    <div class="card m-2 border-0 card-shadow about-card" >
      <div class="card-body align-items-center">
        <img src="${abilities.image}" class="card-img-top" alt="${abilities.title}">
        <h5 class="card-title text-center fs-5 pb-3 px-3">${abilities.title}</h5>
      </div>
    </div>
  </div>
  `;
});
