import './App.css';
import ProfileHeader from './components/ProfileHeader';
import Bio from './components/Bio';
import ContactLinks from './components/ContactLinks';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';

function App() {
  return (
    <div className="container">
      <div className="content-wrapper">
        <ProfileHeader />
        <Bio />
        <ContactLinks />
        <SocialLinks />
        <Projects />
      </div>
    </div>
  );
}

export default App;