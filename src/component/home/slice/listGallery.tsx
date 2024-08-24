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
                className="absolute left-[29px] top-1/2 hidden xl:block"
                onClick={() => {
                    if(currentSlice !== 0) setCurrentSlice(currentSlice - 1)
                }}
            />
            <img 
                src={arrowRightWhite} 
                alt="arrowRightWhite" 
                className="absolute right-[35px] top-1/2 hidden xl:block"
                onClick={() => {
                    if(currentSlice !== listLength - 1) setCurrentSlice(currentSlice + 1)
                }}
            />
            <div 
                className="flex items-stretch gap-x-[188px] relative transition-all duration-200"
                style={{transform: `translateX(calc(${positionSlice}))`}}
            >
                {galleries.map((gallery: TypeGallergy) => {
                    return <ItemGallery item={gallery} key={gallery.id}/>
                })}
            </div>
            <div className="absolute bottom-[60px] left-1/2 flex items-center gap-x-2.5">
                {Array.from({ length: listLength }).map((_, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-full ${currentSlice === index ? 'bg-blink size-[10px] max-w-[10px]' : 'bg-white size-[5px] max-w-[5px]'}`}
                        onClick={() => setCurrentSlice(index)}
                    />
                ))}
            </div>
        </>
    )
}

export default ListGallery;