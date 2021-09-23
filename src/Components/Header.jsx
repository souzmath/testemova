import Logo from '../assets/logo_principal.png'
import Arrow from '../assets/arrow.svg'

export function Header() {
    return (
        <div className="header">
            <img src={Logo} />
            <button>
                <object data={Arrow} /> Voltar</button>
        </div>
    )
}