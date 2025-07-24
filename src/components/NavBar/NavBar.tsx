import Nav from "../NavItem/Nav";
import { FiChevronLeft, FiMessageSquare } from "react-icons/fi";
import { TbDashboard, TbFileUpload } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import {
  AiOutlineUsergroupAdd,
  AiOutlineDollarCircle,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { MdOutlineNotificationsActive, MdSwapHoriz } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { BiMessageAltAdd, BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";

const Navigation = () => {
  const [nav, setNav] = useState(true);
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  return (
    <aside
      className={`transition-all duration-300 fixed md:relative z-50 top-0 left-0 min-h-screen flex flex-col
      ${nav ? "w-56" : "w-16"} 
      bg-gradient-to-tr from-[#810551] to-[#05454d] text-white`}
    >
      {/* Toggle Button */}
      <div
        className="absolute right-2 top-2 cursor-pointer text-lg z-10"
        onClick={() => setNav((prev) => !prev)}
      >
        <FiChevronLeft className={`transition-transform ${!nav ? "rotate-180" : ""}`} />
      </div>

      {/* Profile Section */}
      <div
        className={`flex flex-col items-center justify-center mt-10 px-2 py-4 mb-4 transition-all duration-200 ${
          nav ? "gap-2" : "gap-0"
        }`}
      >
        <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="/public/pexels-photo-1839564.jpeg"
            alt="user-img"
            className="w-full h-full object-cover"
          />
        </div>
        {nav && <span className="text-sm mt-1">Abdelrahman Ali</span>}
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-1 px-2">
        <Nav Icon={TbDashboard} title="Dashboard" nav={!nav} />
        <Nav Icon={VscGraphLine} title="Analytics" nav={!nav} />
        <Nav Icon={FiMessageSquare} title="Messages" nav={!nav} />
        <Nav Icon={AiOutlineUsergroupAdd} title="Followers" nav={!nav} />

        <hr className="border-white/30 my-2" />

        <Nav Icon={MdOutlineNotificationsActive} title="Notifications" nav={!nav} />
        <Nav Icon={RiAccountCircleLine} title="Following" nav={!nav} />
        <Nav Icon={AiOutlineDollarCircle} title="Earnings" nav={!nav} />
        <Nav Icon={TbFileUpload} title="Posts" nav={!nav} />
        <Nav Icon={BiMessageAltAdd} title="Message Requests" nav={!nav} />
        <Nav Icon={AiOutlineUserSwitch} title="Change Account" nav={!nav} />

        <hr className="border-white/30 my-2" />

        <Nav
          Icon={MdSwapHoriz}
          title={darkTheme ? "Light Theme" : "Dark Theme"}
          onClick={() => dispatch(toggleTheme())}
          nav={!nav}
        />
        <Nav Icon={BiDotsHorizontalRounded} title="More details" nav={!nav} />
      </nav>
    </aside>
  );
};


export default Navigation;
