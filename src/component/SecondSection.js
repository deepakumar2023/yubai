import { Box } from "@mui/system";


function SecondSection() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#fff",
        py: { xs: 4, md: 8 },
        mt:"50px",
        overflow: "hidden",
        backgroundImage: "url(/img1/frame1.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // minHeight: { xs: "300px", md: "500px" },
        width: "100%",
      }}
    >
      {/* Centered Content (Phone Mockup Image) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          component="img"
          src="/img1/Group.png"
          alt="Download on the App Store"
          sx={{
            width: "100%",
            maxWidth: { xs: 200, sm: 300, md: 400 },
            maxHeight: 600,
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
      </Box>
    </Box>
  );
}

export default SecondSection;
