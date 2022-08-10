import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import Categories from 'components/Categories';
import Campaignes from 'components/Campaignes';
import Favorites from 'components/Favorites';
import MobileApp from 'components/MobileApp';
import Cards from 'components/Cards';
import Footer from 'components/Footer';
import { useWindowWidth } from '@react-hook/window-size';

function App() {

  const windowWidth = useWindowWidth()

  return (
    <>
      <Header />
      {windowWidth <= 768 && <Campaignes />}
      <HeroSection />
      <Categories />
      {windowWidth > 768 && <Campaignes />}
      <div className="grid gap-y-6 py-6 pb-14 container mx-auto">
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
