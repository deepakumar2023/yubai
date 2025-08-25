"use client";
import { useState } from "react";
import {
 
  Box,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css';

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    query: "",
  });

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, mobile_number: value }));
  };

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const response = await fetch("http://51.20.87.59/api/send-query", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   if (response.ok) {
  //     setResponseMessage("Form submitted successfully!");
  //     alert("Your query will be solved within 24 hours.");
  //     setFormData({ name: "", email: "", mobile_number: "", query: "" });
  //   } else {
  //     setResponseMessage("Error submitting form. Try again.");
  //   }
  // };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/send-query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setResponseMessage("Form submitted successfully!");
      alert("Your query will be solved within 24 hours.");
      setFormData({ name: "", email: "", mobile_number: "", query: "" });
    } else {
      setResponseMessage("Error submitting form. Try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    setResponseMessage("Something went wrong. Please try later.");
  }
};


  return (
    <Box sx={{ marginBottom: '40px' }}>
      {/* Banner Image */}
      <Box sx={{ margin: { xs: 2, sm: 3 } }}>
        <img
          src="/img1/contacttop.png"
          alt="Contact Banner"
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </Box>

      {/* Contact Form Section */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: { xs: 2, sm: 3 },
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "white",
          margin: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          variant="h5"
          mb={3}
          align="center"
          sx={{ fontWeight: 'bold' }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          {/* Left Side - Form */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <PhoneInput
                  country="ae"
                  value={formData.mobile_number}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "mobile_number",
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
                  label="Your Query"
                  name="query"
                  multiline
                  rows={4}
                  value={formData.query}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Side - Contact Info */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#374d91",
                color: "#fff",
                px: { xs: 3, md: 5 },
                py: { xs: 1, md: 1 },
                borderRadius: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: "#FFE553", mb: 2 }}
              >
                Visit Us In Our <br /> Dubai Office
              </Typography>

              <Typography sx={{ fontSize: "16px", lineHeight: 1.6, mb: 3 }}>
                We're here to help! Whether you have a question about our
                services, need assistance with your account, or want to provide
                feedback, our team is ready to assist you.
              </Typography>

              <Typography sx={{ fontSize: "16px", mb: 1 }}>
                <strong>Email:</strong>
              </Typography>
              <Typography sx={{ color: "#FFE553", mb: 2 }}>
                Operation@yubai.ai
              </Typography>

              <Typography sx={{ fontSize: "16px", mb: 1 }}>
                <strong>Phone:</strong>
              </Typography>
              <Typography sx={{ color: "#FFE553", mb: 2 }}>
                +971 58 258 4444
              </Typography>

              <Typography sx={{ fontSize: "16px", mb: 1 }}>
                <strong>Location:</strong>
              </Typography>
              <Typography sx={{ color: "#FFE553" }}>
                Al Warsan– Office number – S09, Dubai, <br />
                United Arab Emirates
              </Typography>
            </Box>
          </Grid>
        </Grid>

     
      </Box>
    </Box>
  );
};

export default Support;
