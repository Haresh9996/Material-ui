import { Avatar, AvatarGroup, Stack, Typography } from '@mui/material'
import { deepOrange, deepPurple, green, pink } from '@mui/material/colors'
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import React from 'react'

const Avatars = () => {
    return (
        <>
        <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >Avatar</Typography>
            <div className='flex flex-wrap gap-6'>
                <div>
                    <h5>Image Avatars</h5>
                    <Stack direction="row" spacing={1}>
                        <Avatar alt="Remy Sharp" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                        <Avatar alt="Travis Howard" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                        <Avatar alt="Cindy Baker" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                    </Stack>
                </div>
                <div>
                    <h5>Letter Avatars</h5>
                    <Stack direction='row' spacing={1}>
                        <Avatar>H</Avatar>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                    </Stack>
                </div>
                <div>
                    <h5>Size</h5>
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="Remy Sharp" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" sx={{ width: 24, height: 24 }} />
                        <Avatar alt="Remy Sharp" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                        <Avatar alt="Remy Sharp" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" sx={{ width: 56, height: 56 }} />
                    </Stack>
                </div>
                <div>
                    <h5>Icons</h5>
                    <Stack direction="row" spacing={2}>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                        <Avatar sx={{ bgcolor: pink[500] }}>
                            <PageviewIcon />
                        </Avatar>
                        <Avatar sx={{ bgcolor: green[500] }}>
                            <AssignmentIcon />
                        </Avatar>
                    </Stack>
                </div>
                <div>
                    <h5>varients</h5>
                    <Stack direction="row" spacing={2}>
                        <Avatar variant='circular'>
                            <FolderIcon />
                        </Avatar>
                        <Avatar variant='rounded' sx={{ bgcolor: pink[500] }}>
                            <PageviewIcon />
                        </Avatar>
                        <Avatar variant='square' sx={{ bgcolor: green[500] }}>
                            <AssignmentIcon />
                        </Avatar>
                    </Stack>
                </div>
                <div>
                    <h5>Avatar Group</h5>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <AvatarGroup max={4}>
                            <Avatar alt="Remy Sharp" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                            <Avatar alt="Travis Howard" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                            <Avatar alt="Cindy Baker" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                            <Avatar alt="Agnes Walker" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                            <Avatar alt="Trevor Henderson" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                        </AvatarGroup>
                    </div>
                </div>
                <div>
                    <h5>total Avatars</h5>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <AvatarGroup total={49999}>
                            <Avatar alt="Remy Sharp" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                            <Avatar alt="Travis Howard" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                            <Avatar alt="Cindy Baker" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                            <Avatar alt="Agnes Walker" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                            <Avatar alt="Trevor Henderson" src="https://image.lexica.art/full_jpg/d32dde14-5ba7-4a69-b1eb-d0f05d817bd0" />
                        </AvatarGroup>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Avatars