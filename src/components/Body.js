// Create your Body component here
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/DSC_5388.JPG';

const Body = () => {
  return (
    <div id="body" className="body">
      <div className="body-container">
        <div className="body-profile">
          <img className="body-img" alt="avatar" src={Avatar} />

          <div className="body-content">
            <div className="body-headline">Joshua Muriithi</div>
            <div className="body-text">CyberSecurity Engineer</div>
          </div>

          <div className="body-icons">
            <a
              href="https://github.com/DeveloperMuriithi"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-muriithi"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
