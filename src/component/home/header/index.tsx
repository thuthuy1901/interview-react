import logo from "../../../assets/logo.png"
import Button from "../../button";

const HeaderHome = () => {
    return (
        <section className="pt-12 w-full max-w-widthPage mx-auto">
            <header className="flex justify-between items-center">
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                <Button title="Sign In" padding="pl-[81px] pt-[18px] pr-[68.7px] pb-[15.63px]"/>
            </header>
        </section>
    )
}

export default HeaderHome;