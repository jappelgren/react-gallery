import { useState } from 'react'
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal"
import Fullscreen from "@material-ui/icons/Fullscreen"

export default function ExpandPhoto({ image }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <IconButton className="fullscreen" type="button" onClick={handleClickOpen}>
                <Fullscreen style={{ fill: '#ffffff' }} />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                className="modal"
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"

            >
                <div className="modal-img-container" onClick={handleClose}>
                    <img className="modal-img" src={"images/" + image.filename} />
                    <button>hi</button>
                </div>
            </Modal>

        </div >
    )
}