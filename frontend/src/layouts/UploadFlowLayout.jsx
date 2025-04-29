import { useEffect, useState } from "react";
import logo from "../assets/QuesLogo_purple.png";
import { GoPlus, GoCopy } from "react-icons/go";
import { RxPencil1 } from "react-icons/rx";
import { RiVipDiamondLine } from "react-icons/ri";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaRegUserCircle,
} from "react-icons/fa";
import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { Link, Outlet, useNavigate, useParams } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const UploadFlowLayout = () => {
  const { projectId } = useParams();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const sidebarItems = [
    {
      title: "Add your Podcasts",
      icon: <GoPlus size={30} />,
      route: `/projects/${projectId}`,
    },
    {
      title: "Create & Repurpose",
      icon: <RxPencil1 size={30} />,
      route: `/projects/${projectId}/create`,
    },
    {
      title: "Podcast Widget",
      icon: <GoCopy size={30} />,
      route: `/projects/${projectId}/widget`,
    },
    {
      title: "Upgrade",
      icon: <RiVipDiamondLine size={30} />,
      route: `/projects/${projectId}/upgrade`,
    },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-white  transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-16" : "w-72"
        }`}
      >
        <div className="flex items-center justify-between p-4 ">
          {!isCollapsed && (
            <Link to={"/"}>
              <h1 className="text-xl font-bold">
                <img src={logo} alt="" />
              </h1>
            </Link>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded hover:bg-gray-200"
          >
            {/* Simple icon change */}
            {isCollapsed ? (
              <FaArrowAltCircleRight size={20} />
            ) : (
              <FaArrowAltCircleLeft size={20} />
            )}
          </button>
        </div>

        {/* Sidebar content */}
        <div className="p-4">
          {!isCollapsed && (
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li
                  key={item.title}
                  className="p-4 flex gap-2 items-center hover:font-bold hover:text-purple-800 hover:bg-purple-200 transition"
                >
                  <div>{item.icon}</div>
                  <Link to={item.route}>
                    <div className="cursor-pointer">{item.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="absolute bottom-0 p-4 w-72">
          {!isCollapsed && (
            <>
              <div className="flex items-center gap-4">
                <div>
                  <IoSettingsOutline size={16} />
                </div>
                <div className="text-gray-500 text-lg font-bold">Help</div>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex">
                <div className="rounded-full overflow-hidden border-3 border-purple-500 shadow-md">
                  <FaRegUserCircle size={50} />
                </div>
                <div className="px-4 flex flex-col">
                  <Link to={"/myaccount"}>
                    <div className="cursor-pointer">{user.name}</div>
                  </Link>
                  <div>{user.email}</div>
                </div>
              </div>
            </>
          )}
          {isCollapsed && <div className="flex justify-center"></div>}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <div className="h-16  flex items-center px-6 justify-between mr-10">
          <div className="text-lg font-semibold">Top Navbar</div>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <IoNotificationsOutline className="text-gray-800 text-xl" />
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <IoIosLogOut
                onClick={handleLogout}
                className="text-red-800 text-xl"
              />
            </div>
          </div>
        </div>

        {/* Main Children Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UploadFlowLayout;
