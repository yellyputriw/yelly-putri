import Ability from '@utils/Ability';

const ability1 = new Ability(
  '/images/about/web-design.svg',
  'Web Design',
  'fade-down'
);

const ability2 = new Ability(
  '/images/about/web-development.svg',
  'Web Development',
  'fade-down'
);

const ability3 = new Ability(
  '/images/about/responsive-layout-design.svg',
  'Responsive Layout Design',
  'fade-up'
);

const ability4 = new Ability(
  '/images/about/wireframe.svg',
  'Wireframe & Prototyping',
  'fade-up'
);

const abilities = [
  ability1,
  ability2,
  ability3,
  ability4,
];

const abilitiesWrapper =
  document.querySelector('.abilities');

abilities.map(({ image, title, fade }) => {
  abilitiesWrapper.innerHTML += /* html */ `
    <div class="col col-lg-5 d-flex justify-content-center" data-aos="${fade}" data-aos-duration="1500">
      <div class="card m-2 border-0 card-shadow about-card"  >
        <div class="card-body align-items-center">
          <img class="card-img-top" src="${image}" alt="${title}">
          <h3 class="card-title text-center fs-5 pb-3 px-3">
            ${title}
          </h3>
        </div>
      </div>
    </div>
  `;
});
