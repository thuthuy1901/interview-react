import { TypeListPost } from ".";
import iconEdit from "@assets/iconEdit.png";
import iconRemove from "@assets/iconRemove.png";
import { useState } from "react";
import ModalDeletePost from "./modalDeletePost";
import axios from "axios";
import ModalUpdatePost from "./modalUpdate";

type ListPostProps = {
    posts?: TypeListPost[];
    tags: string[];
    fetchPosts: (currentPage: number) => Promise<void>;
}

const LisPost = (props: ListPostProps) => {
    const {posts, tags, fetchPosts} = props;
    const [choosePost, setChoosePost] = useState<TypeListPost>();
    const [openModalDel, setOpenModalDel] = useState(false);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    const lengthPost = posts?.length ?? 0;

    const handleCloseModalDel = () => setOpenModalDel(false);
    const deletePost = async () => {
        try {
            await axios.delete(`https://api-test-web.agiletech.vn/posts/${choosePost?.id}`);
            await fetchPosts(1);
            handleCloseModalDel();
        } catch (err) {
            console.log(err);
        }
    };

    const handleCloseModalUpdate = () => setOpenModalUpdate(false);
    const updatePost = async (postUpdate: TypeListPost) => {
        if (!choosePost) return;

        try {
            await axios.patch(`https://api-test-web.agiletech.vn/posts/${choosePost.id}`, 
                postUpdate
            );
            await fetchPosts(1);
            handleCloseModalUpdate();
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            <table className="min-w-full bg-white w-full border-collapse">
                <thead className="bg-gray">
                    <tr>
                        <th className="px-4 py-2 w-[10%] max-w-[128px]">ID</th>
                        <th className="px-4 py-2 border-x w-[25%]">Title</th>
                        <th className="px-4 py-2 border-x w-[25%]">Description</th>
                        <th className="px-4 py-2 border-x w-[25%]">Tags</th>
                        <th className="px-4 py-2 w-[15%]">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={5} className="pt-2.5"></td>
                    </tr>
                    {posts?.map((post, index) =>{
                        const lengthTag = post.tags.length;
                        return(
                            <tr className="bg-gray w-full" key={`${post.id}-${post.title}-${index}`}>
                                <td className="px-4 py-2 border truncate max-w-[128px]">{post.id}{index + 1}</td>
                                <td className="px-4 py-2 border truncate">{post.title}</td>
                                <td className="px-4 py-2 border truncate">{post.description}</td>
                                <td className="px-4 py-2 border truncate">
                                    {post.tags.map((tag, index) => {
                                        return `${tag.tag}${index < lengthTag - 1 ? ',' : ''}`; 
                                    })}
                                </td>
                                <td className={`px-4 py-2 border-t border-r flex justify-between ${index === lengthPost - 1 ? 'border-b' : ''}`}>
                                    <img src={iconEdit} alt="iconEdit" onClick={() => {setOpenModalUpdate(true); setChoosePost(post);}}/>
                                    <img src={iconRemove} alt="iconRemove" onClick={() => {setOpenModalDel(true); setChoosePost(post);}}/>
                                </td>
                            </tr>
                        )}
                    )}
                </tbody>
            </table>
            {openModalDel && 
                <ModalDeletePost 
                    handleClose={handleCloseModalDel} 
                    deletePost={deletePost}
                />
            }
            {openModalUpdate && 
                <ModalUpdatePost 
                    handleClose={handleCloseModalUpdate} 
                    updatePost={updatePost}
                    post={choosePost}
                    tags={tags}
                />
            }
        </>
    )
}

export default LisPost;