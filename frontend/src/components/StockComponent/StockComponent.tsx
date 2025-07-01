import './stock-component.scss';

const StockComponent = () => {
  return (
    <section className={'stock-component'}>
      <div className={'stock-component-text-block'}>
        <h2 className={'stock-component__text-block__title'}>
          Discount dental plans save you <span>up to 60%</span>
        </h2>
        <p className={'stock-component__text-block__text'}>
          Sea te illum euismod, ex dicta noluisse qui, sea an hinc pericula imperdiet sum.
        </p>
      </div>

      <button
        className={'stock-component__button'}
        type="button"
      >
        <span>Learn more</span>
      </button>
    </section>
  );
};

export default StockComponent;