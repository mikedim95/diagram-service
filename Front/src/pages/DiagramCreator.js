import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import VerticalButtonAppBar from "../components/VerticalAppBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SwipeableTextMobileStepper from "../components/SwipeableTextMobileStepper";
import FileUploader from "../components/FileUploader";
import { Link } from "react-router-dom";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

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
          <Box component="main" padding={3} flexGrow={1}>
            <Stack spacing={2}>
              <Box align="center">
                <Typography variant="h6" component="div">
                  Let's create your own chart!
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SwipeableTextMobileStepper images={images} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pt: 6,
                }}
              >
                <div class="mb-3">
                  <FileUploader />
                </div>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="outlined"
                  component={Link}
                  to="/mycharts/diagramresult"
                  sx={{ marginX: "5px" }}
                >
                  Upload and create chart
                </Button>
                <Button variant="contained" sx={{ marginX: "5px" }}>
                  Cancel
                </Button>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DiagramCreator;
