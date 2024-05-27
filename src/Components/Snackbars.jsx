import { Button, IconButton, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Snackbars = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >Snackbar</Typography>
            <div className='flex flex-wrap gap-6 p-4'>
                <div>
                    <Button onClick={handleClick}>Open Snackbar</Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="Note archived" action={action} anchorOrigin={{ vertical: 'top', horizontal: 'right'}} />
                </div>
            </div>
        </>
    )
}

export default Snackbars