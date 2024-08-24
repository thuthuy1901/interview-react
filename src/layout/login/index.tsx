import logo from "@assets/logo.png";
import Button from "@component/button";
import { Link } from "react-router-dom";
import FormSignIn from "./formSignIn";

const LoginPage = () => {
    return (
        <section 
            className="pt-12 xl:max-w-widthPage lg:max-w-[1024px] md:max-w-[736px] px-8 md:px-0 mx-auto flex justify-center items-center relative w-screen h-screen"
        >
            <Link to="/">
                <img src={logo} alt="logo" className="absolute top-16 left-0"/>
            </Link>
            <FormSignIn />
        </section>
    )
}

export default LoginPage;