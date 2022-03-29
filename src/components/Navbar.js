class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <header class="bg-white">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img src="/favicon.svg" alt="Icon" width="30" height="30" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item px-3">
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item px-3">
                  <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item px-3">
                  <a class="nav-link" href="#project">Projects</a>
                </li>
                <li class="nav-item px-3">
                  <a class="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('yell-navbar', Navbar);
