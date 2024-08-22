import { featureState } from "./listFeature";
import arrowRight from "../../../assets/arrowRight.png"

type ItemFeatureProps = {
    item: featureState,
}

const ItemFeature = (props: ItemFeatureProps) => {
    const {item} = props;
    return (
        <div className="w-[523.21px] h-[382.1px] relative xl:block flex flex-col items-center">
            <img 
                className={`xl:absolute left-0 xl:w-[232px] w-[120px] ${item.class}`}
                src={item.img} 
                alt={item.title} 
            />
            <img 
                className="absolute right-0 top-0 w-[435.28px] h-[352.56px] hidden xl:block"
                src={item.banner} 
                alt={item.title} 
            />
            {item.listStick.map((itemStick) => (
                <img 
                    src={itemStick.src} 
                    alt={itemStick.src} 
                    className={`absolute ${itemStick.class} hidden xl:block`} 
                />
            ))}
            <div className="xl:absolute max-w-[220px] top-[48.26px] right-[49.24px] space-y-[19.7px]">
                <h3 className="font-normal text-2xl text-header">{item.title}</h3>
                <p className="font-normal text-base text-text">{item.sub}</p>
                <a href="#" className="flex gap-x-4 items-center text-header font-extrabold">
                    Learn more
                    <img src={arrowRight} alt="arrowRight" />
                </a>
            </div>
        </div>
    )
}

export default ItemFeature;