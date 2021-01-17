import GalleryItem from "../GalleryItem/GalleryItem";

//GalleryList's main function is iterating over the data from the gallery state from app.jsx
//and displaying the GalleryItem component for each.

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