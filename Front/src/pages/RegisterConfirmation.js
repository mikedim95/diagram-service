import ButtonAppBar from "../components/ButtonAppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function About() {
  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth="sm">
        <Typography
          variant="body1"
          component="p"
          marginTop={"40px"}
          sx={{ lineHeight: 1.7 }}
        >
          This is the first time you are logging in with (google acount goes
          here)
        </Typography>
        <Typography
          align="justify"
          variant="body1"
          component="p"
          marginTop={"18px"}
          sx={{ lineHeight: 1.7 }}
        >
          If you continue, your email will be stored in our user database to
          allow you store your created chartsand purchase chart credits.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <Button variant="outlined">Continue</Button>
          <Button variant="outlined">No, thanks</Button>
        </Box>
      </Container>
    </div>
  );
}

export default About;
