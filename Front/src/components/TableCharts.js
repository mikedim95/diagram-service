import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    name: "Frozen yoghurt",
    calories: 12,
    fat: 13,
    carbs: 14,
  },
  {
    name: "Ice cream",
    calories: 124,
    fat: 132,
    carbs: 142,
  },
  {
    name: "Peanut Butter",
    calories: 123,
    fat: 133,
    carbs: 143,
  },
  {
    name: "Brocoli",
    calories: 124,
    fat: 134,
    carbs: 144,
  },
  {
    name: "Muffin",
    calories: 125,
    fat: 135,
    carbs: 145,
  },
];

export default function TableCharts() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="right">Chart Name</TableCell>
            <TableCell align="right">Created on</TableCell>
            <TableCell align="right">Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
