import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RecordForm from "./RecordForm";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  initialValues?: any;
}

const RecordModal: React.FC<ModalProps> = ({
  open,
  onClose,
  initialValues,
}) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
        }}
      >
        {/* Header with Close Button */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography id="modal-title" variant="h6">
            Record
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Content Section */}
        <Box mt={2}>
          <RecordForm
            initialValues={initialValues}
            onSubmit={(values: any) => console.log(values)}
            users={undefined}
            books={undefined}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default RecordModal;
