import logo from '../../logo-color.svg'
import './header.css'
import {Box, Link} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const preventDefault = (event) => event.preventDefault()

function Header() {
    const navigate = useNavigate()

    return (
        <div className='main-header-container'>
            <img src={logo} className="logo" alt="logo" />
            <Box
                onClick={preventDefault}
                className='menu'
            >
                <Link className='link' underline="hover" onClick={() => {
                    navigate('/')
                }}>Inicio</Link>
                <Link className='link' underline="hover" onClick={() => {
                    navigate('/usos-cannabis')
                }}>Uso del cannabis</Link>
                <Link className='link' underline="hover" onClick={() => {
                    navigate('/')
                }}>Industria del cannabis</Link>
            </Box>
        </div>)
}

export default Header