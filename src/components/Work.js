import '../styles/Work.css'
import WorkTab from '../components/WorkTab'

function Work() {
  return (
    <div className="Work">
      <div className="workText">
        <h1>and has <span style={{color:'red'}}>this</span> to show for it.</h1>
      </div>
      <WorkTab />
    </div>
  );
}

export default Work;
