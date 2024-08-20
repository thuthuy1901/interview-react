import { featureState } from "./listFeature";

type ItemFeatureProps = {
    item: featureState,
}

const ItemFeature = (props: ItemFeatureProps) => {
    const {item} = props;
    return (
        <div className="w-[523.21px] h-[382.1px] relative">
            <img 
                className="absolute left-0 top-0"
                src={item.img} 
                alt={item.title} 
            />
            <img 
                className="absolute right-0 top-0 w-[435.28px] h-[352.56px]"
                src={item.banner} 
                alt={item.title} 
            />
        </div>
    )
}

export default ItemFeature;