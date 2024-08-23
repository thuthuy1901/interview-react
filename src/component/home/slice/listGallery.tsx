import { TypeGallergy } from ".";
import ItemGallery from "./itemGallery";

type ListGalleryProps = {
    galleries: TypeGallergy[],
}

const ListGallery = (props: ListGalleryProps) => {
    const {galleries} = props;
    return (
        <div className="flex items-stretch gap-x-[188px]">
            {galleries.map((gallery: TypeGallergy) => {
                return <ItemGallery item={gallery} key={gallery.id}/>
            })}
        </div>
    )
}

export default ListGallery;