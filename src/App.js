import { useState } from 'react';
import './App.css';



function App() {
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/CMHC_jursu4");


  const handleClick = (url) => {
    setVideoUrl(url)
  }

  return (
    <div className="App">
      <div className='video'>
        <iframe width="760" height="100%" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div className='blank'>
        <div>
          <button className='btn' onClick={() => handleClick("https://www.youtube.com/embed/CMHC_jursu4")}><div className='round'>A</div>Campaign Structure</button>
          <br></br>
          <button className='btn' onClick={() => handleClick("https://www.youtube.com/embed/rrj4V9npONY")}><div className='round'>B</div>Learn Facebook Basic</button>
          <br></br>
          <button className='btn' onClick={() => handleClick("https://www.youtube.com/embed/WW1zzv4-qlE")}><div className='round'>C</div>3rd Choice</button>
          <br></br>
        </div>
      </div>

    </div>
  );
}

export default App;
