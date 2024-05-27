import { FormControl, FormControlLabel, FormGroup, FormLabel, Switch, Typography } from '@mui/material'
import React from 'react'

const Swithches = () => {
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3' >Switch</Typography>

            <div className='flex flex-wrap gap-6 p-4'>
                <Switch defaultChecked />
                <Switch />
                <Switch disabled defaultChecked />
                <Switch disabled />

                <FormGroup>
                    <FormControlLabel required control={<Switch />} label="Required" />
                    <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                </FormGroup>
                <div>
                    <h5>size and colors</h5>
                    <FormGroup>
                        <FormControlLabel control={<Switch color='success' size='medium' />} label="medium" />
                        <FormControlLabel control={<Switch size='small' color='warning' />} label="small" />
                        <FormControlLabel control={<Switch color='secondary' />} label="secondary" />
                    </FormGroup>
                </div>
                <div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Label placement</FormLabel>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel value="top" control={<Switch color="primary" />} label="Top" labelPlacement="top" />
                            <FormControlLabel value="start" control={<Switch color="primary" />} label="Start" labelPlacement="start" />
                            <FormControlLabel value="bottom" control={<Switch color="primary" />} label="Bottom" labelPlacement="bottom" />
                            <FormControlLabel value="end" control={<Switch color="primary" />} label="End" labelPlacement="end" />
                        </FormGroup>
                    </FormControl>
                </div>
            </div>
        </>
    )
}

export default Swithches