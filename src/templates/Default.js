import Container from '@mui/material/Container'
import { makeStyles } from 'tss-react/mui'

import Header from '../partials/Header/Header'

const useStyles = makeStyles() (() => {
    return {
        container: {
            padding:'100px 0'
        }
    }
})

const Default = ({children}) => {
    const { classes } = useStyles()

    return(
        <>
            <Header />
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Default