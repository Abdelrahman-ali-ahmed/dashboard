import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice"; // Adjust the path to your slice
import { logout as loginActionredux } from "../../redux/loginSlice";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiSettingsLine } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { HiOutlineMoon, HiOutlineLogout } from "react-icons/hi";
import{logout as logoutAction}from "../../AuthService/AuthService"

const Header = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  const changeTheme = () => dispatch(toggleTheme());

  const logout = async () => {
    try {
      await logoutAction();
      dispatch(loginActionredux());
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className={`w-full px-4 py-2 flex items-center justify-between shadow-md bg-transparent`}>
      {/* Search */}
      <div className="relative w-full max-w-sm">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-4 pr-10 border border-gray-500 rounded-full bg-transparent text-sm text-white dark:text-white placeholder-gray-300 focus:outline-none focus:border-[#0a6672]"
        />
        <BiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-5">
        <AiOutlineUser className="icon" />
        <TbMessages className="icon" />
        <IoAnalytics className="icon" />

        <div className="w-px h-6 bg-[#0a6672]" />

        <HiOutlineMoon className="icon" onClick={changeTheme} />
        <RiSettingsLine className="icon" />
        <HiOutlineLogout className="icon" onClick={logout} />

        <div className="w-px h-6 bg-[#0a6672]" />

        <div className="w-8 h-8 rounded-full overflow-hidden border border-[#0a6672]">
          <img
            src="/public/pexels-photo-1839564.jpeg"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

// Shared icon class
const iconClass = "text-[#d0d0d0] text-xl cursor-pointer hover:text-[#0a6672]";


export default Header;
