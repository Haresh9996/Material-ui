import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, FormHelperText, Typography } from '@mui/material';

const RadioGroups = () => {
    const [value, setValue] = useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [values, setValues] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event) => {
        setValues(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (values === 'best') {
            setHelperText('You got it!');
            setError(false);
        } else if (values === 'worst') {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };

    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3' >RadioGroup</Typography>
            <div className='flex flex-wrap gap-6'>
                <div>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup row aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                        <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={value} onChange={handleChange} >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                        <Typography variant='p'>Value is {value}</Typography>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
                        <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="position" defaultValue="top" >
                            <FormControlLabel value="top" control={<Radio />} label="Top" labelPlacement="top" />
                            <FormControlLabel value="start" control={<Radio />} label="Start" labelPlacement="start" />
                            <FormControlLabel value="bottom" control={<Radio />} label="Bottom" labelPlacement="bottom" />
                            <FormControlLabel value="end" control={<Radio />} label="End" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ m: 3 }} error={error} variant="standard">
                            <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
                            <RadioGroup aria-labelledby="demo-error-radios" name="quiz" value={values} onChange={handleRadioChange} >
                                <FormControlLabel value="best" control={<Radio />} label="The best!" />
                                <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                            </RadioGroup>
                            <FormHelperText>{helperText}</FormHelperText>
                            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                                Check Answer
                            </Button>
                        </FormControl>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RadioGroups