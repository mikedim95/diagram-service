import React from "react";
import PermanentDrawerLeft from "../components/PermanentDrawerLeft_1";
import Box from "@mui/material/Box";
//import SwipeableTextMobileStepper from "../components/SwipeableTextMobileStepper";
// import FileUpload from "react-mui-fileuploader";
// import Carousel from "react-material-ui-carousel";
import AdvancedCarousel from "../components/AdvancedCarousel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function DiagramCreator() {
  return (
    <div>
      <PermanentDrawerLeft />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Stack spacing={2}>
          {" "}
          <Item>
            {" "}
            <AdvancedCarousel />{" "}
          </Item>{" "}
          <Item>
            {" "}
            <div class="mb-3">
              <label for="formFile" class="form-label">
                {" "}
                Default file input example{" "}
              </label>{" "}
              <input class="form-control" type="file" id="formFile" />
            </div>{" "}
          </Item>{" "}
          <Item>
            {" "}
            <Button variant="outlined"> Upload and create chart </Button>{" "}
            <Button variant="contained"> Cancel </Button>{" "}
          </Item>{" "}
        </Stack>{" "}
      </Box>{" "}
    </div>
  );
}

export default DiagramCreator;
