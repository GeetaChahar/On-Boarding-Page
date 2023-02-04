import './App.css';

function App() {

  const handleClick = () => {
    console.log("i'm click")
  }

  return (
    <div className="App">
      <button className='btn' onClick={handleClick}><span className='round' >A</span>Campaign Structure</button>
      <br></br>
      <button className='btn' onClick={handleClick}><span className='round'>B</span>Learn Facebook Basic</button>
      <br></br>
      <button className='btn' onClick={handleClick}><span className='round'>C</span>3rd Choice</button>
      <br></br>
    </div>
  );
}

export default App;
