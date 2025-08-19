import React from 'react'

function important() {
  return (
      <Box
      sx={{
        position: "relative",
        bgcolor: "#fff",
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        overflow: "hidden",
      }}
    >
      {/* Background Vector Image */}
      <Box
        component="img"
        src="/img1/frame1.png"
        alt="Vector background"
        sx={{
          position: "absolute",
          top: "5%",
          bottom:"5%",
          left: 0,
          width: "90%",
          height: "auto",
          margin:"10px 50px",   
          objectFit: " fit-content"
        }}
      />

      {/* Content Goes Here */}
      <Box>
         <img
                src= "/img1/mob2.png"
              alt="Download on the App Store"
              width="100%"
              style={{cursor:"pointer"}}/>
      </Box>
    </Box>
  )
}

export default important