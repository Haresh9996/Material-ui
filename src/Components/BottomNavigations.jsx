import { BottomNavigation, BottomNavigationAction, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const BottomNavigations = () => {
    const [value, setValue] = useState(0)

    const renderContent = () => {
        switch (value) {
            case 0:
                return <Typography><Typography component={'h4'} variant='h4'>Content for Recents</Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iste beatae magni commodi incidunt doloribus ad velit pariatur totam, voluptatibus natus et recusandae distinctio temporibus!</Typography>;
            case 1:
                return <Typography><Typography component={'h4'} variant='h4'>Content for Favorites</Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iste beatae magni commodi incidunt doloribus ad velit pariatur totam, voluptatibus natus et recusandae distinctio temporibus!</Typography>;
            case 2:
                return <Typography><Typography component={'h4'} variant='h4'>Content for Nearby</Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iste beatae magni commodi incidunt doloribus ad velit pariatur totam, voluptatibus natus et recusandae distinctio temporibus!</Typography>;
            default:
                return null;
        }
    };

    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >Bottom Navigation</Typography>

            <div className='flex flex-wrap gap-6 p-4'>
                <Box sx={{ width: 500 }}>
                    <Typography>with label</Typography>
                    <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue) }} >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                </Box>
                <Box sx={{ width: 500 }}>
                    <Typography>without label</Typography>
                    <BottomNavigation value={value} onChange={(event, newValue) => { setValue(newValue) }} >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                </Box>

                <Box sx={{ width: 500 }}>
                    <Typography>With label and content</Typography>
                    <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue) }} >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                    <Box mt={2}>
                        {renderContent()}
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default BottomNavigations