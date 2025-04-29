import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

const AccountSettingsPage = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user.name);

  const handleSave = () => {};

  return (
    <div className="p-4">
      <div>
        <h2 className="text-4xl font-bold">Account Settings</h2>
      </div>
      <div className="flex justify-between items-center w-5/6 mt-16">
        <div className="rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
          <FaRegUserCircle size={80} />
        </div>
        <div>
          <label htmlFor="name" className="block">
            User name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-64 border border-black"
          />
        </div>
        <div>
          <label htmlFor="name" className="block">
            Email
          </label>
          <input
            type="text"
            value={user.email}
            className="w-64 border border-black cursor-not-allowed"
            disabled
          />
        </div>
        <div>
          {/* <button
            onClick={handleSave}
            className="px-6 py-2 border-2 bg-white border-green-500 text-green-500 rounded-4xl font-semibold transition-all duration-300 hover:bg-green-700 hover:text-white"
          >
            Save
          </button> */}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold">Subscriptions</h2>
        <div className="w-full flex p-4 mt-4 rounded-2xl shadow-md bg-gradient-to-r from-white to-purple-400">
          <h2 className="text-purple-600 text-2xl mb-2 w-2/3 tracking-wider">
            Oops you don't have any active plans.{" "}
            <span className="text-purple-700 font-bold">Upgrade now!</span>
          </h2>
          <button className="px-6 py-2  bg-purple-800 rounded-2xl text-white">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
