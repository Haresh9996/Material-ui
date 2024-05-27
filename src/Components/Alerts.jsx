import { Alert, AlertTitle, Backdrop, Box, Button, CircularProgress, Collapse, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const Alerts = () => {
    const [open, setOpen] = useState(true);

    const [bopen, setbOpen] = React.useState(false);
    const handleClose = () => {
        setbOpen(false);
    };
    const handleOpen = () => {
        setbOpen(true);
    };

    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >Alert</Typography>
            <div className='flex flex-wrap gap-6 p-4 my-8'>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        Here is a gentle confirmation that your action was successful.
                    </Alert>
                </Stack>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="success">This is a success Alert.</Alert>
                    <Alert severity="info">This is an info Alert.</Alert>
                    <Alert severity="warning">This is a warning Alert.</Alert>
                    <Alert severity="error">This is an error Alert.</Alert>
                </Stack>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="success" variant='filled'>This is a fillded variant.</Alert>
                    <Alert severity="info" variant='outlined'>This is an outlined variant.</Alert>
                    <Alert severity="warning" variant='standard'>This is a standard variant.</Alert>
                </Stack>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        This is a success Alert with an encouraging title.
                    </Alert>
                    <Alert severity="info">
                        <AlertTitle>Info</AlertTitle>
                        This is an info Alert with an informative title.
                    </Alert>
                    <Alert severity="warning">
                        <AlertTitle>Warning</AlertTitle>
                        This is a warning Alert with a cautious title.
                    </Alert>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        This is an error Alert with a scary title.
                    </Alert>
                </Stack>
                <Box sx={{ width: '100%' }}>
                    <Collapse in={open}>
                        <Alert action={
                            <IconButton aria-label="close" color="inherit" size="small" onClick={() => { setOpen(false) }} >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                            sx={{ mb: 2 }} >
                            Click the close icon to see the Collapse transition in action!
                        </Alert>
                    </Collapse>
                    <Button disabled={open} variant="outlined" onClick={() => { setOpen(true) }} >
                        Re-open
                    </Button>
                </Box>
            </div>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >BackDrop</Typography>
            <div>
                <div>
                    <Button onClick={handleOpen}>Show backdrop</Button>
                    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={bopen} onClick={handleClose} >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </div>
            </div>
        </>
    )
}

export default Alerts