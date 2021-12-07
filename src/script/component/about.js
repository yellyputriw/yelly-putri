class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section>
        <div class="container">
          <div class="row ">
            <div class="col d-flex justify-content-center align-items-center">
              <img src="./about-image.png" alt="" width="350">
            </div>
            <div class="desc col px-5">
              <h2 class="subtitle text-center pb-3">About Me</h2>
              <p class="fs-5">I’m a developer specializing in designing and building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href="https://digitboxtech.com" class="db-link text-decoration-none">Digitbox</a>.
                I’m from Indonesia and right now I am looking forward to collaborate with you!</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('yell-about', About);
