import { Grid } from "@mui/material"
import Header from "../../components/header/header"
import { Outlet } from 'react-router-dom'
import Footer from "../../components/footer/footer"

function DefaultTemplate(props) {
    return <>
        <Header />
        <Grid container>
            <Outlet />
        </Grid>
        <Footer />
    </>
}

export default DefaultTemplate