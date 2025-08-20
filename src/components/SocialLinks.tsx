import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const SocialLinks = () => (
  <div className="social-links">
    <a
      className="social-item"
      href="https://x.com/nomad10z"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaXTwitter /> @nomad10z
    </a>
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
    <a
      className="social-item"
      href=""
      target="_blank"
      rel="noopener noreferrer"
    >
      andrewraynes.eth
    </a>
    <a
      className="social-item"
      href="https://nostr.com/npub1ljvzz7em74wzxwp2fcq5t0c3h567jtdw5227y56eke7vlpmge38sxeuhj5"
      target="_blank"
      rel="noopener noreferrer"
      
    > Nostr
    </a>
  </div>
);

export default SocialLinks;
