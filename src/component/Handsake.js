import { Box } from '@mui/system'
import React from 'react'

function Handsake() {
  return (
   <Box sx={{marginTop:"5px"}}>
  <img
    src="/img1/hand-shaking.gif" // ✅ Use .gif file
    alt="Handshake Animation"
    style={{
      cursor: "pointer",
      width: "100%",
      height: "auto", // or use 'auto' if you want to keep aspect ratio
    }}
  />
</Box>

  )
}

export default Handsake