import React from "react";
import Box from "@mui/material/Box";
import AppHeader from "./header/AppHeader";
import AppContent from "./content/AppContent";
import AppChart from "components/appChart/AppChart";



const AppLayout = () => {
  return (
    <div>
      <Box className="" sx={{ width: "100%" }}>
    <AppHeader />
    <AppContent />

      </Box>
    </div>
  );
};

export default AppLayout;
