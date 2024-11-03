import Logo from "../assets/img/logo.png";
const Footer = () => {
    return (
        <>
<footer className="footer">
  <div className="container">
    <div className="footer__top">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="footer__top__logo">
            <a href="#">
              <img src={Logo} alt />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="footer__top__social">
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
            <a href="#">
              <i className="fa fa-youtube-play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

</>
    );
};

export default Footer;