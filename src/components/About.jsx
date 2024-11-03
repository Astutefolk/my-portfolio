import AbtIcon from '../assets/img/icons/back.png';
import AbtIcon1 from '../assets/img/icons/cyb.png';
import AbtIcon2 from '../assets/img/icons/gra.png';
import AbtIcon3 from '../assets/img/icons/frontend.png';

const About = () => {
    return (
        <>
        <section className="services spad" >
        <div className="container" id='About'>
            <div className="row">
                <div className="col-lg-4">
                    <div className="services__title">
                        <div className="section-title">
                            <span>ABOUT</span>
                            <h2>About Me</h2>
                        </div>
                        <p>HI, my name is IDRIS A ADEBOYEJO. My expertise spans REACTJS, TYPESCRIPT, JAVASCRIPT, PHP, MYSQL, CSS, and HTML, highlighting a strong foundation in web development technologies. Alongside my skills in software development, I bring proficiency in cybersecurity and networking, ensuring secure, efficient, and scalable solutions. Beyond my technical abilities, I'm deeply passionate about launching Software as a Service (SaaS) businesses, leveraging my knowledge to create valuable, revenue-generating products. My ultimate goal? To contribute something meaningful to humanity while achieving financial success. Driven by innovation and always ready to embrace new technologies, I aim to make a lasting impact on the tech world.</p>
                        <a href="#" className="primary-btn">Download Resume</a>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src={AbtIcon3} alt="" />
                                </div>
                                <h4>Frontend Developement</h4>
                                <p>With a keen eye for detail and a deep understanding of user experience, I excel in creating responsive, intuitive interfaces that bring ideas to life on screen. Leveraging the latest in ReactJS, TypeScript, JavaScript, CSS, and HTML, I craft interactive, high-performance applications that enhance user engagement and satisfaction.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src={AbtIcon} alt="" />
                                </div>
                                <h4>Backend Developement</h4>
                                <p>My backend development skills enable me to build robust, scalable architectures that support dynamic applications. Skilled in PHP and MySQL, I ensure that data flows seamlessly, with an emphasis on security, efficiency, and maintainability, creating a solid foundation for any application’s success.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src={AbtIcon2} alt="" />
                                </div>
                                <h4>Graphics Design</h4>
                                <p>My background in graphic design allows me to blend technical and creative skills, crafting visuals that are both aesthetically pleasing and functional. From UI/UX layouts to brand elements, I create designs that enhance usability and bring concepts to life, ensuring a cohesive and engaging user experience.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src={AbtIcon1} alt="" />
                                </div>
                                <h4>Cyber Security</h4>
                                <p>With proficiency in cybersecurity, I am dedicated to protecting systems and data from vulnerabilities and threats. By applying best practices in secure coding, risk management, and network security, I help safeguard applications against cyber attacks, ensuring data integrity and user trust across digital platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
        </>
    );
};

export default About;