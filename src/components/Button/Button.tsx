import { Button } from "@mui/material";
import { ReactNode } from "react";
interface ButtonProps {
  text: string;
  startIcon?: ReactNode;
  onClick?: () => void;
  type?: string;
}

/**
 * Renders a Material-UI button component.
 *
 * @param {ButtonProps} props - The props object containing the button properties.
 * @return {ReactElement} The rendered Material-UI button component.
 */
const MuiButton = (props: ButtonProps) => {
  const { text, startIcon, onClick, type } = props;
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {text}
    </Button>
  );
};

export default MuiButton;
