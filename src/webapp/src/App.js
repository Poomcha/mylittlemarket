import './App.css';
import { useEffect, useState } from 'react';

const telegram = window.Telegram.WebApp;
const apiUrl = 'http://localhost:3001/';
const { initData, initDataUnsafe } = { ...telegram };

function App() {
  const [testFetch, setTestFetch] = useState(0);

  useEffect(() => {
    fetch(`${apiUrl}`, { headers: { data: `${initData}` } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [testFetch]);

  const handleClick = () => {
    setTestFetch((prev) => (prev += 1));
  };

  return (
    <div className="App">
      <button onClick={handleClick}>TEST FETCH !</button>
    </div>
  );
}

export default App;
