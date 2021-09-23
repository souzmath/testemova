import { useEffect, useState } from 'react';
import './App.scss';
import { Countries } from './Components/Contries';
import { Header } from './Components/Header';
import { api } from './services/api.js'

function App() {

  const [countryList, setCountryList] = useState([])

  useEffect(
    async () => {
      const response = await api.get('all?access_key=7f7e993a0718846c9000e07bf17b41a4')
      setCountryList(response.data)
    }, []
  )

  return (
    <div className="App">
      <Header/>
      <div className="countrygrid">
      {
        countryList.map((country, index) => (
        <Countries countryInfo={country} indexInfo={index}/>
        ))
      }
      </div>
    </div>
  );
}

export default App;
