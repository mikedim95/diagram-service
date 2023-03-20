import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   box: {
//     backgroundColor: "#f0f0f0",
//     height: 50,
//     width: 50,
//     border: "1px solid #ccc",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// }));

const boxes = [
  { id: 1, label: "Chart 1" },
  { id: 2, label: "Chart 2" },
  { id: 3, label: "Chart 3" },
  { id: 4, label: "Chart 4" },
  { id: 5, label: "Chart 5" },
  { id: 6, label: "Chart 6" },
];

export default function BoxGrid() {
  return (
    <Grid container spacing={3}>
      {boxes.map((box) => (
        <Grid item xs={2} key={box.id}>
          <Box
            height={"125px"}
            width={"125px"}
            bgcolor={"#90baf5"}
            borderRadius={"3px"}
          >
            {box.label}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
