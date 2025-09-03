import { Box, Typography, Button } from "@mui/material";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function ThankYou() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        px: 2,
        background: "#374d91",
      }}
    >
      {/* Animation */}
      <Box
        sx={{
          width: "100%",
          maxWidth:"100%",
          height: { xs: 250, sm: 300, md: 350 },
          mb: 3,
        }}
      >
        <DotLottieReact
          src="/lottesvg/Thank you!.json"
          loop
          autoplay
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>

  

      {/* SAME Text as your code */}
      <Typography
        variant="body1"
        sx={{
          color: "white",
          opacity: 0.9,
          mb: 4,
          fontSize: { xs: "0.95rem", sm: "1.05rem" },
          lineHeight: 1.6,
          px: { xs: 1, sm: 4 },
        }}
      >
        We appreciate your submission. Our team at{" "}
        <Box component="span" sx={{ fontWeight: "bold", color: "yellow" }}>
          Yubai
        </Box>{" "}
        will get back to you shortly.
      </Typography>

     
    </Box>
  );
}
