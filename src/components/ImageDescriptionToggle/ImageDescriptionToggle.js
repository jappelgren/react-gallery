//ImageDescriptionToggle is logic that checks to see if the picture has been clicked or not.
//If the photo is clicked the cardFlip prop is changed from true to false or vice versa.
//Different content is displayed based on this logic.  Either the picture or it's description.

export default function ImageDescriptionToggle({ setCardFlip, cardFlip, image, addLike }) {
    if (cardFlip) {
        return (
            <div onClick={() => setCardFlip(!cardFlip)} className="card-desc">
                <p>{image.description}</p>
            </div>
        )
    } else {
        return (
            <div className="card-img">

                <img
                    src={"images/" + image.filename}
                    alt={image.description}
                    className="gallery-img"
                    onClick={() => window.setTimeout(() => {
                        setCardFlip(!cardFlip)
                    }, 180)}
                />

            </div>)
    }

}