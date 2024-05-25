import { Button, ButtonGroup, IconButton, Stack, Typography } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveIcon from '@mui/icons-material/Save';
import { styled } from '@mui/material/styles';
import React from 'react'

const Buttons = () => {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3' >Buttons</Typography>
            <div className='flex flex-wrap gap-6'>
                <div>
                    <h5>Basic Text Buttons</h5>
                    <Button>Primary</Button>
                    <Button disabled>Disabled</Button>
                    <Button href="#">Link</Button>
                </div>
                <div>
                    <h5>Colors</h5>
                    <Stack direction={'row'} spacing={1}>
                        <Button variant='contained' color='primary'>Primary</Button>
                        <Button variant='contained' color='secondary'>secondary</Button>
                        <Button variant='contained' color='success'> success</Button>
                        <Button variant='contained' color='info'> info</Button>
                        <Button variant='contained' color='warning'>warning</Button>
                        <Button variant='contained' color='inherit'>inherit</Button>
                        <Button variant='contained' color='error'>error</Button>
                    </Stack>
                </div>
                <div>
                    <h5>size</h5>
                    <Stack direction={'row'} spacing={1}>
                        <Button variant='contained' size='small' color='primary'>Primary</Button>
                        <Button variant='contained' size='medium' color='secondary'>secondary</Button>
                        <Button variant='contained' size='large' color='success'> success</Button>
                    </Stack>
                </div>

                <div>
                    <h5>Varients Buttons</h5>
                    <Stack direction={'row'} spacing={1}>
                        <Button variant="text">Text</Button>
                        <Button variant="text" disabled>Text disabled</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="contained" disabled>Contained disabled</Button>
                        <Button variant="outlined">Outlined</Button>
                        <Button variant="outlined" disabled>Outlined disabled</Button>
                    </Stack>
                </div>
                <div>
                    <h5>Button with Icon</h5>
                    <Stack direction={'row'} spacing={1}></Stack>
                    <Button variant="outlined" startIcon={<DeleteIcon />}> Delete </Button>
                    <Button variant="contained" endIcon={<SendIcon />}> Send </Button>
                </div>
                <div>
                    <h5>Icon Button</h5>
                    <Stack direction="row" spacing={1}>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete" disabled color="primary">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="add an alarm">
                            <AlarmIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Stack>
                </div>
                <div>
                    <h5>File Upload</h5>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />} >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button>
                </div>
                {/* <div>
                    <Stack direction="row" spacing={1}>
                        <LoadingButton loading variant="outlined">
                            Submit
                        </LoadingButton>
                        <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
                            Fetch data
                        </LoadingButton>
                        <LoadingButton
                            loading
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="outlined" >
                            Save
                        </LoadingButton>
                    </Stack>
                </div> */}
                <div>
                    <h5>basic ButtonGroup</h5>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <h5>ButtonGroup varients</h5>
                    <ButtonGroup variant="text" aria-label="Basic button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="outlined" aria-label="Basic button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <h5>ButtonGroup size and colors</h5>
                    <Stack direction={'row'} spacing={1} >
                        <ButtonGroup variant="text" size='small' color='warning' aria-label="Basic button group">
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                        <ButtonGroup variant="outlined" size='medium' color='info' aria-label="Basic button group">
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                        <ButtonGroup variant="outlined" size='large' color='error' aria-label="Basic button group">
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default Buttons