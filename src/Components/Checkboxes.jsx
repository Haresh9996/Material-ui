import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material'
import React from 'react'

const Checkboxes = () => {
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3' >CheckBox</Typography>
            <div className='flex flex-wrap gap-6'>
                <div>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </div>
                <div>
                    <h5>Label</h5>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel required control={<Checkbox />} label="Required" />
                        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                    </FormGroup>
                </div>
                <div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Label placement</FormLabel>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel value="top" control={<Checkbox />} label="Top" labelPlacement="top" />
                            <FormControlLabel value="start" control={<Checkbox />} label="Start" labelPlacement="start" />
                            <FormControlLabel value="bottom" control={<Checkbox />} label="Bottom" labelPlacement="bottom" />
                            <FormControlLabel value="end" control={<Checkbox />} label="End" labelPlacement="end" />
                        </FormGroup>
                    </FormControl>
                </div>
            </div>
        </>
    )
}

export default Checkboxes