import logo from "@assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";

const SideBar = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        await logout();
        navigate("/login");
    }

    return (
        <section className="bg-gray w-[320px] min-h-screen">
            <Link to="/">
                <img src={logo} alt="logo" className="pt-[30px] pl-[100px]"/>
            </Link>
            <ul className="text-header text-xl leading-8 pl-8 pt-10 space-y-2.5">
                <li>Posts</li>
                <li onClick={handleLogOut}>
                    Logout
                </li>
            </ul>
        </section>
    )
}

export default SideBar;