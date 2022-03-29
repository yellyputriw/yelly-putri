class Project extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <section id="project">
        <div class="container col d-flex flex-column align-items-center">
          <div class="row">
            <h2 class="subtitle text-center pb-3">Some Things I’ve Built</h2>
          </div>
          <div class="row d-flex justify-content-center align-items-center project-wrapper"></div>
        </div> 
      </section>
    `;
  }
}

customElements.define('yell-project', Project);
