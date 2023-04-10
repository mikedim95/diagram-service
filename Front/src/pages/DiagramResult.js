import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "react-multi-carousel/lib/styles.css";
import Stack from "@mui/material/Stack";
import VerticalButtonAppBar from "../components/VerticalAppBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function DiagramResult() {
  const [showAlert, setShowAlert] = React.useState(false); // State to control alert display

  const SelectedChartType = "Diagram";

  const handleSave = () => {
    // Handle save logic here
    setShowAlert(true); // Set showAlert state to true to display alert
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box height={"100vh"} bgcolor="#4285F4">
            <VerticalButtonAppBar />
          </Box>{" "}
        </Grid>{" "}
        <Grid item xs={10}>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Stack spacing={2}>
              <Box align="center">
                {" "}
                <Typography variant="h6" component="div">
                  Your {SelectedChartType} is ready!
                </Typography>{" "}
              </Box>{" "}
              <Box
                align="center"
                border={1}
                borderColor="black"
                marginRight={"10px"}
                bgcolor={"#d6d7d7"}
                display="flex"
                flexGrow={1}
                alignItems="center"
                justifyContent="center"
                height={"480px"}
                // exw kanei hardcode to ypsos tou box aristera (chart preview gia na matcharei to ipsos tou table)
              >
                created chart{" "}
              </Box>{" "}
              <Box>
                {" "}
                <Button variant="outlined" onClick={handleSave}>
                  {" "}
                  save to my charts{" "}
                </Button>{" "}
                <Button variant="contained"> discard </Button>{" "}
              </Box>{" "}
              {showAlert && (
                <Box bgcolor={"#f7dc6f"} padding={2}>
                  <Typography variant="subtitle1" align="center">
                    Alert: Oops!There is an error with your uploaded file!
                  </Typography>{" "}
                </Box>
              )}{" "}
            </Stack>{" "}
          </Box>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </div>
  );
}

export default DiagramResult;
