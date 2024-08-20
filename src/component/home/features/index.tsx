import ListFeature from "./listFeature";

const FeaturesHome = () => {
    return (
        <section className="pt-[164.29px] w-full max-w-widthPage mx-auto flex flex-col items-center">
            <h2 className="text-header font-bold text-[40px] leading-[52px]">
                Features
            </h2>
            <p className="text-text font-medium text-lg max-w-[575.12px] text-center mt-[49.24px]">Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
            <div className="w-full mt-[68.94px] grid grid-cols-2 grid-rows-2">
                <ListFeature />
            </div>
        </section>
    )
}

export default FeaturesHome;