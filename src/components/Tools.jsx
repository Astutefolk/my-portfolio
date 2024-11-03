import photos from '../assets/img/work/photoshop-logo.jpg'
import visuals from '../assets/img/work/visual.jpg'
import kali from '../assets/img/work/kali.webp'
import all from '../assets/img/work/all.jpg'
import git from '../assets/img/work/git.jpg'
import vite from '../assets/img/work/vite.avif'
import github from '../assets/img/work/github.png'

const Tools = () => {
    return (
        <section className="work" >
    <div className="app-text" id='Tools'>
      <h2>TOOLS & LANGUAGES:</h2>
    </div>
    <div className="work__gallery">
      <div className="grid-sizer" />
      <div
        className="work__item wide__item set-bg"
        data-setbg={photos}
      >
        <div className="work__item__hover">
          <h4>Photoshop</h4>
          <ul>
            <li>Picture desing</li>
            <li>Graphics Design</li>
          </ul>
        </div>
      </div>
      <div
        className="work__item small__item set-bg"
        data-setbg={visuals}
      ></div>
      <div
        className="work__item small__item set-bg"
        data-setbg={kali}
      ></div>
      <div
        className="work__item large__item set-bg"
        data-setbg={all}
      >
        <div className="work__item__hover">
          <h4>Frontend Languages</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
          </ul>
        </div>
      </div>
      <div
        className="work__item small__item set-bg"
        data-setbg={git}
      ></div>
      <div
        className="work__item small__item set-bg"
        data-setbg={vite}
      ></div>
      <div
        className="work__item wide__item set-bg"
        data-setbg={github}
      >
        <div className="work__item__hover">
          <h4>Backend Languages</h4>
          <ul>
            <li>NodeJS</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    );
};


export default Tools;