// import React, { useEffect, useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Link,
//   Button,
// } from "@mui/material";

// import AppsIcon from "@mui/icons-material/Apps"; // Correctly imported AppsIcon

// const navItems = [
//   { label: "Become A Partner", href: "/partner" },
//   // { label: "Deliver for yubai", href: "#" },
//   // { label: "Careers", href: "/carrier" },
//   { label: "Contact", href: "/contact" },
//   // { label: "Privacy", href: "/private" },
//   // { label: "Media Updates", href: "/media" },
//   // { label: "Affiliate Amazon Market", href: "/affiliate-market" },
//   { label: "Amazon Market",href: "/amazon-shop",},
// ];

// const Header = () => {
//   const [openDrawer, setOpenDrawer] = useState(false);

//   const [isFixed, setIsFixed] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 30) {
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

  
// const handleClick = () => {
//   alert("Coming Soon!");
// };

//   return (
//     <AppBar
//       position={isFixed ? "fixed" : "static"}
//       color="transparent"

//       elevation={isFixed ? 3 : 0}
//       sx={{
//         transition: "top 0.3s ease-in-out",
//         top: isFixed ? 0 : "auto",
//         bgcolor: "white",
//         color: "black",
//         scrollBehavior:"smooth",
//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           padding: "10px 20px",
//         }}
//       >
//         {/* Logo */}
//         <Typography
//           variant="h5"
//           sx={{ fontWeight: "bold", display: "flex", alignItems: "center",  flexDirection: "column",lineHeight:'0px' }}
//         >
//           <Link href={"/"}   underline="none">
//             <img
//               // src="/Logo/logo193.png"
//               src="/Logo/headericon.png"
//               alt="Logo"
//               // style={{ width: 150, marginRight: 10 }}
//               style={{ width: 100, marginRight: 10 ,height:90,objectFit:"contain"}}
//             />
//             <br/>
//           {/* <Typography variant="h6" component="span" sx={{textDecoration:"none",color:"#d0342c",fontSize:"18px",fontFamily:{xs:"fangsong",sm:"cursive"},fontWeight: "bolder !important",fontStyle:'italic'}}> 
//             <strong>Delivering Happiness</strong></Typography> */}
//           </Link>
          
        
//         </Typography>

//         {/* Desktop Navigation Links */}
//         <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5 }}>
//           {navItems.map((item, index) => (
//             <Link
//               key={index}
//               href={item.href}
//               underline="none"
//               color={
//                 window.location.pathname === item.href ? "#1B1D4D" : "inherit"
//               }
//               sx={{
//                 transition: "background-color 0.3s",
//                 padding: "8px 16px", // Thoda padding de rahe hain taake bg dikhe
//                 borderRadius: "5px", // Thoda styling ke liye
//                 color:"#1B1D4D" ,
//                 // bgcolor: window.location.pathname === item.href ? "#1B1D4D" : "transparent",
//                 // "&:hover": { bgcolor: "green",color:"white" },
//                 // "&:active": { bgcolor: "#1B1D4D" },
//               }}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </Box>


//         <Typography  sx={{display: { xs: "none", md: "flex" },}}><Button sx={{ bgcolor: "#374d91",color:"#f7ef6d",borderRadius:"50px", padding:"10px"}}  onClick={handleClick} >Download App</Button> </Typography>

//         {/* Mobile Menu Button */}
//         <IconButton
//           sx={{ display: { xs: "block", md: "none" } }}
//           onClick={() => setOpenDrawer(true)}
//         >
//           <AppsIcon />
//         </IconButton>
//       </Toolbar>

//       {/* Drawer for Mobile */}
//       <Drawer
//         anchor="right"
//         open={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//       >
//         <List sx={{ width: 250 }} >
//           {navItems.map((item, index) => (
//             <ListItem  button key={item} onClick={() => setOpenDrawer(false)}>
//               <Link
//                 key={index}
//                 href={item.href}
//                 underline="none"
//                 color="inherit"
//               >
//                 <ListItemText primary={item.label} />
//               </Link>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Header;


import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link,
  Button,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { useLocation } from "react-router-dom"; // <-- Added

const navItems = [
  { label: "Become A Partner", href: "/partner" },
  { label: "Contact", href: "/contact" },
  { label: "Amazon Market", href: "/amazon-shop" },
];

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation(); // <-- Added

  // Routes where drawer (hamburger) should not be shown
  const hideDrawerRoutes = ["/thankyou", "/payment-fail",'/privacy-policy',"/terms-condition","/cancellation-policy"];

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    alert("Coming Soon!");
  };

  return (
    <AppBar
      position={isFixed ? "fixed" : "static"}
      color="transparent"
      elevation={isFixed ? 3 : 0}
      sx={{
        transition: "top 0.3s ease-in-out",
        top: isFixed ? 0 : "auto",
        bgcolor: "white",
        color: "black",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            lineHeight: "0px",
          }}
        >
          <Link href={"/"} underline="none">
            {/* <img
              src="/Logo/headericon.png"
              alt="Logo"
              style={{
                width: 100,
                marginRight: 10,
                height: 90,
                objectFit: "contain",
              }}
            /> */}


             <Box
        component="img"
        src="/Logo/headericon.png"
        alt="Logo"
        sx={{
          objectFit: "contain",
          mr: 1, // marginRight
          width: { xs: 60, sm: 80, md: 100 }, // responsive width
          height: { xs: 50, sm: 70, md: 90 }, // responsive height
        }}
      />
          </Link>
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5 }}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              underline="none"
              color={
                window.location.pathname === item.href ? "#1B1D4D" : "inherit"
              }
              sx={{
                padding: "8px 16px",
                borderRadius: "5px",
                color: "#1B1D4D",
              }}
            >
              {item.label}
            </Link>
          ))}
        </Box>

        <Typography sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            sx={{
              bgcolor: "#374d91",
              color: "#f7ef6d",
              borderRadius: "50px",
              padding: "10px",
            }}
            onClick={handleClick}
          >
            Download App
          </Button>
        </Typography>

        {/* Mobile Menu Button - Hidden on thankyou and payment-fail */}
        {!hideDrawerRoutes.includes(location.pathname) && (
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setOpenDrawer(true)}
          >
            <AppsIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{ width: 250 }}>
          {navItems.map((item, index) => (
            <ListItem
              button
              key={item.href}
              onClick={() => setOpenDrawer(false)}
            >
              <Link href={item.href} underline="none" color="inherit">
                <ListItemText primary={item.label} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
