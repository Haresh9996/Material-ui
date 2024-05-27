import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Dialogs = () => {
    const [open, setOpen] = useState(false);
    const [openfirst, setOpenfirst] = useState(false);

    const handleOpenfirst = () => {
        setOpenfirst(true)
    }
    const handleClosefirst = () => {
        setOpenfirst(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >Dialog</Typography>
            <div className='flex flex-wrap gap-6 p-4'>
                <div>
                    <Button variant="outlined" onClick={handleOpenfirst}>
                        Open alert dialog
                    </Button>
                    <Dialog fullScreen open={openfirst} onClose={handleClosefirst} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                        <DialogTitle id="alert-dialog-title">
                            {"Use Google's location service?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Let Google help apps determine location. This means sending anonymous
                                location data to Google, even when no apps are running.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClosefirst}>Disagree</Button>
                            <Button onClick={handleClosefirst} autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <Button variant="outlined" onClick={handleOpen}>
                        Open form dialog
                    </Button>
                    <Dialog open={open} onClose={handleClose}
                        PaperProps={{
                            component: 'form', onSubmit: (event) => {
                                event.preventDefault();
                                const formData = new FormData(event.currentTarget);
                                const formJson = Object.fromEntries(formData.entries());
                                const email = formJson.email; console.log(email);
                                handleClose();
                            },
                        }} >
                        <DialogTitle>Subscribe</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To subscribe to this website, please enter your email address here. We
                                will send updates occasionally.
                            </DialogContentText>
                            <TextField autoFocus required margin="dense" id="name" name="email" label="Email Address" type="email" fullWidth variant="standard" />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Subscribe</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </>
    )
}

export default Dialogs