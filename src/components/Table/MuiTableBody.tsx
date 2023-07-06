import {
  TableBody,
  TableCell,
  TableRow,
  Chip,
  IconButton,
} from "@mui/material";
import { useAppSelector } from "../../app/hook";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

/**
 * Renders the body of the Material-UI table component.
 * @return {JSX.Element} The table body component.
 */
const MuiTableBody = () => {
  const userList = useAppSelector((state) => state.user.user);
  return (
    <TableBody>
      {userList.map((row) => (
        <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.firstname}
          </TableCell>
          <TableCell>{row.lastname}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell align="center">{row.phone}</TableCell>
          <TableCell align="center">
            <Chip
              label={row.status}
              color={`${row.status === "Active" ? "primary" : "error"}`}
            />
          </TableCell>
          <TableCell align="center">
            <IconButton color="primary" aria-label="Left" size="small">
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton color="error" aria-label="Left" size="small">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default MuiTableBody;
