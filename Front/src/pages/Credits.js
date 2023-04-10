import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ButtonAppBar from "../components/ButtonAppBar";
import CreditGrid from "../components/CreditGrid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Home() {
  return (
    <div>
      <ButtonAppBar />

      <Grid container justifyContent="center" alignItems="center">
        <Grid item sx={{ textAlign: "center" }}>
          <Typography variant="h6" marginBottom={"35px"} marginTop={"30px"}>
            You are logged in as (Google Account goes here)
          </Typography>

          <Box height={"20px"}></Box>
          {/* just for space between two components */}
          <CreditGrid />
          <Box height={"60px"}></Box>
          <Button variant="outlined">Cancel Purchase</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
