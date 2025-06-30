import type { FC, JSX } from 'react';
import './navigation-panel.scss'

const NavigationPanel: FC = (): JSX.Element => {
  return (
    <nav className={'navigation-panel'}>
      <div className={'navigation-panel__content'}>
        <div className={'navigation-panel__content__logo'}>
          <img
            src={'../../../public/pictures/logo.png'}
            alt="Company icon"
            width="135"
            height="17"
            loading="lazy"
          />
        </div>
        <div className={'navigation-panel__content__buttons-group'}>
          <a href={'/'}>
            <div className={'navigation-panel__content__buttons-group__button'}>
              Home
            </div>
          </a>
          <a href={'/'}>
            <div className={'navigation-panel__content__buttons-group__button'}>
              Pages
            </div>
          </a>
          <a href={'/'}>
            <div className={'navigation-panel__content__buttons-group__button'}>
              Staff
            </div>
          </a>
          <a href={'/'}>
            <div className={'navigation-panel__content__buttons-group__button'}>
              Blog
            </div>
          </a>
          <a href={'/'}>
            <div className={'navigation-panel__content__buttons-group__button'}>
              Shop
            </div>
          </a>
          <a href={'/'}>
            <div className={'navigation-panel__content__buttons-group__button'}>
              Landing
            </div>
          </a>
        </div>
        <div className={'navigation-panel__content__search'}>
            <a href={'/'}>
              <div className={'navigation-panel__content__buttons-group__button'}>
                Search
              </div>
            </a>
          <div className={'navigation-panel__content__search__burger-button'}>
            <button
              type="button"
            >
              <img
                src="../../../public/icons/Burger-button.svg"
                alt="Burger button"
                width="21"
                height="21"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationPanel;