import '../styles/WorkSection.css'
import link_black from '../assets/link_black.svg'
import github from '../assets/github-mark.svg'
import youtube from '../assets/youtube.svg'

function WorkSection(props) {
  const work = props.workObj;
  return (
    <div className="workSection" key={work.title}>

      {!work.yt && 
      <div className="workTitle">
        <h2>{work.title}</h2>
        <div>
          <img className="logo" src={github} style={{filter: 'invert(99%) sepia(0%) saturate(2%) hue-rotate(291deg) brightness(108%) contrast(100%)'}} onClick={()=> window.open(work.git)} title="github repo"/>
          <img className="logo" src={link_black} style={{filter: 'invert(99%) sepia(0%) saturate(2%) hue-rotate(291deg) brightness(108%) contrast(100%)'}} onClick={()=> window.open(work.live)} title="live website"/>
        </div>
      </div>
      }

      {work.yt && 
      <div className="workTitle">
        <h2>{work.title}</h2>
        <div>
          <img className="logo" src={youtube} style={{filter: 'invert(99%) sepia(0%) saturate(2%) hue-rotate(291deg) brightness(108%) contrast(100%)'}} onClick={()=> window.open(work.link)} title="youtube link"/>
        </div>
      </div>
      }


      <img className="demoPicture" src={work.img}/>
      <p>{work.dsc}</p>
    </div>
  );
}

export default WorkSection;
