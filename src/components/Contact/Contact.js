import React from 'react';

import whatsappLogo from '../../assets/images/whatsapp.svg';
import emailLogo from '../../assets/images/email.svg';

import './Contact.scss';

const Contact = () => {
  return (
    <address className='Contact'>
      <ul>
        <li className='Contact__phone'>
          <img
            src={whatsappLogo}
            width={24}
            alt='whatsapp'
          />
          11-3489-6281
        </li>
        <li className='Contact__email'>
          <a href="mailto: rasguido@outlook.com">
            <img
              src={emailLogo}
              width={24}
              alt='email'
            />
            rasguido@outlook.com
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Contact;
