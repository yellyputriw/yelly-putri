class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="bg-white">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src="/favicon.svg" alt="" width="30" height="30">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item px-3">
                  <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item px-3">
                  <a class="nav-link" href="/yell-about">About</a>
                </li>
                <li class="nav-item px-3">
                  <a class="nav-link" href="/yell-project">Projects</a>
                </li>
                <li class="nav-item px-3">
                  <a class="nav-link" href="/yell-contact">Contact</a>
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
