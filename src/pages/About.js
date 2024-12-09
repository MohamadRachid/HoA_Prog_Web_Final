import Header2 from '../components/Header2';
import image from '../images/HoA/background.png';
import './About.css';

const About = () => {
  return (
    <>
      <Header2 className="headerimg" title="" image={image}>
      </Header2>

      <section className='slogan'>
        <div className='slogancontainer'>
          <div className='slogancontent'>
            <h2>House of Athletes: Where Passion Meets Performance.</h2>
          </div>
        </div>
      </section>

      <section className="about__story">
        <div className="about__story-background">
          <div className="container about__story-container">
            <div className="about__section-content">
              <h1>Our Story</h1>
              <p>Welcome to House of Athletes, where passion meets performance. Born in the heart of Lebanon, our journey began with a simple idea: to empower athletes of all levels with apparel that matches their drive and ambition. Lebanon, with its rich cultural heritage and resilient spirit, inspired us to create a brand that celebrates diversity, perseverance, and unity.</p>
              <p>At House of Athletes, we understand the challenges faced by athletes in our region, from limited resources to underrepresented talent. That’s why we committed ourselves to designing high-quality, accessible sportswear that enables everyone—from weekend warriors to elite competitors—to achieve their personal best. Our story is about breaking boundaries, redefining limits, and inspiring a new generation of champions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="about__vision-background">
          <div className="container about__Vision-container">
            <div className="about__section-content">
              <h1>Our Mission</h1>
              <p>Our mission is to empower athletes of all backgrounds and abilities to achieve their fullest potential by providing innovative, durable, and stylish sportswear. We aim to bridge the gap between functionality and fashion, ensuring that every piece we create reflects the unique strength and resilience of Lebanon. By fostering a community of athletes who uplift and inspire one another, we strive to bring out the best in every individual.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="about__mission-background">
          <div className="container about__mission-container">
            <div className="about__section-content">
              <h1>Our Vision</h1>
              <p>At House of Athletes, we envision a world where sports and athleticism transcend barriers, bringing people together regardless of their backgrounds. Our vision is to see Lebanon recognized globally as a hub of athletic talent and innovation. We aspire to lead the industry in sustainable sportswear, leveraging local craftsmanship and cutting-edge technology to deliver excellence.

We dream of a future where every athlete—whether on the streets of Beirut or the mountains of Faraya—feels equipped, confident, and celebrated as part of the House of Athletes family. Together, we aim to inspire a healthier, more active, and more united society.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
