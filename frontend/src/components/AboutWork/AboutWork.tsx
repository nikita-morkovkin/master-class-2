import {type JSX, type FC} from 'react';
import './about-work.scss'

const AboutWork: FC = (): JSX.Element => {
  return (
    <section className={'about-work'}>
      <div className={'about-work__card-container'}>
        <div className={'about-work__card-container__card-item-1'}>
          <img
            src="../../../public/pictures/h1-img-1.jpg.png"
            alt="Dental Treatment Process"
            width="413"
            height="255"
            loading="lazy"
          />

          <h2 className={'about-work__card-container__card-item-1__title'}>Pick the dentist that fits all your<br /> needs the best
          </h2>

          <p className={'about-work__card-container__card-item-1__text'}>Lorem ipsum dolor sit amet, eu duo ferri labor. Mea ex <br /> modo reque senserit,
            et sed hinc dolor, scaevola sum <br /> salutandi expetendis vix ne.
            Eros dicat his sum mel quod <br /> mundi consequat sum.
          </p>

          <div className={'about-work__card-container__card-item-1__container'}>
            <a
              href={'/'}
              className={'about-work__card-container__card-item-1__container__link'}
            >Read More
            </a>

            <button
              className={'about-work__card-container__card-item-1__container__button'}
              type="button"
            >
              <img
                src="../../../public/icons/Arrow-right.png"
                alt="Read more button"
                width="5.17px"
                height="10.25px"
                loading="lazy"
              />
            </button>
          </div>
        </div>
        <div className={'about-work__card-container__card-item-2'}>
          <img
            src="../../../public/pictures/h1-img-2.jpg.png"
            alt="Kind Doctors"
            width="413"
            height="255"
            loading="lazy"
          />

          <ul>
            <li>Professional dental services 24/7</li>
            <li>Oral hygiene advisory & assessment</li>
            <li>Oral and maxillofacial surgery</li>
            <li>Dental public health insurance</li>
            <li>Free online appointment booking</li>
            <li>Various cosmetic dentistry services</li>
            <li>Special care dentistry services</li>
          </ul>
        </div>
        <div className={'about-work__card-container__card-item-3'}>
          <div>
            <h2 className={'about-work__card-container__card-item-3__title'}>
              Working Hours
            </h2>
            <ul className={'about-work__card-container__card-item-3__list'}>
              <li>
                <div className={'about-work__card-container__card-item-3__list__container'}>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>Monday</p>
                  <p className={'about-work__card-container__card-item-3__list__container__tabs'}>------------------------------</p>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>
                    <time>8AM</time>
                    -
                    <time>7PM</time>
                  </p>
                </div>
                <div className={'about-work__card-container__card-item-3__list__container'}>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>Tuesday</p>
                  <p className={'about-work__card-container__card-item-3__list__container__tabs'}>------------------------------</p>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>
                    <time>8AM</time>
                    -
                    <time>7PM</time>
                  </p>
                </div>
                <div className={'about-work__card-container__card-item-3__list__container'}>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>Wednesday</p>
                  <p className={'about-work__card-container__card-item-3__list__container__tabs'}>--------------------------</p>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>
                    <time>8AM</time>
                    -
                    <time>7PM</time>
                  </p>
                </div>
                <div className={'about-work__card-container__card-item-3__list__container'}>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>Thursday</p>
                  <p className={'about-work__card-container__card-item-3__list__container__tabs'}>----------------------------</p>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>
                    <time>8AM</time>
                    -
                    <time>7PM</time>
                  </p>
                </div>
                <div className={'about-work__card-container__card-item-3__list__container'}>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>Friday</p>
                  <p className={'about-work__card-container__card-item-3__list__container__tabs'}>-------------------------------</p>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>
                    <time>8AM</time>
                    -
                    <time>7PM</time>
                  </p>
                </div>
                <div className={'about-work__card-container__card-item-3__list__container'}>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>Saturday</p>
                  <p className={'about-work__card-container__card-item-3__list__container__tabs'}>----------------------------</p>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>
                    <time>8AM</time>
                    -
                    <time>7PM</time>
                  </p>
                </div>
                <div className={'about-work__card-container__card-item-3__list__container'}>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>Sunday</p>
                  <p className={'about-work__card-container__card-item-3__list__container__tabs'}>-------------------------------</p>
                  <p className={'about-work__card-container__card-item-3__list__container__text'}>CLOSED</p>
                </div>
              </li>
            </ul>
          </div>

          <button
            type="button"
            className={'about-work__card-container__card-item-3__button'}
          >
            <p>Call Us: +354/759-1675</p>
          </button>

          <button
            className={'chat-bot-button'}
            type="button"
          >
            <img
              src="../../../public/icons/ChatIcon.svg"
              alt=""
              width="20"
              height="20"
              loading="lazy"
            />
            <p>Chat</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutWork;