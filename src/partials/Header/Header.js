import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@mui/material/'

import { Menu as MenuIcon } from '@mui/icons-material'
import useStyles from './Header.style'

const Header = () => {
    const { classes } = useStyles()

    return (
        <Box >
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title}>
                        News
                    </Typography>
                    <Button className={classes.login}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header