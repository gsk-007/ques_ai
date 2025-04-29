import brand from "../assets/QuesLogo_purple.png";
import { Outlet, useNavigate } from "react-router";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const ProjectCreationLayout = () => {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate("/myaccount");
  };
  return (
    <div>
      <header className=" p-8 flex justify-between items-center h-[18vh]">
        <div>
          <img className="h-[50px]" src={brand} alt="ques ai" />
        </div>
        <div className="flex">
          <div className="mr-3">
            <IoSettingsOutline
              className="cursor-pointer"
              onClick={handleSettingsClick}
              size={30}
            />
          </div>
          <div>
            <IoMdNotificationsOutline size={30} />
          </div>
        </div>
      </header>
      <main className="h-[82vh]">
        <Outlet />
      </main>
    </div>
  );
};

export default ProjectCreationLayout;
