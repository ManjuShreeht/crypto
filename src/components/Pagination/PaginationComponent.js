import React from 'react'
import {Pagination} from '@mui/material'

function PaginationComponent({pageNumber,handleChange}) {
    
  return (
    <div className='pagination'>
        {/* pagination mui component */}
<Pagination count={10} page={pageNumber} onChange={handleChange}

sx={{
    color:"#fff",


}}/>
{/* use style in mui --search how to style for pagination */}
    
    </div>
  )
}

export default PaginationComponent
