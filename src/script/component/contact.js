class Contact extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section>
          <div class="container">
            <div class="col">
              <div class="row">
                <div class="col d-flex flex-column align-items-center">
                  <h2 class="subtitle text-center pb-3">Get In Touch</h2>
                  <p class="text-center">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                  <a class="btn my-4" type="button" href="#">
                    Say Hello!
                  </a>
                </div>
              </div>
              <div class="row  social-media">
                <div class="social-container d-flex justify-content-center">
                <div class="social-wrapper mx-3">
                  <a href="https://www.instagram.com/yell.uix" class="d-flex justify-content-center align-items-center">
                    <i class="uil uil-instagram"></i>
                  </a>
                </div>
                <div class="social-wrapper mx-3">
                  <a href="https://github.com/yellyputriw" class="d-flex justify-content-center align-items-center">
                    <i class="uil uil-github-alt"></i>
                  </a>
                </div>
                <div class="social-wrapper mx-3">
                  <a href="https://www.linkedin.com/in/yellyputri/" class="d-flex justify-content-center align-items-center">
                    <i class="uil uil-linkedin-alt"></i>
                  </a>
                </div>
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
