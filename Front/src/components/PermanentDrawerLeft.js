import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AdvancedCarousel from "./AdvancedCarousel";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const drawerWidth = 140;

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          backgroundColor: "#4285F4",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <Typography variant="h6" component="div">
              myCharts{" "}
            </Typography>{" "}
          </ListItem>{" "}
          <ListItem>
            <ListItemButton
              component={Link}
              to="/mycharts"
              color="inherit"
              variant="text"
              // sx={{ marginLeft: "13px" }}
            >
              Home{" "}
            </ListItemButton>{" "}
          </ListItem>{" "}
          <ListItem>
            <ListItemButton
              component={Link}
              to="/mycharts/about"
              color="inherit"
              variant="text"
              // sx={{ marginLeft: "13px" }}
            >
              About{" "}
            </ListItemButton>{" "}
          </ListItem>{" "}
        </List>{" "}
      </Drawer>{" "}
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
            <Button variant="outlined">Upload and create chart </Button>{" "}
            <Button variant="contained"> Cancel </Button>{" "}
          </Item>{" "}
        </Stack>{" "}
      </Box>{" "}
    </Box>
  );
}
