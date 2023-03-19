import '../styles/Tech.css'
import Lists from '../components/Lists'

function Tech() {
  return (
    <div className="Tech">
      <Lists />
      <div className="Text">
        <h1>is <span style={{color:'red'}}>experienced</span> in these technologies</h1>
      </div>
    </div>
  );
}

export default Tech;
