import { useState } from "react"
import ImageDescriptionToggle from "../ImageDescriptionToggle/ImageDescriptionToggle";

export default function GalleryItem({ image, addLike }) {

    const [cardFlip, setCardFlip] = useState(false);

    return (
        <div key={image.id} className={"card " + image.orientation}>
            <ImageDescriptionToggle cardFlip={cardFlip} setCardFlip={setCardFlip} image={image} addLike={addLike} />
        </div >
    )
}