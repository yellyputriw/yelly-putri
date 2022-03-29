class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <p class="py-3 mb-0 fs-5 text-center">
        Design & Build with <i class="uil uil-heart-alt"></i> by Yelly Putri
      </p>
    `;
  }
}

customElements.define('yell-footer', Footer);
