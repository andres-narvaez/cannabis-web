import logo from '../../logo-color.svg'
import './header.css'

function Header() {

    return (
        <div className='main-header-container'>
            <img src={logo} className="logo" alt="logo" />
        </div>)
}

export default Header