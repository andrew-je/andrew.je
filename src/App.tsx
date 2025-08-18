import './App.css';
import ProfileHeader from './components/ProfileHeader';
import Bio from './components/Bio';
import ContactLinks from './components/ContactLinks';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="container">
      <ProfileHeader />
      <Bio />
      <ContactLinks />
      <SocialLinks />
    </div>
  );
}

export default App;