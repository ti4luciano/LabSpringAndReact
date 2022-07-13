import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Logo" />
                <h1>App Lab</h1>
                <p>
                    Desenvolvido por
                    <a href="mailto:ti4luciano@gmail.com"> Luciano Alves</a>
                </p>
            </div>
        </header>
    )
}
export default Header