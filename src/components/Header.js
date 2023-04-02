import { useEffect } from 'react';
import '../styles/Header.css'

function Header() {
  const handleClick = (id) => {
    switch(id){
      case 'tech':
        const techScroll = document.getElementsByClassName('Tech')[0];
        techScroll.scrollIntoView({behavior: 'smooth'});
        break;
      case 'work':
        const workScroll = document.getElementsByClassName('Work')[0];
        workScroll.scrollIntoView({behavior: 'smooth'});
        break;
      case 'about':
        const aboutScroll = document.getElementsByClassName('About')[0];
        aboutScroll.scrollIntoView({behavior: 'smooth'});
        break;
    }
  }

  return (
    <div className="Header">
        <p onClick={()=> handleClick('tech')}>technologies</p>
        <p style={{color:'red'}} onClick={() => handleClick('work')}>work</p>
        <p onClick={()=> handleClick('about')}>about</p>
    </div>
  );
}

export default Header;
