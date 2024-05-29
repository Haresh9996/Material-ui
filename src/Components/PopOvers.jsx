import { Button, Popover, Typography } from '@mui/material'
import React, { useState } from 'react'

const PopOvers = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >PopOver</Typography>

            <div className='flex flex-wrap gap-6 p-4'>
                <div>
                    <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                        Open Popover
                    </Button>
                    <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} >
                        <Typography sx={{ p: 2 }}>The content of the bottom left Popover.</Typography>
                    </Popover>
                </div>
                <div>
                    <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                        Open Popover top center
                    </Button>
                    <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center', }} >
                        <Typography sx={{ p: 2 }}>The content of the top center Popover.</Typography>
                    </Popover>
                </div>
                <div>
                    <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                        Open Popover bottom right
                    </Button>
                    <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} >
                        <Typography sx={{ p: 2 }}>The content of the bottom right Popover.</Typography>
                    </Popover>
                </div>
            </div>
        </>
    )
}

export default PopOvers