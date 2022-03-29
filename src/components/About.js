class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <section id="about">
        <div class="container">
          <div class="row about-wrapper">
            <div
              class="col-lg-6 d-flex justify-content-center align-items-center"
            >
              <div class="row abilities"></div>
            </div>
            <div
              class="desc col-lg-6 px-5 d-flex flex-column justify-content-center"
            >
              <h2 class="subtitle text-center pb-3">About Me</h2>
              <p class="fs-5">
                I’m a developer specializing in designing and building
                exceptional digital experiences. Currently, I’m focused on
                building accessible, human-centered products. I’m from Indonesia
                and right now I am looking forward to collaborate with you!
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('yell-about', About);
