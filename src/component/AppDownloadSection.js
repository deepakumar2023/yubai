import { Box } from "@mui/material";

export default function AppDownloadSection() {


  const handleClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.yubai.app",
      "_blank" // new tab me open hoga
    );
  };

  return (

    <Box container spacing={2} sx={{ my: '25px' }}>
      <img
        src="/img1/Highlighted.png"
        alt="Download on the App Store"
        width="100%"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </Box>

  );
}
