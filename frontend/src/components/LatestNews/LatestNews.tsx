import './latest-news.scss';
import type {JSX, FC} from "react";

const LatestNews: FC = (): JSX.Element => {
  return (
    <section className={'latest-news'}>
      <div className={'latest-news__container'}>
        <h2 className={'latest-news__container__title'}>Read Latest News</h2>
        <p className={'latest-news__container__text'}>In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis.</p>

        <div className={'latest-news__container__card-container'}>
          <div className={'latest-news__container__card-container__card-item'}>
            <img
              src="../../../public/pictures/h1-blog-list-img1.jpg.png"
              alt=""
              width="413"
              height="241"
              loading="lazy"
            />

            <p className={'latest-news__container__card-container__card-item__subtext'}>
              17th November 2020, Pediatric
            </p>
            <h3 className={'latest-news__container__card-container__card-item__title'}>
              All about invisalign
            </h3>
            <p className={'latest-news__container__card-container__card-item__text'}>
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit <br />
              consequat ipsum, nec sagittis sem nibh mel integre facilis.
            </p>

            <div className={'latest-news__container__card-container__card-item__button-container'}>
              <p>Read more</p>
              <button
                type="button"
              >
                <img
                  src="../../../public/icons/Arrow-right.png"
                  alt=""
                  width="5"
                  height="10.25"
                  loading="lazy"
                />
              </button>
            </div>
          </div>
          <div className={'latest-news__container__card-container__card-item'}>
            <img
              src="../../../public/pictures/h1-blog-list-img2.jpg.png"
              alt=""
              width="413"
              height="241"
              loading="lazy"
            />

            <p className={'latest-news__container__card-container__card-item__subtext'}>
              17th November 2020, Pediatric
            </p>
            <h3 className={'latest-news__container__card-container__card-item__title'}>
              Braces for teens
            </h3>
            <p className={'latest-news__container__card-container__card-item__text'}>
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit <br />
              consequat ipsum, nec sagittis sem nibh mel integre facilis.
            </p>

            <div className={'latest-news__container__card-container__card-item__button-container'}>
              <p>Read more</p>
              <button
                type="button"
              >
                <img
                  src="../../../public/icons/Arrow-right.png"
                  alt=""
                  width="5"
                  height="10.25"
                  loading="lazy"
                />
              </button>
            </div>
          </div>
          <div className={'latest-news__container__card-container__card-item'}>
            <img
              src="../../../public/pictures/h1-blog-list-img3.jpg.png"
              alt=""
              width="413"
              height="241"
              loading="lazy"
            />

            <p className={'latest-news__container__card-container__card-item__subtext'}>
              17th November 2020, Pediatric
            </p>
            <h3 className={'latest-news__container__card-container__card-item__title'}>
              Dental association
            </h3>
            <p className={'latest-news__container__card-container__card-item__text'}>
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit <br />
              consequat ipsum, nec sagittis sem nibh mel integre facilis.
            </p>

            <div className={'latest-news__container__card-container__card-item__button-container'}>
              <p>Read more</p>
              <button
                type="button"
              >
                <img
                  src="../../../public/icons/Arrow-right.png"
                  alt=""
                  width="5"
                  height="10.25"
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;