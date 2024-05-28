import { Box, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const Tabses = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >Tab</Typography>

            <div className='flex flex-wrap gap-6 p-4'>
                <Box sx={{ width: '100%' }}>
                    <Tabs variant='fullWidth' value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example" >
                        <Tab value="one" label="Item One" />
                        <Tab value="two" label="Item Two" disabled />
                        <Tab value="three" label="Item Three" />

                    </Tabs>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Tabs scrollButtons variant='scrollable' value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example" >
                        <Tab value="one" label="Item One" />
                        <Tab value="two" label="Item Two" disabled />
                        <Tab value="three" label="Item Three" />
                        <Tab value="four" label="Item Four" />
                        <Tab value="five" label="Item Five" />
                        <Tab value="six" label="Item Six" />
                        <Tab value="seven" label="Item Seven" />
                        <Tab value="eight" label="Item Eight" />
                        <Tab value="nine" label="Item Nine" />
                        <Tab value="ten" label="Item Ten" />
                    </Tabs>
                </Box>
                <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
                    <Tab icon={<PhoneIcon />} aria-label="phone" />
                    <Tab icon={<FavoriteIcon />} aria-label="favorite" />
                    <Tab icon={<PersonPinIcon />} aria-label="person" />
                </Tabs>
                <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                    <Tab icon={<PhoneIcon />} aria-label="phone" label="RECENTS" />
                    <Tab icon={<FavoriteIcon />} aria-label="favorite" label="FAVORITES" />
                    <Tab icon={<PersonPinIcon />} aria-label="person" label="NEARBY" />
                </Tabs>
                <Box sx={{ width: '100%' }}>
                    <Tabs orientation='vertical' scrollButtons variant='scrollable' value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example" >
                        <Tab value="one" label="Item One" />
                        <Tab value="two" label="Item Two" disabled />
                        <Tab value="three" label="Item Three" />
                        <Tab value="four" label="Item Four" />
                        <Tab value="five" label="Item Five" />
                        <Tab value="six" label="Item Six" />
                        <Tab value="seven" label="Item Seven" />
                        <Tab value="eight" label="Item Eight" />
                        <Tab value="nine" label="Item Nine" />
                        <Tab value="ten" label="Item Ten" />
                    </Tabs>
                </Box>
            </div>
        </>
    )
}

export default Tabses