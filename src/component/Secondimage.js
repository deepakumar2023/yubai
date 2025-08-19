import { Box } from "@mui/material";
import { Link } from "react-router-dom";



const Secondimage = () => {
  return (
    <Box container spacing={2} >

      <Link to={"/partner"}>
       <img
              src="/img1/twoside.png"
              alt="Download on the App Store"
              width="100%"
              style={{cursor:"pointer"}}
            />
            </Link>
    </Box>
  );
};

export default Secondimage;
