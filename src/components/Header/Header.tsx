import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice"; // Adjust the path to your slice

import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiSettingsLine } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { HiOutlineMoon, HiOutlineLogout } from "react-icons/hi";

const Header = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  function changeTheme() {
    dispatch(toggleTheme());
  }

  return (
    <header className={`${darkTheme ? "dark" : ""} relative flex items-center justify-between p-2`}>
      {/* Search Bar */}
      <div className="relative w-1/4 flex items-center">
        <input 
          type="text" 
          placeholder="search..." 
          className="peer py-2 px-4 border border-[#525252] rounded-full flex-1 bg-transparent text-base focus:outline-none focus:border-[#0a6672] focus:placeholder-[#0a6672] dark:text-white"
        />
        <BiSearch className="absolute right-2 text-[18px] text-[#525252] peer-focus:text-[#0a6672]" />
      </div>

      {/* Tools */}
      <div className="relative flex items-center gap-[25px]">
        <AiOutlineUser className="text-[#525252] text-[20px] cursor-pointer hover:text-[#0a6672]" />
        <TbMessages className="text-[#525252] text-[20px] cursor-pointer hover:text-[#0a6672]" />
        <IoAnalytics className="text-[#525252] text-[20px] cursor-pointer hover:text-[#0a6672]" />

        <div className="bg-[#0a6672] w-px rounded-full self-stretch"></div>

        <HiOutlineMoon 
          className="text-[#525252] text-[20px] cursor-pointer hover:text-[#0a6672]" 
          onClick={changeTheme} 
        />
        <RiSettingsLine className="text-[#525252] text-[20px] cursor-pointer hover:text-[#0a6672]" />
        <HiOutlineLogout className="text-[#525252] text-[20px] cursor-pointer hover:text-[#0a6672]" />

        <div className="bg-[#0a6672] w-px rounded-full self-stretch"></div>

        {/* User profile */}
        <div className="relative h-[30px] aspect-square rounded-full border border-[#0a6672] bg-gray-300 cursor-pointer active:scale-[0.97]">
          <img 
            src="/public/pexels-photo-1839564.jpeg" 
            alt="User Profile" 
            className="w-full h-full object-cover rounded-full" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
