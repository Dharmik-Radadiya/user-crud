import { TableCell, TableHead, TableRow } from "@mui/material";

/**
 * Render the table head component for the MuiTable component.
 * @return {JSX.Element} The rendered table head component.
 */
const MuiTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell align="center">Phone</TableCell>
        <TableCell align="center">Status</TableCell>
        <TableCell align="center">Action</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default MuiTableHead;
