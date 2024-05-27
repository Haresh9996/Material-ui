import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation'
import { Typography } from '@mui/material';

const FloatingActionButtons = () => {
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3' >Floating Action Buttons</Typography>

            <div className='flex flex-wrap gap-6 p-4'>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="edit">
                        <EditIcon />
                    </Fab>
                    <Fab variant="extended">
                        <NavigationIcon sx={{ mr: 1 }} />
                        Navigate
                    </Fab>
                    <Fab disabled aria-label="like">
                        <FavoriteIcon />
                    </Fab>
                </Box>
                <div>
                    <h5>Size</h5>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab color="primary" size='large' aria-label="add">
                            <AddIcon />
                        </Fab>
                        <Fab color="primary" size='medium' aria-label="add">
                            <AddIcon />
                        </Fab>
                        <Fab color="primary" size='small' aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Box>
                </div>

            </div>
        </>
    )
}

export default FloatingActionButtons