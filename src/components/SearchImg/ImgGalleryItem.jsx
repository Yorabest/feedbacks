import { GalleryItem, GalleryItemImage } from "./SerchImages.styled"

export const ImgGalleryItem = ({img, id, onClick, modalImage}) => {
    return <GalleryItem key={id} onClick={()=>{onClick(modalImage, id)}}>
        <GalleryItemImage src={img} alt={id}  />
    </GalleryItem>
}