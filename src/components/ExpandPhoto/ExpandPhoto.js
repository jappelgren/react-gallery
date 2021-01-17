import { useState } from 'react'
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal"
import Fullscreen from "@material-ui/icons/Fullscreen"

export default function ExpandPhoto() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <IconButton type="button" onClick={handleClickOpen}>
                <Fullscreen />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{ alignItems: 'center', justifyContent: 'center' }}
            >
                <div className="modal-img-container">
                    <img className="modal-img" src="images/udon.jpg" />
                </div>
            </Modal>
        </div>
    )
}