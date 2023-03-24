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
    return ( <
        div >
        <
        PermanentDrawerLeft / >
        <
        /div>
    );
}

export default DiagramCreator;