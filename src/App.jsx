import './App.scss';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import WhySushi from './components/WhySushi/WhySushi';
import Ethos from './components/Ethos/Ethos';
import FoodGrid from './components/FoodGrid/FoodGrid';
import Testimonial from './components/Testimonials/Testimonial';
import Subscribe from './components/Subscribe/Subscribe';
import FooterNotes from './components/FooterNotes/FooterNotes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <AboutUs />
      <WhySushi />
      <Ethos />
      <FoodGrid />
      <Testimonial />
      <Subscribe />
      <FooterNotes />
      <Footer />
    </div>
  );
}

export default App;
