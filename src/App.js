import React, {useEffect} from 'react'
import './global.css';

function App() {

  const getCars = ()=>{
    fetch('https://api.b7web.com.br/carros/api/carros')
      .then(function(result){
        return result.json()
      })
      .then(function(json){
        console.log('Resultado: ',json)
      })
  }

  useEffect(()=>{
    getCars()
  },[])


  return (
    <div className="App">
      <h1>Olá, mundo!</h1>
      <button onClick={getCars}>Carregar Caros</button>
    </div>
  );
}

export default App;
