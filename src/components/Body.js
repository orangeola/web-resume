import '../styles/Body.css'
import Home from '../components/Home'
import Tech from '../components/Tech'
import Work from '../components/Work'
import About from '../components/About'

function Body() {
  return (
    <div className="Body">
      <Home />
      <Tech />
      <Work />
      <About />
    </div>
  );
}

export default Body;
