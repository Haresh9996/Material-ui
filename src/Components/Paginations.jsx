import { Pagination, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const Paginations = () => {
    const [page, setPage] = useState(6)
    const handleChange = (e, val) => {
        setPage(val)
    }
    return (
        <>
            <Typography variant='h3' component={"h3"} className='bg-black text-fuchsia-50 p-3 my-3' >Pagination</Typography>

            <div className='flex flex-wrap gap-6 p-4'>
                <Stack spacing={2}>
                    default
                    <Pagination count={10} />
                    outlined primary
                    <Pagination variant='outlined' count={10} color="primary" />
                    circular secondary
                    <Pagination count={10} shape='circular' color="secondary" />
                    rounded disabled
                    <Pagination count={10} shape='rounded' disabled />
                    show Buttons
                    <Pagination showFirstButton showLastButton count={10} shape='rounded' />
                    controlled page : {page}
                    <Pagination page={page} onChange={handleChange} count={10} shape='rounded' />
                </Stack>

                <Stack spacing={2}>
                Pagination range
                    <Pagination count={11} defaultPage={6} siblingCount={0} />
                    <Pagination count={11} defaultPage={6} /> {/* Default ranges */}
                    <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} />
                    <Pagination count={11} defaultPage={6} boundaryCount={2} />
                </Stack>
            </div>
        </>
    )
}

export default Paginations