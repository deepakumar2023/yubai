
import {
  Box,

  Card,
  CardContent,
  Typography,
} from "@mui/material";


import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function PaymentFail() {
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
        background: "#374D91",
      }}
    >
      {/* Animation */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: { xs: 250, sm: 300, md: 350 },
          mb: 2,
        }}
      >
        <DotLottieReact
          src="/lottesvg/ERROR Animation.json"
          loop
          autoplay
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>

      {/* Red Heading */}
      <Typography
        variant="h5"
        sx={{
         color: "#F7EF6D",
          fontWeight: "bold",
          mb: 2,
        }}
      >
        Payment Failed
      </Typography>

      {/* Message */}
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
        Unfortunately, your payment could not be processed. Please try again or
        contact our{" "}
        <Box component="span" sx={{ fontWeight: "bold", color: "#F7EF6D" }}>
          support team
        </Box>
        .
      </Typography>
    </Box>
  )
}

export default PaymentFail



