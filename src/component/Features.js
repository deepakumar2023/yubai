import { Box } from "@mui/material";
// import Discover3 from "./Discover1";
import Discover from "./Discover";
import Discover2 from "./Discover2";
// import Discover4 from "./Discover5";
import Discover1 from "./Discover1";
import Discover5 from "./Discover5";

export default function FeatureSection() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#fff",
        py: { xs: 4, md: 4 },
        px: { xs: 2, md: 4 },
        overflow: "hidden",
      }}
    >
      {/* Background Vector Image */}
      <Box
        component="img"
        src="/img1/Vector.png"
        alt="Vector background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Mobile Images */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2, md: 4 },
        }}
      >
        {/* <Box
          component="img"
          src="/img1/mob1.png"
          alt="Discover Image 1"
          sx={{
            width: { xs: "90%", md: "80%" },
            objectFit: "contain",
          }}
        /> */}


        <Box sx={{
          width: { xs: "100%", md: "100%" },
          objectFit: "contain",
        }}>
          <Discover1 />

        </Box>

        <Box sx={{
          width: { xs: "100%", md: "100%" },
          objectFit: "contain",
        }}>
          <Discover2/>

        </Box>


         <Box sx={{
          width: { xs: "100%", md: "100%" },
          objectFit: "contain",
        }}>
          <Discover5/>

        </Box>

        
        <Box sx={{
          width: { xs: "100%", md: "100%" },
          objectFit: "contain",
        }}>
          <Discover/>

        </Box>



{/* 
        <Box
          component="img"
          src="/img1/mob3.png"
          alt="Discover Image 2"
          sx={{
            width: { xs: "90%", md: "80%" },
            objectFit: "contain",
          }}
        /> */}

        {/* <Box
          component="img"
          src="/img1/mob2.png"
          alt="Discover Image 3"
          sx={{
            width: { xs: "90%", md: "100%" },
            objectFit: "contain",
          }}
        />

        <Box
          component="img"
          src="/img1/mob4.png"
          alt="Discover Image 4"
          sx={{
            width: { xs: "90%", md: "80%" },
            objectFit: "contain",
          }}
        /> */}
      </Box>
    </Box>
  );
}
