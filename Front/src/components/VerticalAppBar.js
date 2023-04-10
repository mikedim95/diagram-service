import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function VerticalButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <AppBar
          elevation={0}
          position="static"
          sx={{ backgroundColor: "#4285F4" }}
        >
          <Toolbar sx={{ flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6" component="div">
                myCharts
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                component={Link}
                to="/mycharts"
                color="inherit"
                variant="text"
                sx={{ marginTop: "13px" }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/mycharts/about"
                color="inherit"
                variant="text"
                sx={{ marginTop: "13px" }}
              >
                About
              </Button>
              <Button
                component={Link}
                to="/mycharts/profile"
                color="inherit"
                variant="text"
                sx={{ marginTop: "13px" }}
              >
                My account
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}
