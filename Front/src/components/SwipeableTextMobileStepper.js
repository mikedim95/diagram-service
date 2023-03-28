import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViewsComponent from "./SwipeableViewsComponent";

function SwipeableTextMobileStepper(props) {
  const { images } = props;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedProp, setSelectedProp] = React.useState("");
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography> {images[activeStep].label} </Typography>{" "}
      </Paper>{" "}
      <SwipeableViewsComponent
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        {images.map((step, index) => (
          <div key={step.label}>
            {" "}
            {activeStep === index && (
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={step.imgPath}
                  alt={step.label}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />{" "}
                <Button
                  variant="contained"
                  onClick={() => setSelectedProp(step.label)}
                  sx={{ position: "absolute", bottom: "20px" }}
                >
                  Download{" "}
                </Button>{" "}
              </Box>
            )}{" "}
          </div>
        ))}{" "}
      </SwipeableViewsComponent>{" "}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next{" "}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}{" "}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {" "}
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back{" "}
          </Button>
        }
      />{" "}
    </Box>
  );
}

export default SwipeableTextMobileStepper;
