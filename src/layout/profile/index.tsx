import { IConMenu } from "@component/iconMenu";
import Post from "./post";
import SideBar from "./sideBar";
import { useState } from "react";
import { useAuth } from "@context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        await logout();
        navigate("/login");
    }
    return (
        <div className="flex relative">
            <SideBar />
            <Post />
            <div className="top-10 left-10 absolute lg:hidden " onClick={() => setOpenMenu(!openMenu)}>
                <IConMenu className="size-6 cursor-pointer" />
                {openMenu && 
                    <ul 
                        className="border bg-white rounded cursor-pointer" 
                    >
                        <li onClick={() => navigate('/')} className="px-8 py-4 hover:bg-purple hover:text-white">Home</li>
                        <li onClick={handleLogOut} className="px-8 py-4 hover:bg-purple hover:text-white">Logout</li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default ProfilePage;