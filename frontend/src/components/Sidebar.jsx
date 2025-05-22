import { User, CheckCircle, FileText } from 'lucide-react';

const Sidebar = () => (
  <>
    {/* Desktop Sidebar */}
    <div className="hidden md:flex w-64 pt-24 h-screen bg-blue-500 text-white flex-col p-4">
      <div className="text-center mb-6">
        <img src="/avatar.png" className="mx-auto rounded-full w-16 h-16" />
        <p className="mt-2 font-semibold">Harsh D. Rao</p>
        <p className="text-sm">harsh@gmail.com</p>
      </div>
      <nav className="space-y-4">
        <NavItem icon={<User />} label="Dashboard" active />
        <NavItem icon={<CheckCircle />} label="Profile" />
        <NavItem icon={<FileText />} label="Logout" />
      </nav>
    </div>

    {/* Mobile Bottom Nav */}
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-blue-500 text-white flex justify-around items-center h-16 md:hidden">
      <BottomNavItem icon={<User />} label="Dashboard" active />
      <BottomNavItem icon={<CheckCircle />} label="Profile" />
      <BottomNavItem icon={<FileText />} label="Logout" />
    </div>
  </>
);

const NavItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer ${
      active ? 'bg-white text-blue-800' : 'hover:bg-blue-700'
    }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

const BottomNavItem = ({ icon, label, active }) => (
  <div
    className={`flex flex-col items-center text-xs ${
      active ? 'text-yellow-300' : 'text-white'
    }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

export default Sidebar;
