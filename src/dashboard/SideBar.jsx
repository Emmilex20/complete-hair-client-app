import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiTable,
  HiMenu,
} from "react-icons/hi";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const SideBar = () => {
  const { user } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Button to open the sidebar on small screens */}
      <div className="md:hidden flex items-center p-4">
        <button
          className="text-blue-600 p-2"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <HiMenu className="text-3xl" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-full bg-white shadow-md transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="User logo" className="w-12 h-12">
            <p>{user?.displayName || "User"}</p>
          </Sidebar.Logo>

          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                Upload Hair
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                Manage Hairs
              </Sidebar.Item>
              <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="/logout" icon={HiTable}>
                Log Out
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      {/* Overlay to close the sidebar on small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default SideBar;
