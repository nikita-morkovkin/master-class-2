import type {FC, JSX} from "react";
import './services.scss'

const Services: FC = (): JSX.Element => {
  return (
    <div className={'services'}>
      <div className={'services__container'}>
        <img
          src="../../../public/pictures/Services.png"
          alt="Doctors are in the background"
          loading="lazy"
        />
        <div className={'services__container__button-left'}>
          <button type="button">
            <img
              src="../../../public/icons/Arrow-left.png"
              alt="Arrow left"
              loading="lazy"
            />
          </button>
        </div>
        <div className={'services__container__button-right'}>
          <button type="button">
            <img
              src="../../../public/icons/Arrow-right.png"
              alt="Arrow right"
              loading="lazy"
            />
          </button>
        </div>

        <div className={'services__container__group-elements'}>
          <div className={'services__container__group-elements__top-container'}>
            <div className={'services__container__group-elements__top-container__mini-title'}>
              Dental Practice
            </div>
          </div>

          <div className={'services__container__group-elements__middle-container'}>
            <div className={'services__container__group-elements__middle-container__title'}>
              We provide the best
            </div>
          </div>

          <div className={'services__container__group-elements__bottom-container'}>
            <div className={'services__container__group-elements__bottom-container__title'}>
              services out there
            </div>
          </div>

          <div className={'services__container__group-elements__buttons-container'}>
            <button
              type="button"
              className={'services__container__group-elements__buttons-container__button1'}
            >
              View more
            </button>

            <button
              type="button"
              className={'services__container__group-elements__buttons-container__button2'}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;