import '../styles/Home.css'
import React from 'react';
import Typed from 'typed.js';

function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Alexander'],
      typeSpeed: 140,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <div className="Home">
        <h1><span ref={el} /></h1>
    </div>
  );
}

export default Home;
