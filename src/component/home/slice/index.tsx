import { useEffect, useState } from "react";
import ListGallery from "./listGallery";

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
            const response = await fetch('https://api-test-web.agiletech.vn/galleries');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setGalleries(data); 
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
            <section className="mt-[120px] w-full max-w-widthPage mx-auto bg-purple rounded-[50px] py-[110px] pl-[93.17px] pr-[95.17px] overflow-y-hidden hide-scroll">
                <h2 className="text-[40px] leading-[52px] font-bold text-left text-white mb-[88.16px]">Testimonials</h2>
                <ListGallery galleries={galleries}/>
            </section>
    )
}

export default SliceHome;