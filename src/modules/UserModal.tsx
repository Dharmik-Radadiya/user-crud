import { Autocomplete, TextField } from "@mui/material";
import Input from "../components/Input/Input";
import MuiModal from "../components/Modal/MuiModal";
import MuiButton from "../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { setUser } from "../store/reducers/user";
import { isValid } from "../helpers/validation";
import { setErrorStatus, setInputValue } from "../store/reducers/validate";

type Props = {
  open: boolean;
  handleClose: () => void;
  type: string;
};

/**
 * Renders a UserModal component.
 *
 * @param {Props} props - the component props
 * @return {JSX.Element} the rendered UserModal component
 */
const UserModal = (props: Props) => {
  const dispatch = useAppDispatch();
  const { open, handleClose, type } = props;
  const validate = useAppSelector((state) => state.validate);

  /**
   * Handles the input change event.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   * @return {void} This function does not return a value.
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setInputValue({ name, value }));
  };

  /**
   * Handles the change event of the select element.
   *
   * @param {any} data - The selected data.
   * @return {void} No return value.
   */
  const handleSelectChange = (data) => {
    dispatch(setInputValue(data));
  };

  /**
   * Handles the form submission event.
   *
   * @param {any} event - the submission event
   * @return {void}
   */
  const handleSubmit = (event: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    event.preventDefault();

    const isFirstValid = isValid("text", "First Name", validate.firstname);
    const isLastValid = isValid("text", "Last Name", validate.lastname);
    const isEmailValid = isValid("email", "Email", validate.email);
    const isPhoneValid = isValid("phone", "Phone", validate.phone);
    const isStatusValid = isValid("status", "Status", validate.status);

    dispatch(
      setErrorStatus({
        isFirstValid,
        isLastValid,
        isEmailValid,
        isPhoneValid,
        isStatusValid,
      })
    );

    if (
      isFirstValid.status &&
      isLastValid.status &&
      isEmailValid.status &&
      isPhoneValid.status &&
      isStatusValid.status
    ) {
      const date = new Date();
      const id = date.getTime();
      dispatch(
        setUser({
          id: id,
          firstname: validate.firstname,
          lastname: validate.lastname,
          email: validate.email,
          phone: validate.phone,
          status: validate.status,
        })
      );
      handleClose();
    }
  };
  return (
    <div>
      <MuiModal open={open} handleClose={handleClose}>
        <form className="user-form" onSubmit={handleSubmit}>
          <Input
            type="text"
            label="First Name"
            id="firstname"
            name="firstname"
            onChange={handleInputChange}
            value={validate.firstname}
            helperText={validate.error.firstname.message}
            error={!validate.error.firstname.status}
          />
          <Input
            type="text"
            label="Last Name"
            id="lastname"
            name="lastname"
            onChange={handleInputChange}
            value={validate.lastname}
            helperText={validate.error.lastname.message}
            error={!validate.error.lastname.status}
          />
          <Input
            type="email"
            label="Email"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={validate.email}
            helperText={validate.error.email.message}
            error={!validate.error.email.status}
          />
          <Input
            type="phone"
            label="Phone"
            id="phone"
            name="phone"
            onChange={handleInputChange}
            value={validate.phone}
            helperText={validate.error.phone.message}
            error={!validate.error.phone.status}
          />
          <Autocomplete
            disablePortal
            id="status"
            options={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ]}
            renderInput={(params) => (
              <TextField
                helperText={validate.error.status.message}
                error={!validate.error.status.status}
                {...params}
                label="Select"
              />
            )}
            onChange={(_, value) => {
              handleSelectChange({ name: "status", value: value.label });
            }}
            value={validate.status}
          />
          <div></div>
          <MuiButton text="Add user" type="submit" />
        </form>
      </MuiModal>
    </div>
  );
};

export default UserModal;
