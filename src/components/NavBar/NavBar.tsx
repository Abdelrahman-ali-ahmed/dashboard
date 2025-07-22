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
  const [nav, setNav] = useState(false); // Changed to false for mobile-first
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  return (
    <div
      className={`sticky top-0 flex flex-col ${
        nav ? "w-full md:w-1/5" : "w-max md:w-max"
      } min-h-screen text-white px-2 py-1 overflow-hidden transition-all duration-300 
        bg-gradient-to-tr from-[#810551] to-[#05454d]
        md:relative fixed z-50 ${!nav ? "transform -translate-x-full md:translate-x-0" : ""}
      }`}
    >
      <div
        className={`absolute right-2 top-0 z-10 cursor-pointer text-lg h-[35px] aspect-square flex justify-center items-center ${
          !nav ? "relative rotate-180" : ""
        }`}
        onClick={() => setNav((prev) => !prev)}
      >
        <FiChevronLeft className="menu-icon" />
      </div>

      <header
        className={`relative flex flex-col items-center justify-center gap-2 rounded-xl mb-2 transition-all duration-200 ${
          !nav ? "p-0 mt-2 bg-transparent" : "bg-white/40 p-6"
        } ${darkTheme && nav ? "bg-black/50" : ""}`}
      >
        <div className={`h-12 ${!nav ? "h-10" : ""} aspect-square rounded-full bg-gray-300`}>
          <img
            src="/public/pexels-photo-1839564.jpeg"
            alt="user-img"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        {nav && <span className="text-sm">Abdelrahman Ali </span>}
        {nav && (
          <span className="absolute bottom-0 w-4/5 h-[1px] bg-white/40"></span>
        )}
      </header>

      <Nav Icon={TbDashboard} title="Dashboard" nav={!nav} />
      <Nav Icon={VscGraphLine} title="Analytics" nav={!nav} />
      <Nav Icon={FiMessageSquare} title="Messages" nav={!nav} />
      <Nav Icon={AiOutlineUsergroupAdd} title="Followers" nav={!nav} />

      <div className="my-2 h-[1px] bg-white/40 w-4/5 mx-auto" />

      <Nav Icon={MdOutlineNotificationsActive} title="Notifications" nav={!nav} />
      <Nav Icon={RiAccountCircleLine} title="Following" nav={!nav} />
      <Nav Icon={AiOutlineDollarCircle} title="Earnings" nav={!nav} />
      <Nav Icon={TbFileUpload} title="Posts" nav={!nav} />
      <Nav Icon={BiMessageAltAdd} title="Message Requests" nav={!nav} />
      <Nav Icon={AiOutlineUserSwitch} title="Change Account" nav={!nav} />

      <div className="my-2 h-[1px] bg-white/40 w-4/5 mx-auto" />

      <Nav
        Icon={MdSwapHoriz}
        title={darkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
        onClick={() => dispatch(toggleTheme())}
        nav={!nav}
      />
      <Nav Icon={BiDotsHorizontalRounded} title="More details" nav={!nav} />

     <svg
  className="absolute left-0 top-0 -z-10 opacity-30 w-[250%] h-[300px]  fill-white"
  preserveAspectRatio="none"
  viewBox="0 0 1200 120"
  xmlns="http://www.w3.org/2000/svg"
>

   <path
    d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
    opacity=".25"
  />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5"
    />
    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />

</svg>

    </div>
  );
};

export default Navigation;
