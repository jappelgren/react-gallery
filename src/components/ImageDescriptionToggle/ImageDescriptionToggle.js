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
                    onClick={() => window.setTimeout(() => {
                        setCardFlip(!cardFlip)
                    }, 180)}
                />

            </div>)
    }

}