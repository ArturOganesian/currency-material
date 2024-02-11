import { Box, AppBar, Typography, Link } from "@mui/material";
import "components/layout/header/header.scss";

const AppHeader = () => {
  return (
    <AppBar className="header-box">
      <Typography className="header-text">Coindage App</Typography>
      <Box className="link_box">
        <Link href="#">About Us</Link>
        <Link href="#">Services</Link>
      </Box>
    </AppBar>
  );
};
export default AppHeader;
