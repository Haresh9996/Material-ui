import { Badge, Button, ButtonGroup, FormControlLabel, Stack, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Badges = () => {
    const [count, setCount] = useState(1);
    const [invisible, setInvisible] = useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >Badge</Typography>
            <div className='flex flex-wrap gap-6 p-4'>
                <div>
                <h5 className='my-3'>basic</h5>
                    <Stack direction={"row"} spacing={2}>
                        <Badge badgeContent={4} color="primary">
                            <MailIcon color="action" />
                        </Badge>
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon color="action" />
                        </Badge>
                        <Badge badgeContent={4} color="success">
                            <MailIcon color="success" />
                        </Badge>
                        <Badge badgeContent={4} color="error">
                            <MailIcon color="error" />
                        </Badge>
                        <Badge badgeContent={20} max={10} color="error">
                            <MailIcon color="error" />
                        </Badge>
                        <Badge variant='dot' color="error">
                            <MailIcon color="error" />
                        </Badge>
                    </Stack>
                </div>
                <div>
                    <h5>controlled</h5>
                    <Stack direction={"row"} spacing={2}>
                        <div>
                            <Badge color="secondary" badgeContent={count}>
                                <MailIcon />
                            </Badge>
                            <ButtonGroup>
                                <Button aria-label="reduce" onClick={() => { setCount(Math.max(count - 1, 0)) }} >
                                    <RemoveIcon fontSize="small" />
                                </Button>
                                <Button aria-label="increase" onClick={() => {
                                    setCount(count + 1);
                                }} >
                                    <AddIcon fontSize="small" />
                                </Button>
                            </ButtonGroup>
                        </div>
                        <div>
                            <Badge color="secondary" variant="dot" invisible={invisible}>
                                <MailIcon />
                            </Badge>
                            <FormControlLabel sx={{ color: 'text.primary' }} control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />} label="Show Badge" />
                        </div>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default Badges