import Grid from "@mui/material/Grid";
import ButtonAppBar from "../components/ButtonAppBar";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";

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
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
