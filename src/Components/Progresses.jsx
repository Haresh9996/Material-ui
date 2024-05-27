import { CircularProgress, LinearProgress, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Progresses = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >Progress</Typography>
            <div className='flex flex-wrap gap-6 p-4'>
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="secondary" />
                    <CircularProgress color="success" />
                    <CircularProgress color="inherit" />
                </Stack>
                <Stack spacing={2} direction="row">
                    <CircularProgress variant="determinate" value={25} />
                    <CircularProgress variant="determinate" value={50} />
                    <CircularProgress variant="determinate" value={75} />
                    <CircularProgress variant="determinate" value={100} />
                    <CircularProgress variant="determinate" value={progress} />
                </Stack>

                <div className='w-[500px]'>
                    <h5>linear</h5>
                    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                        <LinearProgress color="secondary" />
                        <LinearProgress color="success" />
                        <LinearProgress color="inherit" />
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default Progresses