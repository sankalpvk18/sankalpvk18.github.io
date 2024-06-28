import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

import { styles } from "./styles";
import './styles.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-hero-custom'>
        <div className={`${styles.heroBackground}`}>
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
