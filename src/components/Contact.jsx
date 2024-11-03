

const Contact = () => {
    return (
        <>
        <section className="contact-widget spad" >
  <div className="container" id='Contact'>
    <div className="row">
      <div className="col-lg-4 col-md-6 col-md-6 col-md-3">
        <div className="contact__widget__item">
          <div className="contact__widget__item__icon">
            <i className="fa fa-map-marker" />
          </div>
          <div className="contact__widget__item__text">
            <h4>Address</h4>
            <p>Ikorodu, Lagos state</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-md-6 col-md-3">
        <div className="contact__widget__item">
          <div className="contact__widget__item__icon">
            <i className="fa fa-phone" />
          </div>
          <div className="contact__widget__item__text">
            <h4>Hotline</h4>
            <p>+234-9055952253 • +234-9066649750</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-md-6 col-md-3">
        <div className="contact__widget__item">
          <div className="contact__widget__item__icon">
            <i className="fa fa-map-marker" />
          </div>
          <div className="contact__widget__item__text">
            <h4>Email</h4>
            <p>idrisadekunleadeboyejo@outlook.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="contact spad">
  <div className="col-lg-6 col-md-6">
    <div className="contact__form">
      <h3>Get in touch</h3>
      <form action="#">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Website" />
        <textarea placeholder="Message" defaultValue={""} />
        <button type="submit" className="site-btn">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>
</>
    );
};

export default Contact;