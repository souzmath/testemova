import Logo from '../assets/logo_principal.png'
import Arrow from '../assets/arrow.svg'
import { useHistory } from "react-router"

export function Header() {

    const history = useHistory();

    return (
        <div className="header">
            <img src={Logo} />
            <button onClick={()=>history.goBack()}>
                <object data={Arrow} /> Voltar</button>
        </div>
    )
}