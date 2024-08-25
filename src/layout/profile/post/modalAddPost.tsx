import axios from "axios";
import { options } from "node_modules/axios/index.d.cts";
import { useState } from "react";

type ModalAddPostProps = {
    tags: string[];
    handleClose: () => void;
    fetchPosts: (currentPage: number) => Promise<void>;
}

type TypeRequest = {
    title: string;
    description: string;
    tags: {tag: string}[];
}

const ModalAddPost = (props: ModalAddPostProps) => {
    const {tags, handleClose, fetchPosts} = props;
    const [request, setRequest] = useState<TypeRequest>({
        title: '',
        description: '',
        tags: []
    });

    const handleChangeTags = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;

        setRequest((prevRequest) => ({
            ...prevRequest,
            tags: checked
                ? [...prevRequest.tags, { tag: value }]
                : prevRequest.tags.filter((tagObj) => tagObj.tag !== value)
        }));
    };

    const createPost = async () => {
        try {
            await axios.post('https://api-test-web.agiletech.vn/posts', 
                request
            );
            await fetchPosts(1);
            handleClose();
        } catch (error) {
            console.error('Failed to create post:', error);
        }
    };
    
    return (
        <section className="w-screen h-screen fixed top-0 right-0 bg-black bg-opacity-20 flex justify-center items-center">
            <div className="p-10 rounded-lg bg-white text-black w-full max-w-[440px] flex flex-col">
                <h3 className="font-bold text-3xl text-center">Add Post</h3>
                <label 
                    htmlFor="Title" 
                    className="text-lg font-medium mt-3"
                >
                    Title
                </label>
                <input 
                    type="text" 
                    placeholder="Title" 
                    id="Title" 
                    className="outline-none border border-black rounded p-2"
                    value={request.title}
                    onChange={(e) => {
                        setRequest((prev) => (
                            {
                                ...prev,
                                title: e.target.value,
                            }
                        ))
                    }}
                />
                
                <label 
                    htmlFor="Description" 
                    className="text-lg font-medium mt-3"
                >
                    Description
                </label>
                <input 
                    type="text" 
                    placeholder="Description" 
                    id="Description" 
                    className="outline-none border border-black rounded p-2"
                    value={request.description}
                    onChange={(e) => {
                        setRequest((prev) => (
                            {
                                ...prev,
                                description: e.target.value,
                            }
                        ))
                    }}
                />

                <label 
                    htmlFor="Tag" 
                    className="text-lg font-medium mt-3"
                >
                    Tags
                </label>
                <div 
                    id="Tag"
                    className="max-h-20 w-full overflow-y-scroll border rounded-md pl-4"
                >
                    {tags.map((tag, index) => (
                        <div key={index}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={tag}
                                    checked={request.tags.some(tagObj => tagObj.tag === tag)}
                                    onChange={handleChangeTags}
                                />
                                {tag}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="mt-3 flex justify-end gap-x-4">
                    <button 
                        className="px-3 py-2 rounded border text-black bg-gray"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button 
                        className="px-3 py-2 rounded border text-white bg-purple" 
                        onClick={createPost}
                    >
                        Add
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ModalAddPost;