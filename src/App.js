import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import countrydata from './services/countrydata'

const App = () => {
  const [filtr, setFiltr ] = useState()
  const [ maat, setMaat ] = useState([])
  const [ show, setShow ] = useState(false)
  // const dataTemp = data
  // console.log(data)

  useEffect(() => {
    countrydata.getAll().then(countries => setMaat(countries))
  }, [])

  const handleFilter = (event) => {
    setFiltr(event.target.value)
  }

  
  return (
    <div>
      <Filter handleFilter={handleFilter} /><br/>
      <div className="countries">
        {maat.filter(mt => mt.name.toLowerCase().includes(filtr))
          .map((m, i) => {
            if(show === false){
              return (
                <div key={i} >
                  <p>{m.name}<button onClick={() => setShow(!show)} >show</button></p>
                </div>
              )
            }else {
              return (
                <div key={i} className="cntry" >

                <h2>{m.name}</h2>
                <p>Capital {m.capital}</p>
                <p>Population {m.population}</p>
                <h2>Languages</h2>
                <ul>
                  {m.languages.map((l, j) => {
                    return (
                      <li key={j}>{l.name}</li>
                    )
                  })}
                </ul>
                <img src={m.flag} alt={m.name} style={{width: '25%'}} />
                </div>
              )
            }
              
              
            })
          }
        
      </div>
    </div>
  )
}

export default App
