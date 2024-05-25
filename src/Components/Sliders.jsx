import { VolumeDown, VolumeUp } from '@mui/icons-material'
import { Box, Slider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

function valuetext(value) {
    return `${value}°C`;
}

const Sliders = () => {
    const [checkVal, setCheckVal] = useState('')
    const [value, setValue] = useState(30);

    const getValue = (e, val) => {
        setCheckVal(val)
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const mark = [
        {
            value: 10,
            label: "Start"
        },
        {
            value: 110,
            label: "End"
        }
    ]
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3' >Slider</Typography>

            <div className='flex flex-wrap gap-6'>
                <div>
                    <Box sx={{ width: 200 }}>
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                            <VolumeDown />
                            <Slider aria-label="Volume" value={value} onChange={handleChange} />
                            <VolumeUp />
                        </Stack>
                        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
                    </Box>
                </div>

                <div>
                    <h5>Size</h5>
                    <Box sx={{ width: 300 }}> <Slider size="small" defaultValue={70} aria-label="Small" valueLabelDisplay="auto" />
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    </Box>
                </div>
                <div>
                    <h5>custom steps</h5>
                    <Box sx={{ width: 300 }}>
                        <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} valueLabelDisplay="auto" shiftStep={30} step={10} marks min={10} max={110} />
                        <Slider defaultValue={30} step={10} marks={mark} min={10} max={110} disabled />
                    </Box>
                </div>
                <div>
                    <h5>Value Label</h5>
                    <Box sx={{ width: 300 }}>
                        <Slider defaultValue={30} valueLabelDisplay='auto' step={10} marks={mark} min={10} max={110} disabled />
                        <Slider defaultValue={30} valueLabelDisplay='on' step={10} marks={mark} min={10} max={110} disabled />
                    </Box>
                </div>
                <div>
                    <h5>controlled & vertical</h5>
                    <Box sx={{ height: 300 }}>
                        <Slider orientation='vertical' value={checkVal} valueLabelDisplay='auto' step={10} marks={mark} min={10} max={110} onChange={getValue} />
                        <Typography variant='p'> Value is: {checkVal}</Typography>
                    </Box>

                </div>
            </div>
        </>
    )
}

export default Sliders