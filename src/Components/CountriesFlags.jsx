import { useHistory } from "react-router"

export function Countries({countryInfo,indexInfo,id}) {
   
    const history = useHistory();
    const handleClickCountry = () =>{
        history.push(`/details/${id}`) 
    }

    return (
        <div className='singlegrid' key={indexInfo} onClick={handleClickCountry}>
            <img src={`http://flagcdn.com/160x120/${countryInfo.alpha2Code.toLowerCase()}.png`} />

        </div>
    )
}