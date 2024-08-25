import axios from "axios";
import { useEffect, useState } from "react";
import LisPost from "./listPost";
import HeaderPost from "./headerPost";
import Pagination from "./pagination";

export type TypeListPost = {
    id: string;
    title: string;
    description: string;
    tags: {
        tag: string;
    }[];
}

export type TypePosts = {
    posts : TypeListPost [];
    current_page: number;
    total_page: number;
    page_size: number;
    total: number;
}

const Post = () => {
    const [posts, setPosts] = useState<TypePosts>();
    const [currentPage, setCurrentPage] = useState(1); 
    const [loading, setLoading] = useState(false);

    const handleChangeTab = async (tab: number) => {
        setLoading(true);
        await setCurrentPage(tab);
        setLoading(false);
    }

    useEffect(() => {
        fetchPosts(currentPage);
    }, [currentPage]);

    const fetchPosts = async (currentPage: number, title?: string, tab?: string) => {
        try {
            const response = await axios.get(`https://api-test-web.agiletech.vn/posts?page=${currentPage}${title ? `&title=${title}` : ''}${tab ? `&tags=${tab}`: '' }`);
            setPosts(response.data);                
        } catch (error) {
            console.log(error);
        }
    };

    const [tags, setTags] = useState<string[]>([]);
    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await axios.get('https://api-test-web.agiletech.vn/posts/tags');
                setTags(response.data);                
            } catch (error) {
                console.log(error);
            }
        };

        fetchTags();
    }, []);

    return (
        <section className="flex-1 mt-[120px] mx-[120px]">
            <HeaderPost fetchPosts={fetchPosts} tags={tags}/>
            {!loading ? 
                <LisPost posts={posts?.posts} fetchPosts={fetchPosts} tags={tags}/>:
                <div>...Loading</div>
            }
            <Pagination 
                numberPage={posts?.total_page} 
                currentPage={currentPage} 
                handleChangeTab={handleChangeTab}
            />
        </section>
    )
}

export default Post;

