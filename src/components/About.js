// Create your About component here
import IMG from '../assets/about_header.svg';

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-heading">About Me</h1>
      <div className="about-info">

        <p className="about-desc">Detail-oriented IT enthusiast pursuing a BSc in Mathematics
and Computer Science with hands-on experience in
systems administration, digital security, and technical
support. Skilled in scripting, network troubleshooting, and
data-driven problem-solving. Passionate about
cybersecurity and cloud technologies, with a strong drive
to protect systems and optimize infrastructure through
secure, scalable solutions.</p>
      <div className="about-img">
        <div className="about-img-wrapper">
            <div className="about-img-wrapper">
              <img src={IMG} alt="Detective" />
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About;