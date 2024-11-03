import ci3 from '../assets/img/icons/ci-3.png'
import ci2 from '../assets/img/icons/ci-2.png'
import ci1 from '../assets/img/icons/ci-1.png'
import ci4 from '../assets/img/icons/ci-4.png'

const Counter = () => {
    return (
        <section className="counter">
  <div className="container">
    <div className="counter__content">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter__item">
            <div className="counter__item__text">
              <img src={ci1} alt="Img" />
              <h2 className="counter_num">10</h2>
              <p>Completed Projects</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter__item second__item">
            <div className="counter__item__text">
              <img src={ci2} alt="Img" />
              <h2 className="counter_num">10</h2>
              <p>Happy clients</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter__item third__item">
            <div className="counter__item__text">
              <img src={ci3} alt="Img" />
              <h2 className="counter_num">10</h2>
              <p>Perspective clients</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter__item four__item">
            <div className="counter__item__text">
              <img src={ci4} alt="Img" />
              <h2 className="counter_num">10</h2>
              <p>Compled Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Counter;