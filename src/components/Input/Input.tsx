import { OutlinedInputProps, TextField } from "@mui/material";

/**
 * Creates an input component with an outlined style.
 *
 * @param {OutlinedInputProps} props - The properties for the input component.
 * @return {ReactElement} The rendered input component.
 */
const Input = (props: OutlinedInputProps) => {
  const { label, id, ...restProps } = props;
  return <TextField id={id} label={label} {...restProps} />;
};

export default Input;
