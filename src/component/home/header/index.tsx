import logo from "../../../assets/logo.png"
import Button from "../../button";
import { motion } from 'framer-motion';

const HeaderHome = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true}}
            className="pt-12 w-full xl:max-w-widthPage lg:max-w-[1024px] md:max-w-[736px] px-8 md:px-0 mx-auto"
        >
            <header className="flex justify-between items-center">
                <a href="#">
                <img src={logo} alt="logo" />
                </a>
                <Button title="Sign In" padding="xl:pl-[81px] xl:pt-[18px] xl:pr-[68.7px] xl:pb-[15.63px] px-[30px] py-4" />
                <IConMenu className="lg:hidden size-6 cursor-pointer" />
            </header>
        </motion.section>
    )
}

export default HeaderHome;

export const IConMenu = ({className}: {className: string}) => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
            </path>
        </svg>
    )
}