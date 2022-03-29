class Contact extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <section id="contact">
        <div class="container">
          <div class="col">
            <div class="row" data-aos="fade-up" data-aos-duration="1500">
              <div class="col d-flex flex-column align-items-center">
                <h2 class="subtitle text-center pb-3">Get In Touch</h2>
                <p class="text-center m-3">
                  Although I’m not currently looking for any new opportunities, my inbox is always open. 
                  Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
                <a class="yell-btn mb-4 text-decoration-none" type="button" href="#">
                  Say Hello!
                </a>
              </div>
            </div>
            <div class="row social-media">
              <div class="social-container d-flex justify-content-center">
              <div class="social-wrapper mx-3">
                <a href="https://www.instagram.com/yell.uix" target="_blank" rel="noreferrer" class="d-flex justify-content-center align-items-center" aria-label="Instagram">
                  <i class="uil uil-instagram"></i>
                </a>
              </div>
              <div class="social-wrapper mx-3">
                <a href="https://github.com/yellyputriw" target="_blank" rel="noreferrer" class="d-flex justify-content-center align-items-center" aria-label="Github">
                  <i class="uil uil-github-alt"></i>
                </a>
              </div>
              <div class="social-wrapper mx-3">
                <a href="https://www.linkedin.com/in/yellyputri/" target="_blank" rel="noreferrer" class="d-flex justify-content-center align-items-center" aria-label="LinkedIn">
                  <i class="uil uil-linkedin-alt"></i>
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('yell-contact', Contact);
