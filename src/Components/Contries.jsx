export function Countries({countryInfo,indexInfo}) {
    return (
        <div key={indexInfo}>
            <img src={`http://flagcdn.com/160x120/${countryInfo.alpha2Code.toLowerCase()}.png`} />

            <div>{
                countryInfo.name
            }
            </div>
        </div>
    )
}