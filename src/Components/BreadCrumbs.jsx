import { Breadcrumbs, Divider, Link, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

const BreadCrumbs = () => {

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >BreadCrumbs</Typography>

            <div className='flex flex-wrap gap-6 p-4'>
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            MUI
                        </Link>
                        <Link underline="hover" color="inherit" href="/" >
                            Core
                        </Link>
                        <Link underline="hover" color="text.primary" href="/" aria-current="page" >
                            Breadcrumbs
                        </Link>
                    </Breadcrumbs>
                </div>
                <Divider orientation='vertical' flexItem color="secondary" />
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs separator="=>" aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            MUI
                        </Link>
                        <Link underline="hover" color="inherit" href="/" >
                            Core
                        </Link>
                        <Link underline="hover" color="text.primary" href="/" aria-current="page" >
                            Breadcrumbs
                        </Link>
                    </Breadcrumbs>
                </div>
                <Divider orientation='vertical' flexItem color="secondary" />
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="inherit" href="/" >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            MUI
                        </Link>
                        <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="inherit" href="/" >
                            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Core
                        </Link>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text." >
                            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Breadcrumb
                        </Typography>
                    </Breadcrumbs>
                </div>
                <Divider orientation='vertical' flexItem color="secondary" />
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="#">
                            Home
                        </Link>
                        <Link underline="hover" color="inherit" href="#">
                            Catalog
                        </Link>
                        <Link underline="hover" color="inherit" href="#">
                            Accessories
                        </Link>
                        <Link underline="hover" color="inherit" href="#">
                            New Collection
                        </Link>
                        <Typography color="text.primary">Belts</Typography>
                    </Breadcrumbs>
                </div>
            </div>
        </>
    )
}

export default BreadCrumbs