import GalleryItem from "../GalleryItem/GalleryItem";

export default function GalleryList({ gallery, addLike }) {
    return (
        <div className="gallery-container">
            {
                gallery.map((image) => (
                    <GalleryItem image={image} addLike={addLike} key={image.id} />
                ))
            }
        </div>
    )

}