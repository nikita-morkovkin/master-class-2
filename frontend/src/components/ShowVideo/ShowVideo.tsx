import './show-video.scss';
import type {FC, JSX} from "react";

const ShowVideo: FC = (): JSX.Element => {
  return (
    <section className={'show-video-section'}>
      <div className={'show-video-section__container'}>
        <div className={'show-video-section__container__info'}>
          <h2 className={'show-video-section__container__info__title'}>
            Fully dedicated to your <br />
            dental health
          </h2>

          <p className={'show-video-section__container__info__text'}>Te veritus tractatos delicatissimi qui, justo diceret mentitum ut sit. Qui sed <br />
            reque dicam, qui veri nullam vituperatoribus in. Tibique maiestatis sum <br /> quod sum
            ut alienum nec et, summo possim persequeris vix mea.
            Adhuc <br /> quodsi qui, sit no tale essent electram. Mei sum prodesset in pro, quo <br />
            scripta feugait vidisse.
          </p>

          <img
            src="../../../public/pictures/background.png"
            alt=""
            width="532"
            height="111"
            loading="lazy"
          />
          <p className={'show-video-section__container__info__subtext'}>
            Andrea McCollins
          </p>
        </div>
        <div className={'show-video-section__container__video-player'}>
          <img
            src="../../../public/pictures/client.png"
            alt=""
            width="1018"
            height="706"
            loading="lazy"
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
          >
            <img
              src="../../../public/icons/pseudo.svg"
              className={'show-video-section__container__video-player__halo'}
              alt=""
              width="90"
              height="90"
              loading="lazy"
            />

            <button
              className={'show-video-section__container__video-player__button'}
              type="button"
            >
              <img
                src="../../../public/icons/play.svg"
                alt="Play button"
                width="20"
                height="22"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowVideo;