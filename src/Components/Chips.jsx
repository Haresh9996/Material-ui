import { Avatar, Chip, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import FaceIcon from '@mui/icons-material/Face';

const Chips = () => {
    const handleClick = () => {
        alert('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >Chip</Typography>
            <div className='flex flex-wrap gap-6 p-4'>

                <Stack direction="row" spacing={1}>
                    <Chip label="Chip Filled" />
                    <Chip label="Chip Outlined" variant="outlined" />
                </Stack>
                <Divider orientation="vertical" flexItem />
                <Stack direction="row" spacing={1}>
                    <Chip label="Clickable" onClick={handleClick} />
                    <Chip label="Clickable" variant="outlined" onClick={handleClick} />
                <Divider orientation="vertical" flexItem />
 
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Chip label="Deletable" onDelete={handleDelete} />
                    <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
                    <Chip label="Custom delete icon" onClick={handleClick} onDelete={handleDelete} deleteIcon={<DeleteIcon />} variant="outlined" />
                </Stack>
                <Divider orientation="vertical" flexItem />
                <Stack direction={"row"} spacing={1}>
                    <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
                    <Chip avatar={<Avatar alt="Natacha" src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg" />} label="Avatar" variant="outlined" />
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Chip icon={<FaceIcon />} label="With Icon" color='primary' />
                    <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" color='secondary' />
                </Stack>

            </div>
        </>
    )
}

export default Chips