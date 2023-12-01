import './App.css';
import UpdateNews from './components/Announcement';
import Footer from './components/Footer';
import GameBanner from './components/GameBanner';
import HomepageGrid from './components/GameCollection';
import GameSection from './components/GameSection';
import PUBGNavbar from './components/Header';
import CollabPages from './components/CollabPages';
import TeaserSection from './components/TeaserSection';

function App() {
  return (

    <>

      {/* Annoucement component */}
      {/* <UpdateNews /> */}

      {/* Header navbar of the website */}
      <PUBGNavbar />

      {/* Taeser Out Now! */}
      {/* <TeaserSection /> */}

      {/* GameHeader Section: */}
      <GameSection />

      {/* Game Update Grid Collection: */}
      <HomepageGrid />

      {/* Game Banner  */}
      <GameBanner />

      {/* Pagani CollabPages */}
      <CollabPages />

      {/* Footer component */}
      <Footer />

    </>
  );
}

export default App;
