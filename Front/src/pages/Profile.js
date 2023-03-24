import ButtonAppBar from "../components/ButtonAppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth="sm">
        <Typography variant="h6" marginBottom={"35px"} marginTop={"20px"}>
          Hello (Google Account goes here)
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Typography variant="h6">Number of charts</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="body1"
              style={{
                border: "1.5px solid black",
                padding: "4px",
                borderRadius: "6px",
              }}
            >
              4
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h6">Available credits</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="body1"
              style={{
                border: "1.5px solid black",
                padding: "4px",
                borderRadius: "6px",
              }}
            >
              100000
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h6">Last login:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="body1"
              style={{
                border: "1.5px solid black",
                padding: "4px",
                borderRadius: "6px",
              }}
            >
              12/2/23
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "40px",
          }}
        >
          <Button variant="outlined" component={Link} to="/mycharts/usercharts">
            My charts
          </Button>
          <Button variant="outlined">New chart</Button>
          <Button variant="outlined">Buy credits</Button>
        </Box>
      </Container>
    </div>
  );
}

export default Profile;
