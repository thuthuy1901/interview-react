import { featureState } from "./listFeature";
import arrowRight from "@assets/arrowRight.png";
import { motion } from 'framer-motion';

type ItemFeatureProps = {
    item: featureState,
}

const ItemFeature = (props: ItemFeatureProps) => {
    const {item} = props;
    const time = 0.5 * item.id;
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 2 + time, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full max-w-[523.21px] h-[382.1px] relative xl:block flex flex-col items-center"
        >
            <motion.img 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1 + time, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className={`xl:absolute left-0 z-10 xl:w-[232px] w-[120px] ${item.class}`}
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
                    key={itemStick.src}
                    src={itemStick.src} 
                    alt={itemStick.src} 
                    className={`absolute ${itemStick.class} hidden xl:block`} 
                />
            ))}
            <div className="xl:absolute max-w-[220px] top-[48.26px] right-[49.24px] space-y-[19.7px]">
                <h3 className="font-normal text-2xl text-header">{item.title}</h3>
                <p className="font-normal text-base text-text italic">{item.sub}</p>
                <a href="#" className="flex gap-x-4 items-center text-header font-extrabold">
                    Learn more
                    <img src={arrowRight} alt="arrowRight" />
                </a>
            </div>
        </motion.div>
    )
}

export default ItemFeature;