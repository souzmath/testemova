import { Header } from "../Components/Header"
import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { api } from '../services/api.js'

export function Details() {

    let { id } = useParams()
    const [countryDetails, setCountryDetails] = useState([])
    useEffect(
        async () => {
            const response = await api.get(`alpha/${id}?access_key=${process.env.REACT_APP_API_KEY}`)
            setCountryDetails(response.data)
        }, []
    )

    return (
        <>
            <Header />
            <img className='imgdetails' src={`http://flagcdn.com/160x120/${id}.png`} />

            <h3 className='detailtext'>
                Nome : {countryDetails.name}
            </h3>
            <h3 className='detailtext'>
                Capital : {countryDetails.capital}
            </h3>
            <h3 className='detailtext'>
                Regiao : {countryDetails.region}
            </h3>
        </>

    )
}