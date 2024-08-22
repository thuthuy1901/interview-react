import ListFeature from "./listFeature";
import { motion } from 'framer-motion';

const FeaturesHome = () => {
    return (
        <section className="pt-[164.29px] w-full max-w-widthPage mx-auto flex flex-col items-center">
            <motion.h2 
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-header font-bold text-[40px] leading-[52px]"
            >
                Features
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-text font-medium text-lg max-w-[575.12px] text-center xl:mt-[49.24px] mt-6"
            >
                Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
            </motion.p>
            <div className="w-full mt-[68.94px] grid xl:grid-cols-2 grid-cols-1 justify-items-center">
                <ListFeature />
            </div>
        </section>
    )
}

export default FeaturesHome;