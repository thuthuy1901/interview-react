import { useEffect, useState } from "react";
import ListGallery from "./listGallery";
import { motion } from 'framer-motion';
import axios from 'axios';

export type TypeGallergy = {
    id: string,
    desctiption: string,
    imageUrl: string,
}

const SliceHome = () => {
    const [galleries, setGalleries] = useState<TypeGallergy[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGalleries = async () => {
            try {
                const response = await axios.get('https://api-test-web.agiletech.vn/galleries');
                setGalleries(response.data); 
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchGalleries();
    }, []);
    
    return (
        !loading && 
            <motion.section 
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -200 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="mt-[120px] w-full xl:max-w-widthPage lg:max-w-[1024px] md:max-w-[736px] mx-auto bg-purple rounded-[50px] py-[110px] xl:pl-[93.17px] xl:pr-[95.17px] px-2 overflow-hidden relative"
            >
                <h2 className="text-[40px] leading-[52px] font-bold text-left text-white mb-[88.16px]">Testimonials</h2>
                <ListGallery galleries={galleries}/>
            </motion.section>
    )
}

export default SliceHome;