import "./App.css";

import Grid from "@mui/material/Grid";
import ButtonAppBar from "./components/ButtonAppBar";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item sx={{ textAlign: "center" }}>
          <h1>Welcome to myCharts</h1>
          <h4>Login with google to access all features</h4>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
