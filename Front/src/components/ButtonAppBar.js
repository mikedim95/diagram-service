import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#4285F4" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" component="div">
              myCharts
            </Typography>
            <Button color="inherit" variant="text" sx={{ marginLeft: "13px" }}>
              Home
            </Button>
            <Button color="inherit" variant="text">
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
