import { Box, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'

const Ratings = () => {
    const [value, setValue] = useState(2);

    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3' >Floating Action Buttons</Typography>

            <div className='flex flex-wrap gap-6 p-4'>
                <Box sx={{ '& > legend': { mt: 2 }, }} >
                    <Typography component="legend">Controlled</Typography>
                    <Rating name="simple-controlled" value={value} onChange={(event, val) => { setValue(val) }} />
                    <Typography component="legend">Read only</Typography>
                    <Rating name="read-only" value={value} readOnly />
                    <Typography component="legend">Disabled</Typography>
                    <Rating name="disabled" value={value} disabled />
                    <Typography component="legend">No rating given</Typography>
                    <Rating name="no-value" value={null} />
                    <Typography component="legend">Precision</Typography>
                    <Rating name="no-value" precision={0.5} value={value} onChange={(e, val) => setValue(val)} />
                </Box>
            </div>
        </>
    )
}

export default Ratings