type PaginationProps = {
    numberPage?: number;
    currentPage: number;
    handleChangeTab: (tab: number) => Promise<void>;
}

const Pagination = (props: PaginationProps) => {
    const {numberPage = 1, currentPage, handleChangeTab} = props;
    return (
        <div className="mt-[26px] flex justify-end">
            {Array.from({ length: numberPage }, (_, index) => (
                <div 
                    key={index} 
                    className={`w-fit py-3 px-4 border border-black cursor-pointer ${currentPage === index + 1 ? 'bg-purple text-white' : 'bg-gray text-black'}`}
                    onClick={() => handleChangeTab(index +1)}
                >
                    {index + 1}
                </div>
            ))}
        </div>
    )
}

export default Pagination;