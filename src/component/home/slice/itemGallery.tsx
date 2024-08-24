import { TypeGallergy } from ".";

type ItemGalleryProps = {
    item: TypeGallergy;
}

const ItemGallery = (props: ItemGalleryProps) => {
    const {item} = props;
    return (
        <div className="rounded-[20px] bg-white pt-[60px] xl:px-[101.11px] pb-[50px] px-[35px] flex gap-x-[43.33px] min-w-full relative after:block after:absolute after:-bottom-5 after:left-0 after:rounded-bl-[30px] after:rounded-br-[30px] after:bg-purpleShadow after:h-10 after:w-full after:z-[-1]">
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