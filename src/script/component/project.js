class Project extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section>
        <div class="container d-flex flex-column align-items-center">
          <div class="row">
            <h2 class="subtitle text-center pb-3">Some Things I’ve Built</h2>
          </div>
          <div class="project-wrapper row my-5 pb-5 align-items-center">
            <div class="col project-content">
              <h3 class="project-title fs-1">Lorem Ipsum Landing Page</h3>
              <div class="project-description p-3 rounded-2">
                <p class="mb-0">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm</p>
              </div>
              <div class="project-link pt-2">
                <!-- <a href="#" class="github-link"><i class="uil uil-github-alt fs-3 px-1"></i></a> -->
                <a href="#" class="external-link"><i class="uil uil-external-link-alt fs-3 px-1"></i></a>
              </div>
            </div>
            <div class="col project-image d-flex justify-content-end">
              <a href="#">
                <img src="./project/tl-landing-page.png" alt="" width="550">
              </a>
            </div>
          </div>
          <div class="row my-5 pb-5 align-items-center">
            <div class="col project-content order-1">
              <h3 class="project-title fs-1">Lorem Ipsum Landing Page</h3>
              <div class="project-description p-3 rounded-2">
                <p class="mb-0">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm</p>
              </div>
              <div class="project-link pt-2">
                <!-- <a href="#" class="github-link"><i class="uil uil-github-alt fs-3 px-1"></i></a> -->
                <a href="#" class="external-link"><i class="uil uil-external-link-alt fs-3 px-1"></i></a>
              </div>
            </div>
            <div class="col project-image d-flex order-0 ">
              <a href="#">
                <img src="./project/tl-landing-page.png" alt="" width="550">
              </a>
            </div>
          </div>
          <div class="project-wrapper row my-5 align-items-center">
            <div class="col project-content">
              <h3 class="project-title fs-1">Lorem Ipsum Landing Page</h3>
              <div class="project-description p-3 rounded-2">
                <p class="mb-0">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm</p>
              </div>
              <div class="project-link pt-2">
                <!-- <a href="#" class="github-link"><i class="uil uil-github-alt fs-3 px-1"></i></a> -->
                <a href="#" class="external-link"><i class="uil uil-external-link-alt fs-3 px-1"></i></a>
              </div>
            </div>
            <div class="col project-image  d-flex justify-content-end">
              <a href="#">
                <img src="./project/tl-landing-page.png" alt="" width="550">
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('yell-project', Project);
