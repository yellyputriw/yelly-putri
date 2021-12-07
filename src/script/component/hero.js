class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section>
        <div class="container">
          <div class="hero-wrapper row justify-content-between align-items-center">
            <div class="col-6 d-flex align-items-center flex-column left">
              <div class="hero-txt">
              <h2>
                Hello! I'm
              </h2>
              <h1>
                <span>Yelly Putri</span> <br>
                Front-End Developer
              </h1>
            </div>
              <div class="hero-btn d-grid gap-2 d-md-block">
                <a class="btn" type="button" href="mailto:yellyputriw@gmail.com">
                  <i class="uil uil-envelope"></i>
                  Email Me!
                </a>
                <a class="btn cv-btn" type="button" href="#">
                  <i class="uil uil-download-alt"></i>
                  Download CV
                </a>
              </div>
            </div>
            <div class="col-6">
              <div class="container-fluid framePict">
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('yell-hero', Hero);
