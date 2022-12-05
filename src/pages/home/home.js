import './home.css'
import { Grid, Typography } from '@mui/material'
import { PieChart } from 'react-minimal-pie-chart'
import CountryName from '../../components/countryName/countryName'

const countries = [
   {
      label: 'EEUU US$10.000 millones',
      color: '#7ab722'
   },
   {
      label: 'Canadá US$5.500 millones',
      color: '#189eb2'
   },
   {
      label: 'Alemania US$87.3 millones',
      color: '#e9a145'
   },
   {
      label: 'Italia US$47.8 millones',
      color: '#eb4d16'
   },
   {
      label: 'Uruguay US$45.5 millones',
      color: '#eb1616'
   }
]

function HomePage() {
   return <Grid container>
      <img  className='main-banner' src='/banner-home.jpg' alt='banner cannabis' />
      <Grid container justifyContent={'center'} className='contenido-wrapper'>
         <Typography className='texto-principal'>
            El mercado de cannabis mueve en el mundo un promedio de <strong>US$150.000 millones anuales</strong> y los expertos creen que habrá crecimiento
         </Typography>
      </Grid>
      <Grid container justifyContent={'center'} className='countries-stats-container'>
         <Grid item>
            <Typography className='text-stats'>
               De acuerdo con las estimaciones de New Frontier Data, en su reporte Global Cannabis Report: 2020 Industry Outlook, se estima que el mercado global de cannabis, considerando tanto el regulado como el ilícito, tiene un valor de unos US$$344.000 millones. En el informe también se identificó que los cinco principales mercados regionales son Asia, con US$132.900 millones; Norteamérica, con US$85.600 millones; Europa, con US$ 68.500 millones; África, que asciende hasta US$37.300 millones y América Latina, con US$9.800 millones.
            </Typography>
         </Grid>
         <Grid item className='countries-container'>
            {
               countries.map((item, index) => (
                  <CountryName label={item.label} color={item.color} key={index + 'country'}/>
               ))
            }
         </Grid>
         <Grid item className='pie-container'>
            <PieChart
               animate
               data={[
                  { title: 'EEUU', value: 64, color: '#7ab722' },
                  { title: 'Canadá', value: 30, color: '#189eb2' },
                  { title: 'Alemania', value: 3, color: '#e9a145' },
                  { title: 'Italia', value: 2, color: '#eb4d16' },
                  { title: 'Uruguay', value: 1, color: '#eb1616' },
               ]}
            />
         </Grid>
      </Grid>
      <Grid>
      <Typography className='texto-banner'>
            El cannabis <strong>una industria</strong> de crecimiento exponencial.
         </Typography>
      </Grid>
   </Grid> 
}

export default HomePage