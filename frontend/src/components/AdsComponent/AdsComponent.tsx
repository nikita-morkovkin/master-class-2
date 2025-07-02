import './ads-component.scss';

const AdsComponent = () => {
  return (
    <section className={'ads-component'}>
      <div className={'ads-component__menu'}>
        <a href={'/'} className={'ads-component__menu__item'}>
          <p>Root Canal Specialist</p>
        </a>
        <a href={'/'} className={'ads-component__menu__item'}>
          <p>Alignment Specialist</p>
        </a>
        <a href={'/'} className={'ads-component__menu__item'}>
          <p>Cosmetic Dentistry</p>
        </a>
        <a href={'/'} className={'ads-component__menu__item'}>
          <p>Live Dental Advisory</p>
        </a>
      </div>

      <div className={'ads-component__text-container'}>
        <div className={'ads-component__text-container__second-container'}>
          <h2 className={'ads-component__text-container__second-container__title'}>
            Fast & professional treatments for <br /> every patient
          </h2>
          <p className={'ads-component__text-container__second-container__text'}>
            Proin gravida nibh vel velit auctor aliquet ent. Est vel sum <br />
            sollicitudin, lorem ad quismi bibe nd mi auctor.
          </p>

          <p className={'ads-component__text-container__second-container__suptext'}>
            Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed <br />
            ipsum velit. Nam nec tellus a od tincidunt auctor a ornare odio. Alia ludus animal <br />
            ius te, ea amet necessitatibus vix. Solum persius voluptaria ad nostro quis odio <br />
            scriptorem ex vim.
          </p>
        </div>
        <img
          src="../../../public/pictures/girl-with-doctor.png"
          alt="Girl With Doctor"
          width="533"
          height="366"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AdsComponent;