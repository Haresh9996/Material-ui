import { Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const TextFields = () => {
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3' >TextField</Typography>

            <div className='flex flex-wrap gap-6 p-4'>
                <div>
                    <h5>varients</h5>
                    <Stack spacing={1} direction={'row'}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                    </Stack>
                </div>
                <div className='flex flex-wrap gap-4'>
                    <TextField required id="outlined-required" label="Required" defaultValue="Hello World" />
                    <TextField disabled id="outlined-disabled" label="Disabled" defaultValue="Hello World" />
                    <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                    <TextField id="outlined-read-only-input" label="Read Only" defaultValue="Hello World" InputProps={{ readOnly: true, }} />
                    <TextField id="outlined-number" label="Number" type="number" InputLabelProps={{ shrink: true, }} />
                    <TextField id="outlined-search" label="Search field" type="search" />
                    <TextField id="outlined-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" />
                    <TextField error id="outlined-error-helper-text" label="Error" defaultValue="Hello World" helperText="Incorrect entry." />
                </div>
            </div>
        </>
    )
}

export default TextFields