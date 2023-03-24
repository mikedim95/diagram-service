import Grid from "@mui/material/Grid";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import ButtonAppBar from "../components/ButtonAppBar";
import BoxGrid from "../components/BoxGrid";

function Home() {
  return (
    <div>
      <ButtonAppBar />

      <Grid container justifyContent="center" alignItems="center">
        <Grid item sx={{ textAlign: "center" }}>
          <h1>Welcome to myCharts</h1>
          <h4>Sign in with your Google account to access all features</h4>

          <Button variant="contained" sx={{ backgroundColor: "#4285F4 " }}>
            <GoogleIcon sx={{ width: "22px", marginRight: "6px" }} />
            Sign in
          </Button>
          <Box height={"30px"}></Box>   
          {/* just for space between two components */}  
          <BoxGrid />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
