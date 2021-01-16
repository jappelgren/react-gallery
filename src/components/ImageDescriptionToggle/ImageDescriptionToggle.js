export default function ImageDescriptionToggle({ setCardFlip, cardFlip, image, addLike }) {
    if (cardFlip) {
        return (
            <div onClick={() => setCardFlip(!cardFlip)}>
                <p>{image.description}</p>
            </div>
        )
    } else {
        return (
            <>
                <img
                    src={"images/" + image.filename}
                    alt={image.description}
                    onClick={() => setCardFlip(!cardFlip)}
                />
                <button onClick={() => addLike(image.id)}>Like</button>
            </>)
    }

}