import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//This is the component for chart display in home page

const boxes = [
  { id: 1, label: "5 Credits" },
  { id: 2, label: "10 Credits" },
  { id: 3, label: "20 Credits" },
  { id: 4, label: "50 Credits" },
];

export default function CreditGrid() {
  return (
    <Grid container spacing={10}>
      {boxes.map((box) => (
        <Grid item xs={3} key={box.id}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            height={"125px"}
            width={"125px"}
            bgcolor={"#90baf5"}
            borderRadius={"3px"}
          >
            <Typography
              fontSize={"20px"}
              color={"white"}
              variant="body1"
              marginTop={"30px"}
            >
              {box.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
