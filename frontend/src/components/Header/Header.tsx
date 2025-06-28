import type { FC, JSX } from 'react';
import './header.scss'

const Header: FC = (): JSX.Element => {
  return (
    <header className={'header'}>
      <div className={'header__time-text'}>
        <p>Mon - Sat <time>8:00</time> - <time>17:30</time>, Sunday - CLOSED</p>
      </div>
      <div className={'header__contact-info'}>
        <div className={'header__contact-info__phone-container'}>
          <img
            src="../../../public/icons/Phone.svg"
            alt="Phone icon"
            width="17"
            height="17"
            loading="lazy"
          />
          <a href={'tel:+654/4715-167'}>
            +654/4715-167
          </a>
        </div>
        <div className={'header__contact-info__email-container'}>
          <a href={'mailto:allsmiles@qodeinteractive.com'}>
            allsmiles@qodeinteractive.com
          </a>
        </div>
        <div className={'header__contact-info__address-container'}>
          <img
            src="../../../public/icons/Address.svg"
            alt="Address icon"
            width="12"
            height="17"
            loading="lazy"
          />
          <address>
            63 Wall St, New York, NY 10005
          </address>
        </div>
      </div>
    </header>
  );
};

export default Header;