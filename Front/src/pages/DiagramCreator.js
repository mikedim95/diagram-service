import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "react-multi-carousel/lib/styles.css";
import AdvancedCarousel from "../components/AdvancedCarousel";
import Stack from "@mui/material/Stack";
import VerticalButtonAppBar from "../components/VerticalAppBar";
import Grid from "@mui/material/Grid";

//import SwipeableTextMobileStepper from "../components/SwipeableTextMobileStepper";
// import FileUpload from "react-mui-fileuploader";
// import Carousel from "react-material-ui-carousel";

function DiagramCreator() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box height={"100vh"} bgcolor="#4285F4">
            <VerticalButtonAppBar />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Stack spacing={2}>
              <Box>
                <AdvancedCarousel />
              </Box>
              <Box>
                <div class="mb-3">
                  <label for="formFile" class="form-label">
                    Default file input example
                  </label>
                  <input class="form-control" type="file" id="formFile" />
                </div>
              </Box>
              <Box>
                <Button variant="outlined">Upload and create chart </Button>
                <Button variant="contained"> Cancel </Button>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DiagramCreator;
