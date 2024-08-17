
import './App.css';
import CollectionSection from './components/CollectionSection';
import DigitalArtGallery from './components/DigitalArtGallery';
import FolkArtstore from './components/FolkArtStore';
import Footer from './components/footer';
import Homepage from './components/Homepage';
import ImageGrid from './components/Image_grid';
import ImageText from './components/ImageText';
import Navbar from './components/Navbar';
import PainterSection from './components/Painter_Section';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
         <Navbar/>
         <ImageText/>
         <ImageGrid/>
         <Homepage/>
         <CollectionSection/>
         <DigitalArtGallery/>
         <FolkArtstore/>
         <PainterSection/>
         <Testimonials/>
         <Footer/>

    </>
  );
}

export default App;
