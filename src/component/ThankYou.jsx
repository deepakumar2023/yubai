
import {
  Box,

  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function ThankYou() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: {xs:"400px",sm:"600",md:"100vh"},
        // bgcolor: "grey.100",
        px: { xs: 2, sm: 4, md: 6 }, // responsive padding
      }}
    >
      <Card
        sx={{
          width: "100%", // take full width on small screens
          maxWidth: { xs: "100%", sm: 500, md: 600 }, // responsive max width
          borderRadius: 4,
          boxShadow: 6,
          textAlign: "center",
          p: { xs: 3, sm: 4 }, // padding adjusts with screen
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "green",
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // responsive font size
            }}
          >
            🎉 Thank You!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: "1rem", sm: "1.1rem" }, // smaller on mobile
              px: { xs: 1, sm: 2 }, // side padding for readability
            }}
          >
            We appreciate your submission. Our team at{" "}
            <Box
              component="span"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              Yubai
            </Box>{" "}
            will get back to you shortly.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
