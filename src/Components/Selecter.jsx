import { Select, Typography, Box, FormControl, InputLabel, MenuItem } from "@mui/material"
import React, { useState } from 'react'

const Selecter = () => {
    const [age, setAge] = useState('');

    const handleChange = (e) => {
        setAge(e.target.value);
    };
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3' >Select</Typography>

            <div className='flex flex-wrap gap-6 p-4'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange} >
                            <MenuItem value={10}>Ten</ MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div>
                    <h4>varients</h4>
                <div className="flex flex-wrap space-x-4">
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age filled</InputLabel>
                            <Select variant="filled" labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange} >
                                <MenuItem value={10}>Ten</ MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age outlined</InputLabel>
                            <Select variant="outlined" labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange} >
                                <MenuItem value={10}>Ten</ MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age standard</InputLabel>
                            <Select variant="standard" labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange} >
                                <MenuItem value={10}>Ten</ MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                </div>
            </div>
        </>
    )
}

export default Selecter