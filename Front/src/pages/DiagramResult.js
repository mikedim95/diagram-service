import React from "react";
import PermanentDrawerLeft from "../components/PermanentDrawerLeft_1";
import Box from "@mui/material/Box";
//import SwipeableTextMobileStepper from "../components/SwipeableTextMobileStepper";
// import FileUpload from "react-mui-fileuploader";
// import Carousel from "react-material-ui-carousel";

function DiagramCreator() {
  const handleFileUploadError = (error) => {
    // Do something...
  };

  const handleFilesChange = (files) => {
    // Do something...
    //setUploadedFiles([...files]);
  };

  return (
    <div>
      <PermanentDrawerLeft />
    </div>
  );
}

export default DiagramCreator;
