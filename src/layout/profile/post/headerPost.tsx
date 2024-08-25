import Button from "@component/button";
import arrowDownBlack from "@assets/arrowDownBlack.png";
import { useEffect, useState } from "react";
import ModalAddPost from "./modalAddPost";
import { useDebounce } from 'use-debounce';

type HeaderPostProps = {
    tags: string[];
    fetchPosts: (currentPage: number, title?: string, tab?: string) => Promise<void>;
}

const HeaderPost = (props: HeaderPostProps) => {
    const {tags, fetchPosts} = props;
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="flex justify-between mb-[39px]">
            <Button 
                title="Add new" 
                padding="px-[88px] pt-[14px] pb-5 truncate"
                onClick={() => setOpenModal(true)}
            />
            <HeaderTag tags={tags} fetchPosts={fetchPosts}/>
            {openModal && 
                <ModalAddPost 
                    tags={tags} 
                    handleClose={() => setOpenModal(false)}
                    fetchPosts={fetchPosts}
                />
            }
        </div>
    )
}

export default HeaderPost;

type HeaderTagProps = {
    tags: string[];
    fetchPosts: (currentPage: number, title?: string, tab?: string) => Promise<void>;
}

type TypeValueSearch = {
    title: string;
    tag: string;
}

const HeaderTag = (props: HeaderTagProps) => {
    const {tags, fetchPosts} = props;
    const [isHovered, setIsHovered] = useState(false);
    const [valueSearch, setValueSearch] = useState<TypeValueSearch>({
        title: '',
        tag: '',
    });

    const debouncedTitle = useDebounce(valueSearch.title, 5000);
    const debouncedTags = useDebounce(valueSearch.tag, 5000);

    useEffect(() => {
        const fetchResults = async () => {
            if (debouncedTitle || debouncedTags) {
                fetchPosts(1, valueSearch.title, valueSearch.tag);
            }
        };

        fetchResults();
    }, [valueSearch.title, valueSearch.tag]);

    return (
        <div className="flex gap-x-11">
            <input 
                type="text" 
                placeholder="Title" 
                className="border border-black rounded-md py-4 pl-9 w-1/2 max-w-[368px]"
                value={valueSearch.title}
                onChange={(e) => setValueSearch(prev => ({...prev, title: e.target.value}))}
            />
            <div 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-1/2 max-w-[368px] relative"
            >
                <input 
                    type="text" 
                    placeholder="Tag" 
                    readOnly 
                    className="border border-black rounded-md py-4 pl-9 w-full cursor-pointer"
                    value={valueSearch.tag}
                />
                <img src={arrowDownBlack} alt="arrowDownBlack" className="absolute top-[21px] right-[15px] cursor-pointer"/>
                {isHovered && 
                    <ModalTag 
                        tags={tags} 
                        setIsHovered={setIsHovered} 
                        handleTags={(value: string) => setValueSearch(prev => ({...prev, tag: value}))}
                    />
                }
            </div>
        </div>
    )
}

type ModalTagProps = {
    tags: string[];
    setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
    handleTags: (value: string) => void;
}

const ModalTag = (props: ModalTagProps) => {
    const {tags, setIsHovered, handleTags} = props;
    return (
        <div className="absolute -bottom-24 right-0 w-full rounded border bg-white max-h-24 overflow-y-scroll">
            <ul>
                <li 
                    className="cursor-pointer hover:bg-gray text-purple"
                    onClick={() => {
                        handleTags('');
                        setIsHovered(false)
                    }}
                >
                    All
                </li>
                {tags.map((tag, index) => (
                    <li 
                        key={`${tag}-${index}`} 
                        className="cursor-pointer hover:bg-gray text-purple"
                        onClick={() => {
                            handleTags(tag);
                            setIsHovered(false)
                        }}
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    )
}