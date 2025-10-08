import { FaGithub, FaLinkedin } from "react-icons/fa6";

const SocialLinks = () => (
  <div className="social-links">
    <a
      className="social-item"
      href="https://github.com/nomad10z"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub /> /nomad10z
    </a>
    <a
      className="social-item"
      href="https://www.linkedin.com/in/andrewraynes/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin /> in/andrewraynes
    </a>
  </div>
);

export default SocialLinks;
