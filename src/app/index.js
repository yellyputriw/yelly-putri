import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '@styles/main.scss';
import '@views/main';
import registerSW from '@utils/RegisterSW';

if (process.env.NODE_ENV === 'production') {
  window.addEventListener('DOMContentLoaded', async () => {
    await registerSW();
  });
}

AOS.init();
