import Post from "./post";
import SideBar from "./sideBar";

const ProfilePage = () => {
    return (
        <div className="flex">
            <SideBar />
            <Post />
        </div>
    )
}

export default ProfilePage;