import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Input from "../components/Input/Input";
import MuiTable from "../components/Table/MuiTable";
import { filterOptions } from "../data/userData";
import MuiButton from "../components/Button/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import UserModal from "../modules/UserModal";
import { useAppDispatch } from "../app/hook";
import { setFilter } from "../store/reducers/user";

/**
 * Renders the root component.
 * @return {JSX.Element} The JSX element representing the root component.
 */
const Root = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchType, setSearchType] = useState({ label: "", value: "" });
  const dispatch = useAppDispatch();
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ type: searchType.value, value: event.target.value }));
  };
  return (
    <div className="user-list-container">
      <div className="list-header">
        <div className="filters">
          <Autocomplete
            disablePortal
            id="user-filters"
            options={filterOptions}
            sx={{ width: 300 }}
            value={searchType}
            renderInput={(params) => <TextField {...params} label="Select" />}
            onChange={(_, value) => setSearchType(value)}
          />
          <Input label="Search" id="search-user" onChange={onSearch} />
        </div>
        <div>
          <UserModal open={open} handleClose={handleClose} type="new" />
          <MuiButton
            text="New"
            startIcon={<ControlPointIcon />}
            onClick={handleOpen}
          />
        </div>
      </div>
      <MuiTable />
    </div>
  );
};

export default Root;
