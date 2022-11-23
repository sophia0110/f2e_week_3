import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import BigButton from "../button/BigButton";
export default function AlertDialog({ val }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="absolute bottom-[10%] right-[10%] ">
      <Button onClick={handleClickOpen}>
        <BigButton
          className="w-48"
          value={"完成"}
        ></BigButton>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {val}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>確定</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
