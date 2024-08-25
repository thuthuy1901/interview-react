import logo from "@assets/logo.png";
import Button from "../../../component/button";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import { IConMenu } from "@component/iconMenu";

const HeaderHome = () => {
    const {isAuthenticated, logout} = useAuth();
    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true}}
            className="pt-12 w-full xl:max-w-widthPage lg:max-w-[1024px] md:max-w-[736px] px-8 md:px-0 mx-auto"
        >
            <header className="flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                {!isAuthenticated ? 
                    <Link to="/login">
                        <Button title="Sign In" padding="xl:pl-[81px] xl:pt-[18px] xl:pr-[68.7px] xl:pb-[15.63px] px-[30px] py-4" />
                    </Link>:
                    <div className="space-x-8">
                        <Link to="/profile">
                            <Button title="Profile" padding="xl:pl-[81px] xl:pt-[18px] xl:pr-[68.7px] xl:pb-[15.63px] px-[30px] py-4" />
                        </Link>
                        <Button title="Logout" padding="xl:pl-[81px] xl:pt-[18px] xl:pr-[68.7px] xl:pb-[15.63px] px-[30px] py-4" onClick={logout}/>
                    </div>
                }
                <IConMenu className="lg:hidden size-6 cursor-pointer" />
            </header>
        </motion.section>
    )
}

export default HeaderHome;