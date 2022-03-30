class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <p class="py-3 mb-0 fs-5 text-center">
        Design & Build with 
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#F25287" d="M20.16,4.61A6.27,6.27,0,0,0,12,4a6.27,6.27,0,0,0-8.16,9.48l7.45,7.45a1,1,0,0,0,1.42,0l7.45-7.45A6.27,6.27,0,0,0,20.16,4.61Zm-1.41,7.46L12,18.81,5.25,12.07a4.28,4.28,0,0,1,3-7.3,4.25,4.25,0,0,1,3,1.25,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,6.05Z"/></svg>
        by Yelly Putri
      </p>
    `;
  }
}

customElements.define('yell-footer', Footer);
