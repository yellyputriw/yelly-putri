class Tools extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <section>
        <div class="container">
          <div class="col">
            <div class="row" data-aos="fade-down" data-aos-duration="1500">
              <h2 class="subtitle text-center pb-3">Tools</h2>
            </div>
            <div class="row">
              <ul class="tools-list d-flex list-unstyled justify-content-evenly">
                <li data-aos="zoom-in" data-aos-duration="1500">
                  <img src="/images/tools/html.png" alt="HTML5" width="100" class="tools-img" />
                </li>
                <li data-aos="zoom-in" data-aos-duration="1500">
                  <img src="/images/tools/css.png" alt="CSS3" width="100" class="tools-img" />
                </li>
                <li data-aos="zoom-in" data-aos-duration="1500">
                  <img src="/images/tools/js.png" alt="JS" width="100" class="tools-img" />
                </li>
                <li data-aos="zoom-in" data-aos-duration="1500">
                  <img src="/images/tools/sass.png" alt="SASS" width="100" class="tools-img" />
                </li>
                <li data-aos="zoom-in" data-aos-duration="1500">
                  <img src="/images/tools/boostrap.png" alt="Bootstrap" width="100" class="tools-img" />
                </li>
                <li data-aos="zoom-in" data-aos-duration="1500">
                  <img src="/images/tools/figma.png" alt="Figma" width="100" class="tools-img" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('yell-tools', Tools);
