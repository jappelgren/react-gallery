import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function AddPhotoForm() {
    const [open, setOpen] = React.useState(false);
    const [newImageInfo, setNewImageInfo] = useState([{ description: 'de', orientation: 'portrait' }])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        console.log(newImageInfo)
    };



    return (
        <div>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => handleClickOpen()}
            >
                <AddAPhotoIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add Photo to gallery
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Photo Description"
                        type="text"
                        onChange={setNewImageInfo}
                        value={newImageInfo.description}
                    />
                    <br />
                    <InputLabel id="demo-simple-select-label">Portrait or Landscape</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={newImageInfo.orientation}
                    >
                        <MenuItem value={'portrait'}>Portrait</MenuItem>
                        <MenuItem value={'landscape'}>Landscape</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Add Photo
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

