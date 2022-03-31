class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <div class="container">
        <div class="hero-wrapper row align-items-center">
          <div class="col-6 d-flex align-items-center flex-column" data-aos="fade-up" data-aos-duration="1500">
            <div class="hero-txt">
              <p class="pb-1 mb-0">Hello! I'm</p>
              <h1>
                <span>Yelly Putri</span> <br />
                User Interface Engineer
              </h1>
            </div>
            <div class="hero-btn d-grid gap-2 d-md-block">
              <a class="yell-btn text-decoration-none" type="button" href="mailto:yellyputriw@gmail.com">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#F25287" d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"/></svg>  
              Email Me!
              </a>
              <a class="yell-btn cv-btn text-decoration-none" type="button" href="https://drive.google.com/file/d/1vLGRvSB5BriwAxcPInTz6ihSuljgoJus/view?usp=sharing" target=”_blank” >
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#F25287" d="M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm0,2a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"/></svg>  
              Resume
              </a>
            </div>
          </div>
          <div class="col-6" data-aos="fade-down" data-aos-duration="1500">
            <div class="container-fluid framePict">
              <img src="/images/hero/hero-img.png" alt="Yelly" />
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('yell-hero', Hero);
