import { AppBar, Box, Button, FormControlLabel, FormGroup, IconButton, MenuItem, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';

const AppBars = () => {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >Appbar</Typography>
            <div >
                <div>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    News
                                </Typography>
                                <Button color="inherit">Login</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </div>
                <div>
                    <Box sx={{ flexGrow: 1 }}>
                        <FormGroup>
                            <FormControlLabel control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />} label={auth ? 'Logout'
                                :
                                'Login'} />
                        </FormGroup>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Photos
                                </Typography>
                                {auth && (
                                    <div>
                                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit" >
                                            <AccountCircle />
                                        </IconButton>
                                        <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorEl)} onClose={handleClose} >
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                        </Menu>
                                    </div>
                                )}
                            </Toolbar>
                        </AppBar>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default AppBars