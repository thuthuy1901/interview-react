import Button from "../../button";
import bannerHeader from "../../../assets/banner_header.png"

const BannerHome = () => {
    return (
        <section className="pt-[129px] w-full max-w-widthPage mx-auto">
            <div className="relative w-full">
                <div className="max-w-[641px]">
                    <h1 className="font-bold text-[80px] leading-[88px] text-header">
                        Save your data storage here.
                    </h1>
                    <p className="text-lg font-medium text-text max-w-[377.64px] mt-[49.69px] mb-[49.69px]">
                        Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
                    </p>
                    <Button title="Lear more" padding="px-[36.77px] pt-[15.9px] pb-[14.91px]"/>
                </div>
                <div className="absolute right-0 bottom-[-35.78px]">
                    <img src={bannerHeader} alt="bannerHeader" />
                </div>
            </div>
        </section>
    )
}

export default BannerHome;