import React from 'react';

import whatsappLogo from '../../assets/images/whatsapp.svg';
import emailLogo from '../../assets/images/email.svg';

import './Contact.scss';

const Contact = () => {
  return (
    <address className='Contact'>
      <ul>
        <li>
          <img
            src={whatsappLogo}
            width={24}
            alt='whatsapp'
          />
          11-3489-6281
        </li>
        <li>
          <img
            src={emailLogo}
            width={24}
            alt='email'
          />
          rasguido@outlook.com
        </li>
      </ul>
    </address>
  );
};

export default Contact;
