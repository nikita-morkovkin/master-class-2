import type {FC, JSX} from 'react';
import './list-icons.scss'

const ListIcons: FC = (): JSX.Element => {
  return (
    <section className={'list-icons'}>
      <div className={'list-icons__grid-container'}>
        <div className={'list-icons__card'}>
          <img
            src="../../../public/icons/icon1.svg"
            className={'list-icons__card__image'}
            alt=""
            width="97"
            height="96"
            loading="lazy"
          />

          <div>
            <h2 className={'list-icons__card__title'}>Root Canal Specialist</h2>
            <p className={'list-icons__card__text'}>Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
          </div>

        </div>
        <div className={'list-icons__card'}>
          <img
            src="../../../public/icons/icon2.svg"
            className={'list-icons__card__image'}
            alt=""
            width="97"
            height="96"
            loading="lazy"
          />

          <div>
            <h2 className={'list-icons__card__title'}>Oral Hygiene Experts</h2>
            <p className={'list-icons__card__text'}>Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
          </div>

        </div>
        <div className={'list-icons__card'}>
          <img
            src="../../../public/icons/icon3.svg"
            className={'list-icons__card__image'}
            alt=""
            width="97"
            height="96"
            loading="lazy"
          />

          <div>
            <h2 className={'list-icons__card__title'}>Alignment Specialist</h2>
            <p className={'list-icons__card__text'}>Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
          </div>

        </div>

        <div className={'list-icons__card'}>
          <img
            src="../../../public/icons/icon4.svg"
            className={'list-icons__card__image'}
            alt=""
            width="97"
            height="96"
            loading="lazy"
          />

          <div>
            <h2 className={'list-icons__card__title'}>Live Dental Advisory</h2>
            <p className={'list-icons__card__text'}>Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
          </div>

        </div>
        <div className={'list-icons__card'}>
          <img
            src="../../../public/icons/icon5.svg"
            className={'list-icons__card__image'}
            alt=""
            width="97"
            height="96"
            loading="lazy"
          />

          <div>
            <h2 className={'list-icons__card__title'}>Cosmetic Dentistry</h2>
            <p className={'list-icons__card__text'}>Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
          </div>

        </div>

        <div className={'list-icons__card'}>
          <img
            src="../../../public/icons/icon6.svg"
            className={'list-icons__card__image'}
            alt=""
            width="97"
            height="96"
            loading="lazy"
          />

          <div>
            <h2 className={'list-icons__card__title'}>Cavity Inspection</h2>
            <p className={'list-icons__card__text'}>Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ListIcons;