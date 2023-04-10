import ButtonAppBar from "../components/ButtonAppBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import TableCharts from "../components/TableCharts";

function UserCharts() {
  return (
    <div>
      <ButtonAppBar />
      <Grid container spacing={1.5} marginTop={"8px"}>
        <Grid item xs={6} md={6}>
          <Box height={"20px"} marginLeft={"10px"}>
            (Test)@gmail.com
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          {/* Edw pera */}
          <Box
            height={"20px"}
            display={"flex"}
            alignItems={"center"}
            marginRight={"10px"}
          >
            <Box flexGrow={1}>
              <Typography
                fontWeight={"bold"}
                variant="subtitle1"
                component="subtitle1"
              >
                My charts
              </Typography>
            </Box>
            <Box>
              <Button
                component={Link}
                to="/mycharts/profile"
                variant="text"
                style={{
                  color: "black",
                  fontSize: "smaller",
                  textTransform: "none",
                }}
              >
                <Typography variant="subtitle1" component="subtitle1">
                  my account
                </Typography>
              </Button>
            </Box>
            <Box>
              <Button
                variant="text"
                style={{
                  color: "black",
                  fontSize: "smaller",
                  textTransform: "none",
                }}
              >
                <Typography variant="subtitle1" component="subtitle1">
                  Logout
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <Box border={1} borderColor="black" marginLeft={"10px"}>
            <TableCharts />
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <Box
            border={1}
            borderColor="black"
            marginRight={"10px"}
            bgcolor={"#d6d7d7"}
            display="flex"
            flexGrow={1}
            alignItems="center"
            justifyContent="center"
            height={"321px"}
            // exw kanei hardcode to ypsos tou box aristera (chart preview gia na matcharei to ipsos tou table)
          >
            Selected Chart Preview
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserCharts;
