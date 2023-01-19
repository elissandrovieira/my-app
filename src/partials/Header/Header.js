import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material/'
import { 
    Menu as MenuIcon,
    Home as HomeIcon,
    PersonAdd as PersonAddIcon,
} from '@mui/icons-material'

import useStyles from './Header.style'

const Header = () => {
    const { classes } = useStyles()

    const [menuOpen, setMenuOpen] = useState(false)
    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    
    const navigate = useNavigate()
    const navigateMenu = (e) => {
        navigate(e)
        handleToggleMenu()
    }

    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton onClick={() => handleToggleMenu()}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title}>
                        News
                    </Typography>
                    <Button className={classes.login}>Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                <List>
                    <ListItemButton onClick={() => navigateMenu('/')}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Homepage</ListItemText>
                    </ListItemButton>
                    <ListItemButton onClick={() => navigateMenu('/customers')}>
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText>Customers register</ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    )
}

export default Header