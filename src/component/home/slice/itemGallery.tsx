import { TypeGallergy } from ".";

type ItemGalleryProps = {
    item: TypeGallergy;
}

const ItemGallery = (props: ItemGalleryProps) => {
    const {item} = props;
    return (
        <div className="rounded-[20px] bg-white pt-[60.11px] px-[101.11px] pb-[50.09px] flex gap-x-[43.33px] min-w-full">
            <img src={item.imageUrl} alt="imgGallery" className="w-[130px] h-[90.16px]"/>
            <div>
                <p className="text-lg font-bold text-header">John Fang</p>
                <p className="text-purple font-medium text-sm">wordfaang.com</p>
                <p className="max-w-[340px] text-text font-normal mt-[19.03px]">{item.desctiption}</p>
            </div>
        </div>
    )
}

export default ItemGallery;