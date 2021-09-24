import { useEffect, useState } from 'react';
import '../App.scss';
import { Countries } from '../Components/CountriesFlags';
import { Header } from '../Components/Header';
import { api } from '../services/api.js'

export function Home() {
    const [countryList, setCountryList] = useState([])
    const [inputText, setInputText] = useState('')
    const [selectedFilter, setSelectedFilter] = useState('region')

    useEffect(
        async () => {
            const response = await api.get(`all?access_key=${process.env.REACT_APP_API_KEY}`)
            setCountryList(response.data)
        }, []
    )


    const handleClick = async () => {
        const response = await api.get(`${selectedFilter}/${inputText}?access_key=${process.env.REACT_APP_API_KEY}`)
        setCountryList(response.data)
    }

    return (
        <>
            <Header />
            <select className='selector' name="filters" id="filters" defaultValue={selectedFilter} onChange={e => setSelectedFilter(e.target.value)}>
                <option value="regiao">Região</option>
                <option value="capital">Capital</option>
                <option value="lingua">Lingua</option>
            </select>
            <input className='fetch' placeholder='buscar' value={inputText} onChange={e => setInputText(e.target.value)} />
            <button className='butFilter' onClick={handleClick}>Pesquisar</button>

            <div className="countrygrid">
                {
                    countryList.map((country, index) => (
                        <Countries countryInfo={country} indexInfo={index} id={country.alpha2Code.toLowerCase()} />
                    ))
                }
            </div>
        </>
    )
}
