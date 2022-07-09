import './App.css';
import { useState } from 'react';

function App() {
  const [serial0, setSerial0] = useState();
  const [serial1, setSerial1] = useState();
  const [serial2, setSerial2] = useState();
  const [serial3, setSerial3] = useState();

  const handleClick = () => {
    setSerial0(Math.floor(1000 + Math.random() * 9000));
    setSerial1(Math.floor(1000 + Math.random() * 9000));
    setSerial2(Math.floor(1000 + Math.random() * 9000));
    setSerial3(Math.floor(1000 + Math.random() * 9000));
  }

  return (
    <div className="App">
      <h1>S K I D R O W</h1>
      <hr />
      <p>Universal Key Generator. Click "Generate" button to get your serial keys!</p>
      <p className='serial'>{ serial0 } - { serial1 } - { serial2 } - { serial3 }</p>
      <button onClick={ handleClick }>Generate</button>
    </div>
  );
}

export default App;
