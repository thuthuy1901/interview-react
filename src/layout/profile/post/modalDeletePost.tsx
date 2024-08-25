
type ModalDeletePostProps = {
    deletePost: () => Promise<void>
    handleClose: () => void;
}

const ModalDeletePost = (props: ModalDeletePostProps) => {
    const {deletePost, handleClose} = props;

    return (
        <section className="w-screen h-screen fixed top-0 right-0 bg-black bg-opacity-20 flex justify-center items-center">
            <div className="p-10 rounded-lg bg-white text-black w-full max-w-[440px] flex flex-col">
                <h3 className="font-bold text-3xl text-center">Add Post</h3>
                <div className="mt-3 flex justify-center gap-x-4">
                    <button 
                        className="px-3 py-2 rounded border text-black bg-gray"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button 
                        className="px-3 py-2 rounded border text-white bg-purple" 
                        onClick={deletePost}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ModalDeletePost;