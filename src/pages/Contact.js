// import React, { useState } from "react";
// import { Box, Container, Grid, Stack } from "@mui/system";
// import emailjs from "emailjs-com";
// import {
//   Autocomplete,
//   Button,
//   Card,
//   TextField,
//   Typography,
// } from "@mui/material";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
// import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import "react-phone-input-2/lib/style.css";
// import PhoneInput from "react-phone-input-2";
// import { Link } from "react-router-dom";
// import Contactimgtop from "../component/Contactimgtop";
// import ContactimageBottom from "../component/ContactimageBottom";

// function Contact() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     requirement: "",
//     message: "",
//   });

//   // Handle input field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle phone number change
//   const handlePhoneChange = (value) => {
//     setFormData((prev) => ({ ...prev, mobile: value }));
//   };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Validate form data
  //   if (!formData.firstName || !formData.email || !formData.message) {
  //     alert("Please fill in all required fields.");
  //     return;
  //   }

  //   if (formData.mobile.length < 5) {
  //     alert("Please enter  phone number.");
  //     return;
  //   }

  //   // Send email via EmailJS
  //   emailjs
  //     .send(
  //       "service_6rfhrvk", // Your Service ID
  //       "template_99vzkzg", // Correct Template ID from the EmailJS dashboard
  //       {
  //         firstName: formData.firstName,
  //         lastName: formData.lastName,
  //         email: formData.email,
  //         mobile: formData.mobile,
  //         requirement: formData.requirement,
  //         message: formData.message,
  //       },
  //       "Ul9odn6d0Od9P-0r6" // Your Public Key
  //     )
  //     .then(
  //       (response) => {
  //         console.log(
  //           "Email sent successfully!",
  //           response.status,
  //           response.text
  //         );
  //         alert("Message sent successfully!");

  //         // Reset form data
  //         setFormData({
  //           firstName: "",
  //           lastName: "",
  //           email: "",
  //           mobile: "",
  //           requirement: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         console.error("Error sending email:", error);
  //         alert("Failed to send the message. Please try again.");
  //       }
  //     )
  //     .catch((error) => {
  //       console.error("Network or email service error:", error);
  //       alert("Failed to send the message. Please try again.");
  //     });
  // };

//   return (
//     <Stack component={"div"}>
   
//       <Box sx={{ padding: "1rem", maxWidth: "100%", margin: "auto" }}>
//         <form onSubmit={handleSubmit}>
//           <Card elevation={4} sx={{ padding: "2rem" }}>
//             <Grid container spacing={4}>
//               {/* Left Section */}
//               <Grid
//                 item
//                 size={{ xs: 12, md: 5 }}
//                 sx={{
//                   display: "inline-grid",
//                   justifyContent: { xs: "left", sm: "center" },
//                 }}
//               >
//                 <Typography
//                   variant="h5"
//                   sx={{ fontWeight: "bold", color: "#eaaa00", mb: 2 }}
//                 >
//                   OFFICE In Dubai
//                 </Typography>
//                 <Box>
//                   <Typography
//                     component={"div"}
//                     gutterBottom
//                     sx={{ display: "flex" }}
//                   >
//                     <span style={{ color: "#eaaa00" }}>
//                       <LocationOnIcon />
//                     </span>
//                     <strong style={{ fontSize: "18px" }}>Location</strong>
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     gutterBottom
//                     sx={{ fontSize: "16px", textAlign: "left" }}
//                   >
//                     Al Warsan- Office number - S09, Dubai , <br />
//                     United Arab Emirates <br />
//                   </Typography>

//                   <Typography
//                     variant="body1"
//                     gutterBottom
//                     sx={{ mt: 2, display: "flex" }}
//                   >
//                     <span style={{ color: "#eaaa00" }}>
//                       <PhoneAndroidIcon />
//                     </span>
//                     <strong style={{ fontSize: "18px" }}>Phone</strong>
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     gutterBottom
//                     sx={{ fontSize: "16px", textAlign: "left" }}
//                   >
//                     +971 58 258 4444

//                   </Typography>

//                   <Typography
//                     variant="body1"
//                     gutterBottom
//                     sx={{ mt: 2, display: "flex" }}
//                   >
//                     <span style={{ display: "flex", color: "#eaaa00" }}>
//                       <MarkEmailUnreadIcon />
//                     </span>
//                     <strong style={{ fontSize: "18px" }}>Email</strong>
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     sx={{ fontSize: "16px", textAlign: "left" }}
//                   >
//                     operations@yubai.ai
//                   </Typography>
//                 </Box>
//               </Grid>

