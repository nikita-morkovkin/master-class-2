import './our-expects.scss';
import type {FC, JSX} from "react";

const OurExpects: FC = (): JSX.Element => {
  return (
    <section className={'our-expects'}>
      <div className={'our-expects__text-container'}>
        <h2 className={'our-expects__text-container__title'}>Meet Our Experts</h2>
        <p className={'our-expects__text-container__text'}>An delicata inimicus sea, vis equidem oporteat conclusion mundi et. Nec malis dolor <br/>
          fabellas ex, eu nec falli iuvaret. Per elitr eloquentiam an esse.</p>
      </div>

      <div className={'our-expects__cards-container'}>
        <div className={'our-expects__cards-container__card-item'}>
          <button
            className={'our-expects__cards-container__card-item__button'}
            type="button"
          >
            <img
              src="../../../public/icons/share-icon.svg"
              alt=""
              width="15"
              height="32"
              loading="lazy"
            />
          </button>
          <img
            src="../../../public/pictures/team-img-1.jpg.png"
            alt="Good doctor"
            width="288"
            height="290"
            loading="lazy"
          />
          <p className={'our-expects__cards-container__card-item__text'}>Howard Holmes</p>
          <p className={'our-expects__cards-container__card-item__suptext'}>estetic dentist</p>
        </div>
        <div className={'our-expects__cards-container__card-item'}>
          <button
            className={'our-expects__cards-container__card-item__button'}
            type="button"
          >
            <img
              src="../../../public/icons/share-icon.svg"
              alt=""
              width="15"
              height="32"
              loading="lazy"
            />
          </button>
          <img
            src="../../../public/pictures/team-img-2-1.jpg.png"
            alt="Good doctor"
            width="288"
            height="290"
            loading="lazy"
          />
          <p className={'our-expects__cards-container__card-item__text'}>Ella Thompson</p>
          <p className={'our-expects__cards-container__card-item__suptext'}>dental technician</p>
        </div>
        <div className={'our-expects__cards-container__card-item'}>
          <button
            className={'our-expects__cards-container__card-item__button'}
            type="button"
          >
            <img
              src="../../../public/icons/share-icon.svg"
              alt=""
              width="15"
              height="32"
              loading="lazy"
            />
          </button>
          <img
            src="../../../public/pictures/team-img-3.jpg.png"
            alt="Good doctor"
            width="288"
            height="290"
            loading="lazy"
          />
          <p className={'our-expects__cards-container__card-item__text'}>Vincent Cooper</p>
          <p className={'our-expects__cards-container__card-item__suptext'}>estetic dentist</p>
        </div>
        <div className={'our-expects__cards-container__card-item'}>
          <button
            className={'our-expects__cards-container__card-item__button'}
            type="button"
          >
            <img
              src="../../../public/icons/share-icon.svg"
              alt=""
              width="15"
              height="32"
              loading="lazy"
            />
          </button>
          <img
            src="../../../public/pictures/team-img-4.jpg.png"
            alt="Good doctor"
            width="288"
            height="290"
            loading="lazy"
          />
          <p className={'our-expects__cards-container__card-item__text'}>Danielle Bryant</p>
          <p className={'our-expects__cards-container__card-item__suptext'}>dental technician</p>
        </div>
      </div>
    </section>
  );
};

export default OurExpects;