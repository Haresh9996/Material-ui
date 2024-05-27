import { Button, Tooltip, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Tooltips = () => {
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >Table</Typography>
            <div className='flex flex-wrap gap-6 p-4 my-8'>
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete" placement='bottom'>
                    <Button>bottom</Button>
                </Tooltip>
                <Tooltip title="Delete" placement='bottom-end'>
                    <Button>bottom end</Button>
                </Tooltip>
                <Tooltip title="Delete" placement='bottom-start'>
                    <Button>bottom start</Button>

                </Tooltip>
                <Tooltip title="Delete" placement='left'>
                    <Button>left</Button>

                </Tooltip>
                <Tooltip title="Delete" placement='left-end'>
                    <Button>left end</Button>

                </Tooltip>
                <Tooltip title="Delete" placement='left-start'>
                    <Button>left start</Button>

                </Tooltip>
                <Tooltip title="Delete" placement='right'>
                    <Button>right</Button>

                </Tooltip>
                <Tooltip title="Delete" placement='right-end'>
                    <Button>right end</Button>

                </Tooltip>
                <Tooltip title="Delete" placement='right-start'>
                    <Button>right start</Button>

                </Tooltip>
                <Tooltip title="Delete" placement='top-end'>
                    <Button>right end</Button>

                </Tooltip>
                <Tooltip title="Delete" placement='top-start'>
                    <Button>right start</Button>
                </Tooltip>
                <Tooltip title="You don't have permission to do this" followCursor>
                    <span>
                        <Button disabled>A Disabled Button</Button>
                    </span>
                </Tooltip>
            </div>
        </>
    )
}

export default Tooltips