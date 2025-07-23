import { useState } from "react";
import { useSelector } from "react-redux";
import {
  RiChat1Line, RiToolsLine, RiChat3Line, RiTwitterLine,
  RiMailSettingsLine, RiSettingsLine, RiFolderSettingsFill,
  RiFileSettingsLine, RiListSettingsLine, RiUserSettingsLine
} from "react-icons/ri";
import {
  AiOutlineUsergroupAdd, AiOutlineLike,
  AiOutlineEdit, AiOutlineUserSwitch
} from "react-icons/ai";
import { IoCashOutline, IoSettingsOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import Card from "../components/Card/Card";
import Analytics from "../components/Analytics/Analytics";
import img from "/public/illustration.png";

const Data = () => {
  const DarkTheme = useSelector((state) => state.theme.darkTheme);
  const [value_i] = useState(Math.floor(Math.random() * 100));
  const [value_i_offset] = useState(315 - (value_i / 100) * 315);
  const [value_ii] = useState(Math.floor(Math.random() * 100));
  const [value_ii_offset] = useState(315 - (value_ii / 100) * 315);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ${DarkTheme ? 'dark' : ''}`}>
      
      {/* Notifications Box */}
      <div className="relative col-span-2 flex flex-col items-center justify-center bg-gradient-to-br from-[#00464e] to-[#810551] p-4 rounded-xl overflow-hidden h-[130px]">
        <FiSettings className="absolute top-3 left-3 text-white text-xl" />
        <h1 className="text-white/90 text-sm font-medium">Current Notifications</h1>
        <div className="w-[35%] h-px bg-white/50 my-2" />
        <div className="flex gap-4 px-4 py-2 rounded-full bg-white/25 text-white">
          {Array.from({ length: 5 }).map((_, i) => (
            <RiChat1Line key={i} />
          ))}
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="relative col-span-2 flex items-center justify-around bg-gradient-to-br from-[#00464e] to-[#810551] p-4 rounded-xl overflow-hidden h-[130px]">
        <Card Icon={AiOutlineUsergroupAdd} title="Followers" value="None :)" />
        <Card Icon={RiChat3Line} title="Messages" value="+ 0" />
        <Card Icon={AiOutlineLike} title="Likes" value="+ 0" />
        <Card Icon={IoCashOutline} title="Earnings" value="$ 0.0" />
      </div>

      {/* Section Title */}
      <span className="text-gray-400 text-sm col-span-4">Brief Overview</span>

      {/* Analytics Charts */}
      {[<Analytics chart_i />, <Analytics chart_ii />, <Analytics chart_iii />, <Analytics title="New Followers" value="+ 0" illustration={img} />].map((chart, i) => (
        <div key={i} className="bg-gradient-to-br from-[#00464e] to-[#810551] rounded-xl p-4 w-full h-[300px] flex items-center justify-center">
          {chart}
        </div>
      ))}

      {/* Section Title */}
      <span className="text-gray-400 text-sm col-span-4">Analytic Tools</span>

      {/* Tools Sidebar */}
      <div className="col-span-4 md:col-span-1 row-span-3 bg-gradient-to-br from-[#00464e] to-[#810551] rounded-xl p-4 flex flex-col gap-4">
        
        <div>
          <span className="text-white/80 text-xs mb-2 block">Frequently Used</span>
          <div className="flex flex-wrap gap-3">
            {[RiToolsLine, IoSettingsOutline, AiOutlineUsergroupAdd, RiMailSettingsLine, RiListSettingsLine].map((Icon, i) => (
              <Card key={i} Icon={Icon} />
            ))}
          </div>
        </div>

        <div className="h-px bg-white/50 mx-auto" />

        <div>
          <span className="text-white/80 text-xs mb-2 block">More Tools</span>
          <div className="flex flex-wrap gap-3">
            {[RiUserSettingsLine, RiToolsLine, AiOutlineUsergroupAdd, RiListSettingsLine, RiMailSettingsLine].map((Icon, i) => (
              <Card key={i} Icon={Icon} />
            ))}
          </div>
        </div>

        <div className="h-px bg-white/50 mx-auto" />

        <div>
          <span className="text-white/80 text-xs mb-2 block">Advanced Tools</span>
          <div className="flex flex-wrap gap-3">
            {[RiFolderSettingsFill, RiFileSettingsLine, RiSettingsLine].map((Icon, i) => (
              <Card key={i} Icon={Icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
