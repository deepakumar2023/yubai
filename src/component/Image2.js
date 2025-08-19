import { Box } from '@mui/system'
import React from 'react'

function Image2() {
  return (
 <Box container spacing={2} sx={{ padding: "50px" }}>
       <img
                src= "/img1/mob3.png"
              alt="Download on the App Store"
              width="100%"
              style={{cursor:"pointer"}}
            />
    </Box>
  )
}

export default Image2