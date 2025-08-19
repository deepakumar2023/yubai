
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = () => {
  

  const handleWhatsAppClick = () => {
    const phoneNumber = "00961 78 777 190"; // ← Replace with your number (with country code, no `+`)
    const message = encodeURIComponent("Hello, How can i help you");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Fab
      onClick={handleWhatsAppClick}
      sx={{
        position: "fixed",
        bgcolor: "#25D366",
        bottom: 20,
        left: 20, // ← Move to left side
        width: "45px",
        height: "45px",
        opacity: 1 ,
        transform: "translateY(0)" ,
        transition: "all 0.3s ease-in-out",
        boxShadow: 3,
        "&:hover": {
          backgroundColor: "#20b358",
        },
      }}
    >
      <WhatsAppIcon
        sx={{
          fontSize: 30,
          color: "white",
        }}
      />
    </Fab>
  );
};

export default WhatsAppButton;
