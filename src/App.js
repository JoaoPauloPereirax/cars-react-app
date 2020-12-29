import React, {useEffect,useState} from 'react'
import './global.css';

function App() {

  const [cars,setCars]=useState([])

  const [loading,setLoading] = useState(false)

  const getCars = ()=>{
    setLoading(true)
    fetch('https://api.b7web.com.br/carros/api/carros')
      .then(function(result){
        return result.json()
      })
      .then(function(json){
        setLoading(false)
        if(json.error === ''){
          setCars(json.cars)
        }else{
          alert(json.error)
        }
      })
  }

  useEffect(()=>{
    getCars()
  },[])


  return (
    <div className="App">
      <h1>Lista de Carros</h1>
      <button onClick={getCars}>Atualizar lista</button>

    <hr/>

    {loading &&
      <h1>Carregando Carros...</h1>
    }

    {cars.map((item,index)=>(
      <div key={index} >
        <img src={item.photo} />
        <h3> {item.brand} - {item.name} </h3>
        <p> {item.year} - R${item.price} </p>
      </div>
    ))}

    </div>
  );
}

export default App;
