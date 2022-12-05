import './home.css'
import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import { PieChart } from 'react-minimal-pie-chart'
import CountryName from '../../components/countryName/countryName'
import ReactPlayer from 'react-player'

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
      <Grid container className='container-main-banner'>
         <Typography className='texto-banner'>
            El cannabis <strong>una industria</strong> de crecimiento exponencial.
         </Typography>
      </Grid>
      <Grid container justifyContent={'center'} className='contenido-wrapper'>
         <Typography className='texto-principal'>
            El mercado de cannabis mueve en el mundo un promedio de <strong>US$150.000 millones anuales</strong> y los expertos creen que habrá crecimiento
         </Typography>
      </Grid>
      <Grid container justifyContent={'center'} className='countries-stats-container'>
         <Grid item className='container-text-stats'>
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
      <Grid container className='container-texto-banner'>
         <Typography className='texto-banner'>
            El cannabis <strong>una industria</strong> de crecimiento exponencial.
         </Typography>
      </Grid>
      <Grid container className='video-container'>
         <ReactPlayer url='https://youtu.be/vn0_kM0jVyk' />
         <Typography className='text-video'>
            Tras muchos años de investigación acerca del cannabis, se han desarrollado innumerables estudios y proyectos donde se han demostrado  y se siguen demostrando un sinfín de propiedades de la planta, sobre todo a nivel medicinal, científico y terapéutico.
         </Typography>     
      </Grid>
      <Grid container className='info-container'>
         <Typography variant='h2' className='subtitle'>
            Los negocios (legales) más rentables de la industria del cannabis
         </Typography>
         <Grid container className='video-container'>
         <ReactPlayer url='https://youtu.be/9mZ3UihuvE4' />
         <Grid className='text-video-dos'>
            <Typography>
               Con la aprobación y legalización del uso del cannabis en muchos países, ya sea de forma medicinal o para consumo recreativo, han proliferado las oportunidades de negocio en esta industria que se abre sitio entre nuestros comercios a pasos agigantados.
            </Typography> 
            <List>
               <ListItem>
                  <ListItemIcon>
                     <RequestQuoteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Productos Cosméticos" />
               </ListItem>
               <ListItem>
                  <ListItemIcon>
                     <RequestQuoteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Productos Alimentarios" />
               </ListItem>
               <ListItem>
                  <ListItemIcon>
                     <RequestQuoteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Flores Ornamentales" />
               </ListItem>
               <ListItem>
                  <ListItemIcon>
                     <RequestQuoteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Bancos de semillas" />
               </ListItem>
               <ListItem>
                  <ListItemIcon>
                     <RequestQuoteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Organización de eventos" />
               </ListItem>
               <ListItem>
                  <ListItemIcon>
                     <RequestQuoteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Consultoria especializada" />
               </ListItem>
            </List>
         </Grid>
             
         </Grid>
         
      </Grid>
   </Grid> 
}

export default HomePage