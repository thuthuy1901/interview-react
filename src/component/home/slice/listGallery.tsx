import { useMemo, useState } from "react";
import { TypeGallergy } from ".";
import ItemGallery from "./itemGallery";
import arrowLeftWhite from "@assets/arrowLeftWhite.png";
import arrowRightWhite from "@assets/arrowRightWhite.png";

type ListGalleryProps = {
    galleries: TypeGallergy[],
}

const ListGallery = (props: ListGalleryProps) => {
    const {galleries} = props;
    const [currentSlice, setCurrentSlice] = useState(0);
    const listLength = galleries.length;

    const positionSlice = useMemo(() => {
        return `-${currentSlice} * (100% + 188px)`;
    },[currentSlice]);

    return (
        <>
            <img 
                src={arrowLeftWhite} 
                alt="arrowLeftWhite" 
                className="absolute left-[29px] top-1/2"
                onClick={() => {
                    if(currentSlice !== 0) setCurrentSlice(currentSlice - 1)
                }}
            />
            <img 
                src={arrowRightWhite} 
                alt="arrowRightWhite" 
                className="absolute right-[35px] top-1/2"
                onClick={() => {
                    if(currentSlice !== listLength - 1) setCurrentSlice(currentSlice + 1)
                }}
            />
            <div 
                className="flex items-stretch gap-x-[188px] relative"
                style={{transform: `translateX(calc(${positionSlice}))`}}
            >
                {galleries.map((gallery: TypeGallergy) => {
                    return <ItemGallery item={gallery} key={gallery.id}/>
                })}
            </div>
        </>
    )
}

export default ListGallery;