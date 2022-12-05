import { Grid, Typography } from '@mui/material'
import Newsletter from '../newsLetter/newsLetter'
import './footer.css'

function Footer() {
    return <div className='main-footer-container'>
        <Grid>
            <Newsletter className='form' />
            <Typography className='disclaimer'>
                Cannabis Para Todos, Politecnico Gran Colombiano - Proceso de Software Personal - 2022
            </Typography>
        </Grid>
    </div>
}

export default Footer