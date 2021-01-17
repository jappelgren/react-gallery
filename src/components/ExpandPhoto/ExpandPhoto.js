import { useState } from 'react'
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal"
import Fullscreen from "@material-ui/icons/Fullscreen"


//ExpandPhoto is a component that on click of a button will make a modal containing an enlarged
//version of the selected photo appear.
export default function ExpandPhoto({ image }) {
    
    //open, handleClickOpen, and handleClose all relate to the modal that houses the full version
    //of a photo displaying on click
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
                </div>
            </Modal>

        </div >
    )
}