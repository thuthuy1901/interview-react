import Button from "@component/button";
import arrowDownBlack from "@assets/arrowDownBlack.png";
import axios from "axios";
import { useEffect } from "react";

const Post = () => {
    useEffect(() => {
        const fetchGalleries = async () => {
            try {
                const response = await axios.get('https://api-test-web.agiletech.vn/posts');
                // console.log("🚀 ~ fetchGalleries ~ response:", response)
                
            } catch (error) {
                console.log(error);
            }
        };

        fetchGalleries();
    }, []);
    return (
        <section className="flex-1 mt-[120px] mx-[120px]">
            <div className="flex justify-between">
                <Button title="Add new" padding="px-[88px] pt-[14px] pb-5 truncate"/>
                <div className="flex gap-x-11">
                    <input type="text" placeholder="Title" className="border border-black rounded-md py-4 pl-9 w-1/2 max-w-[368px]"/>
                    <div className="w-1/2 max-w-[368px] relative">
                        <input type="text" placeholder="Tag" className="border border-black rounded-md py-4 pl-9 w-full"/>
                        <img src={arrowDownBlack} alt="arrowDownBlack" className="absolute top-[21px] right-[15px]"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Post;