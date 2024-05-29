import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const Modals = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >Modal</Typography>

            <div className='flex flex-wrap gap-6 p-4'>
                <div>
                    <Button variant='outlined' onClick={handleOpen}>Open Modal</Button>
                    <Modal open={open} onClose={handleClose} >
                        <Box sx={{ position: "absolute", top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, border: '2px solid #000', boxShadow: 24, p: 4, }} >
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </div>

            </div >
        </>
    )
}

export default Modals