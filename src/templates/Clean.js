import Container from '@mui/material/Container'
import { makeStyles } from 'tss-react/mui'
import { Outlet } from 'react-router-dom'

const useStyles = makeStyles() (() => {
    return {
        container: {
            padding:'100px 0'
        }
    }
})

const Clean = () => {
    const { classes } = useStyles()

    return(
        <>
            <Container className={classes.container}>
                <Outlet />
            </Container>
        </>
    )
}

export default Clean