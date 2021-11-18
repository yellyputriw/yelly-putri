class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item px-3">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
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
        </div>
      </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
