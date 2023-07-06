import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import MuiTableBody from "./MuiTableBody";
import MuiTableHead from "./MuiTableHead";

/**
 * Renders a Material-UI table.
 * @return {JSX.Element} The rendered table component.
 */
const MuiTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
        borderRadius: "8px",
        border: "1px solid #009978",
      }}
    >
      <Table aria-label="simple table">
        <MuiTableHead />
        <MuiTableBody />
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
