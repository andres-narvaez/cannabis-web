import logo from '../../logo-color.svg'
import './header.css'
import {Box, Link} from '@mui/material'

const preventDefault = (event) => event.preventDefault()

function Header() {
    return (
        <div className='main-header-container'>
            <img src={logo} className="logo" alt="logo" />
            <Box
                onClick={preventDefault}
                className='menu'
            >
                <Link className='link' underline="hover" href="/">Inicio</Link>
                <Link className='link' underline="hover" href="/">Uso del cannabis</Link>
                <Link className='link' underline="hover" href="/">Industria del cannabis</Link>
            </Box>
        </div>)
}

export default Header