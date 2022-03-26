class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="hero-wrapper row align-items-center">
          <div class="col-6 d-flex align-items-center flex-column ">
            <div class="hero-txt">
              <p class="pb-1 mb-0">Hello! I'm</p>
              <h1>
                <span>Yelly Putri</span> <br />
                User Interface Engineer
              </h1>
            </div>
            <div class="hero-btn d-grid gap-2 d-md-block">
              <a class="yell-btn text-decoration-none" type="button" href="mailto:yellyputriw@gmail.com">
                <i class="uil uil-envelope"></i>
                Email Me!
              </a>
              <a class="yell-btn cv-btn text-decoration-none" type="button" href="#">
                <i class="uil uil-file-alt"></i>
                Resume
              </a>
            </div>
          </div>
          <div class="col-6">
            <div class="container-fluid framePict">
              <img src="/hero/hero-img.png" alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('yell-hero', Hero);
