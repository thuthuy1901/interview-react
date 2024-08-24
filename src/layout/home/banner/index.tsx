import Button from "../../../component/button";
import bannerHeader from "@assets/banner_header.png";
import { motion } from 'framer-motion';

const BannerHome = () => {
    return (
        <section className="xl:pt-[129px] md:pt-24 pt-12 w-full max-w-widthPage mx-auto xl:px-0 px-8">
            <div className="relative w-full">
                <motion.div 
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true}}
                    className="xl:max-w-[641px] w-full xl:block flex flex-col items-center"
                >
                    <h1 className="font-bold xl:text-[80px] text-[40px] xl:leading-[88px] leading-[44px] text-header xl:text-left text-center">
                        Save your data storage here.
                    </h1>
                    <p className="text-lg font-medium text-text xl:max-w-[377.64px] w-full xl:my-[49.69px] my-6 xl:text-left text-center">
                        Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
                    </p>
                    <Button title="Lear more" padding="px-[36.77px] pt-[15.9px] pb-[14.91px]"/>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true}}
                    className="xl:absolute right-0 bottom-[-35.78px] xl:mt-0 mt-8 xl:block flex justify-center w-full xl:w-fit"
                >
                    <img src={bannerHeader} alt="bannerHeader" className="lg:w-[736px] md:w-[885px] w-[608px]"/>
                </motion.div>
            </div>
        </section>
    )
}

export default BannerHome;