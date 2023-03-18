import { useState } from 'react';
import './App.css';
import { Gif } from './components/Gif';

function App() {
  const [data, setData] = useState(null);

  const dataApi = async () => {
    const api = await fetch(
      'https://rickandmortyapi.com/api/character/?page=2'
    );
    const data = await api.json();
    setData(data.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">App Rick And Morty </h1>

        {data ? (
          <Gif data={data} setData={setData} />
        ) : (
          <>
            <br />
            <img src="/src/assets/1.png" />
            <br />
            <br />
            <button className="btn-search" onClick={dataApi}>
              Buscar
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
