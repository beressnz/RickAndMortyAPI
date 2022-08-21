import imgRickMorty from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';


function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const apiCharacter = await api.json();
    setCharacters(apiCharacter.results)
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ):(
          <>
            <img src={imgRickMorty} alt='Rick & Morty' className='img-home'></img>
            <button onClick={reqApi} className='btn-search'>Buscar personaje</button>
          </>
        )}
       
       
       
      </header>
    </div>
  );
}

export default App;