//               {/* Right Section */}
//               <Grid item size={{ xs: 12, md: 7 }}>
//                 <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
//                   CONTACT US
//                 </Typography>
//                 <Grid container spacing={2}>
//                   <Grid item size={{ xs: 12, sm: 6 }}>
//                     <TextField
//                       fullWidth
//                       name="firstName"
//                       label="First Name"
//                       variant="outlined"
//                       required
//                       value={formData.firstName}
//                       onChange={handleChange}
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12, sm: 6 }}>
//                     <TextField
//                       fullWidth
//                       name="lastName"
//                       label="Last Name"
//                       variant="outlined"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12, sm: 6 }}>
//                     <TextField
//                       fullWidth
//                       name="email"
//                       label="Email"
//                       type="email"
//                       variant="outlined"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12, sm: 6 }}>
//                     <PhoneInput
//                       country={"ae"} // Default country UAE
//                       value={formData.mobile}
//                       onChange={handlePhoneChange}
//                       inputProps={{ name: "mobile", required: true }}
//                       containerStyle={{ width: "100%" }}
//                       inputStyle={{
//                         width: "100%",
//                         height: "56px",
//                         borderRadius: "4px",
//                         border: "1px solid #ccc",
//                         paddingLeft: "48px",
//                       }}
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12, sm: 6 }}>
//                     <Autocomplete
//                       value={formData.requirement}
//                       onChange={(event, newValue) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           requirement: newValue,
//                         }))
//                       }
//                       options={[
//                         "General Inquiry",
//                         "Logistics Support",
//                         "Others",
//                       ]}
//                       renderInput={(params) => (
//                         <TextField {...params} label="Requirement" />
//                       )}
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12, sm: 6 }}>
//                     <TextField
//                       fullWidth
//                       name="message"
//                       label="Message here..."
//                       multiline
//                       rows={1}
//                       variant="outlined"
//                       value={formData.message}
//                       onChange={handleChange}
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12, sm: 5 }}>
//                     <Button
//                       fullWidth
//                       variant="contained"
//                       color="warning"
//                       type="submit"
//                       size="large"
//                       sx={{ background: "#374d91" }}
//                     >
//                       Send Your Message
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Card>
//         </form>
//       </Box>

    
//       <ContactimageBottom/>
//     </Stack>
//   );
// }

// export default Contact;


"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
  Card,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
 import emailjs from "emailjs-com";
import Contactimgtop from "../component/Contactimgtop";
import ContactimageBottom from "../component/ContactimageBottom";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    requirement: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, mobile: value }));
  };



   const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    if (formData.mobile.length < 5) {
      alert("Please enter  phone number.");
      return;
    }

    // Send email via EmailJS
    emailjs
      .send(
        "service_6rfhrvk", // Your Service ID
        "template_99vzkzg", // Correct Template ID from the EmailJS dashboard
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          requirement: formData.requirement,
          message: formData.message,
        },
        "Ul9odn6d0Od9P-0r6" // Your Public Key
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Message sent successfully!");

          // Reset form data
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            requirement: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send the message. Please try again.");
        }
      )
      .catch((error) => {
        console.error("Network or email service error:", error);
        alert("Failed to send the message. Please try again.");
      });
  };

  return (

    <>
    

    <Contactimgtop/>
    <Box sx={{ p: { xs: 2, md: 2 }, bgcolor: "#fff" }}>



      <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>

      
        {/* Left: Contact Form */}
        <Box sx={{ flex: 1, p: { xs: 3, md: 5 } }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: "#1B1D4D", mb: 3, textAlign:"left"}}>
            Get In <br /> Touch With Us
          </Typography>

          <form onSubmit={handleSubmit}>


            <Grid container spacing={2}>


              <Grid item xs={12} sm={6}>
                <TextField
                  label="Enter First Name"
                  name="firstName"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Enter Last Name"
                  name="lastName"
                  fullWidth
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Enter Email"
                  name="email"
                  type="email"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PhoneInput
                  country="ae"
                  value={formData.mobile}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "mobile",
                    required: true,
                  }}
                  inputStyle={{
                    width: "100%",
                    height: "56px",
                    fontSize: "16px",
                  }}
                  containerStyle={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  label="Select Requirement"
                  name="requirement"
                  fullWidth
                  value={formData.requirement}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Requirement</MenuItem>
                  <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                  <MenuItem value="Logistics Support">Logistics Support</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Enter a Message..."
                  name="message"
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    backgroundColor: "#374D91",
                    color: "#fff",
                    borderRadius: "25px",
                    py: 1.5,
                    fontWeight: 600,
                    "&:hover": { backgroundColor: "#2c3b75" },
                  }}
                >
                  Send Message
                </Button>
              </Grid>


              
            </Grid>
          </form>
        </Box>

        {/* Right: Office Info */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#374d91",
            color: "#fff",
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderTopRightRadius: "25px",
            borderBottomRightRadius: "25px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "#FFE553", mb: 2 ,textAlign:"left"}}
          >
            Visit Us In Our <br /> Dubai Office
          </Typography>
          <Typography sx={{ fontSize: "16px", lineHeight: 1.6, mb: 3 ,textAlign:"left"}}>
            We're here to help! Whether you have a question about our services, need assistance with your account, or want to provide feedback, our team is ready to assist you.
          </Typography>

          <Typography sx={{ fontSize: "16px", mb: 1,textAlign:"left"}}>
            <strong>Email:</strong>
          </Typography>
          <Typography sx={{ color: "#FFE553", mb: 2,textAlign:"left" }}>
            Operation@yubai.ai
          </Typography>

          <Typography sx={{ fontSize: "16px", mb: 1 ,textAlign:"left"}}>
            <strong>Phone:</strong>
          </Typography>
          <Typography sx={{ color: "#FFE553", mb: 2 ,textAlign:"left"}}>
            +971 58 258 4444
          </Typography>

          <Typography sx={{ fontSize: "16px", mb: 1,textAlign:"left" }}>
            <strong>Location:</strong>
          </Typography>
          <Typography sx={{ color: "#FFE553" ,textAlign:"left"}}>
            Al Warsan– Office number – S09, Dubai, <br />
            United Arab Emirates
          </Typography>
        </Box>
      </Card>
    </Box>
<ContactimageBottom/>
    </>
  );
}
