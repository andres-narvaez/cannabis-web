import { Grid, Typography } from '@mui/material'
import './countryName.css'

function CountryName(props) {
    const {label, color} = props

    return <Grid container className='country-container'>
        <div className='square' style={{backgroundColor: color}}/>
        <Typography className='country-label' >
            {label}
        </Typography>
    </Grid>
}


export default CountryName