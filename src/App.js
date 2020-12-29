import React, {useEffect,useState} from 'react'
import './global.css';

function App() {

  const [cars,setCars]=useState([])

  const [loading,setLoading] = useState(false)

  const [year,setYear] = useState('')

  const async getCars = ()=>{
    setLoading(true)
    const result = await fetch(`https://api.b7web.com.br/carros/api/carros?ano=${year}`)
    const json = await result.json()
    setLoading(false)

    if(json.error === ''){
      setCars(json.cars)
    }else{
      alert(json.error)
    }

  }

  useEffect(()=>{
    getCars()
  },[year])

  const handleYearChange = (e)=>{
    setYear(e.target.value)
  }


  return (
    <div className="App">
      <h1>Lista de Carros</h1>
      <select onChange={handleYearChange} >
        <option></option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
        <option>2018</option>
        <option>2017</option>
        <option>1994</option>
      </select>

      <button onClick={getCars}>Atualizar lista</button>

    <hr/>

    {loading &&
      <h1>Carregando Carros...</h1>
    }

    {cars.length === 0 && loading === false &&
      <h2>Nenhum carro foi encontrado!</h2> 
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
