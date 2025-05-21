// Create your Footer component here

import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-contact-info">
        <h1 className="footer-heading">Connect With Me!</h1>
        <p className="footer-contact-access">Email: developermuriithi@gmail.com</p>
      </div>
      <div>
        <h1>Social Links</h1>
        <div className="social-icons">
          <a href="https://github.com/DeveloperMuriithi"><i><FaGithub/></i></a>
          <a href="https://www.linkedin.com/in/joshua-muriithi"><i><FaLinkedin/></i></a>
          <a href="github.com"><i><FaTwitter/></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;