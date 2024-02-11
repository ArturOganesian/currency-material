import React from "react";
import { Box, Typography } from "@mui/material";
import AppTable from "../table/AppTable";
import AppChart from "components/appChart/AppChart";
import "components/layout/content/content.scss";
const AppContent = () => {
  return (
    <Box className="content-box">
      <AppTable />
      <AppChart />
      <Box className="info-box">
        <Box className="info">
          <Typography variant="h3">About Us</Typography>
          <Typography component="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            perspiciatis deleniti ullam assumenda dolore praesentium aliquam
            nulla adipisci sequi illum. Temporibus, assumenda. Fuga molestias
            molestiae et culpa commodi sit vitae? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eaque perspiciatis deleniti ullam
            assumenda dolore praesentium aliquam nulla adipisci sequi illum.
            Temporibus, assumenda. Fuga molestias molestiae et culpa commodi sit
            vitae?
          </Typography>
        </Box>
        <Box className="info">
          <Typography variant="h3">Services</Typography>
          <Typography component="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            perspiciatis deleniti ullam assumenda dolore praesentium aliquam
            nulla adipisci sequi illum. Temporibus, assumenda. Fuga molestias
            molestiae et culpa commodi sit vitae? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eaque perspiciatis deleniti ullam
            assumenda dolore praesentium aliquam nulla adipisci sequi illum.
            Temporibus, assumenda. Fuga molestias molestiae et culpa commodi sit
            vitae?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AppContent;
