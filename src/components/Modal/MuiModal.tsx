import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal, { ModalProps } from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props extends ModalProps {
  handleClose: () => void;
}

/**
 * Renders a Material-UI modal component.
 *
 * @param {Props} open - Whether the modal is open or not.
 * @param {() => void} handleClose - Callback function to handle modal close event.
 * @param {ReactNode} children - The content to be rendered inside the modal.
 * @return {ReactElement} The rendered Modal component.
 */
const MuiModal = ({ open, handleClose, children }: Props) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      className="modal"
    >
      <Fade in={open}>
        <Box sx={style} className={`modal-content`}>
          <Box className="modal-header">
            <IconButton
              color="primary"
              aria-label="Left"
              size="small"
              onClick={handleClose}
              className="modal-close"
            >
              <Close fontSize="small" />
            </IconButton>
          </Box>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default MuiModal;
