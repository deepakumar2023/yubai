import { Box } from '@mui/system'
import React from 'react'

function Contactimgtop() {
  return (
   <Box container  sx={{ padding: "1rem", maxWidth: "100%",}}>
        <img
          src="/img1/contacttop.png"
          alt="Download on the App Store"
          width="100%"
          height="100%"

          style={{
            cursor: "pointer",
            // maxHeight: "500px", // ✅ Limit max height
            width: "100%",
          }}
       
        />
      </Box>
  )
}

export default Contactimgtop