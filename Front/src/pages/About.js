import ButtonAppBar from "../components/ButtonAppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth="sm">
        <Typography variant="h4" component="h4" marginTop={"30px"}>
          About us
        </Typography>
        <Typography
          align="justify"
          variant="body1"
          component="p"
          marginTop={"18px"}
          sx={{ lineHeight: 1.7 }}
        >
          myCharts is a web application-service aimed at users who do not have
          the necessary technical knowledge and allows them to create diagrams
          and they download to their computer in various formats. It supports 9
          types of diagrams. For each type, the user can download a template csv
          file that shows how to populate the chart data and the supported
          formatting directives. To create a chart, the user must upload the
          corresponding csv file. He can then download the charts he has
          created, to supported formats.
        </Typography>
      </Container>
    </div>
  );
}

export default About;
