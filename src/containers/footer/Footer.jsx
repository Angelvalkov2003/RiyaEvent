import React from 'react';

import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p>Created by @angel_valkovv_</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Основатели</h4>
        <p>Радослава Огнянова </p>
        <p>Ивайла Стоянова </p>
        <p>Янислав Георгиев-Каталоев</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>телефон:</h4>
        <p>0884201234</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>имейл:</h4>
        <p>riyaevents@abv.bg</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024. RiyaEvents</p>
    </div>
  </div>
);

export default Footer;