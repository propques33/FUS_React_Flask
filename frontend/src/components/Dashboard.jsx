import { UserCheck, CheckCircle2, BadgeDollarSign } from "lucide-react";
import NotificationCard from "../components/NotificationCard.jsx";
import ScheduleCard from "../components/ScheduleCard.jsx";
import Sidebar from "../components/Sidebar.jsx";
import clock from "../assets/dashboard/clock.webp";
import coins from "../assets/dashboard/coins.webp";
import booking from "../assets/dashboard/booking.webp";
import WorkspaceCard from "./WorkspaceCard.jsx";
import {
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  Users,
  Train,
  Star,
  ShieldCheck,
  Plus,
} from "lucide-react";
import cc3 from "../assets/cc3.png";
import useTicker from '../hooks/useTicker';


const Dashboard = () => {
    const currentTime = useTicker();

  const sample = {
    title: "Awfis - Allied House",
    location: "Vasant Kunj, Delhi",
    hours: "Open Now, 08:00 to 20:00",
    rating: "4.4",
    reviews: "92",
    image: cc3,
    services: ["Dedicated Desks", "Private Cabins", "Managed Office"],
    features: [
      { icon: <Users size={12} />, label: "Meeting Rooms" },
      { icon: <ShieldCheck size={12} />, label: "Assured Security" },
      { icon: <Train size={12} />, label: "Metro Nearby" },
    ],
    price: "10,999",
  };

  return (
    <div className="flex bg-gray-50">
      <div>
        <Sidebar />
      </div>
      <div className="md:pt-16 pt-20 max-w-7xl  ml-10">
        <div className="flex-1 md:p-6 px-4 md:px-0  overflow-auto">
          {/* Header */}
          <div className="flex justify-between ">
            <div className="mb-6">
              <h1 className="text-3xl font-medium">Hello, Harsh D. Rao 👋</h1>
              <p className="text-sm text-gray-500 mt-1">
                Welcome back! Here's what's happening today.
              </p>
            </div>
           
          </div>

          {/* Profile + Verification + Payment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Card 1 */}
            <div
              className="rounded-xl px-4 py-6 text-white relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #00c6ff, #0072ff)",
              }}
            >
              <div className="flex justify-between items-center mb-2"></div>
              <div className="flex items-center gap-2 mb-2">
                <div>
                  <h4 className="text-lg font-semibold">Total Bookings</h4>
                  <p className="text-xs">in FUS</p>
                </div>
              </div>

              <p className="text-xl font-semibold  ">60</p>
              <img
                src={booking}
                alt="Character"
                className="absolute -bottom-4 -right-4 w-32 rounded-full"
              />
            </div>

            {/* Card 2 */}
            <div
              className="rounded-xl px-4 py-6 text-white relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #a770ef, #cf8bf3)",
              }}
            >
              <div className="flex justify-between items-center mb-2"></div>
              <div className="flex items-center gap-2 mb-2">
                {/* <img
                  src={clock}
                  alt="Hearthstone"
                  className="w-8 "
                /> */}
                <div>
                  <h4 className="text-lg font-semibold">Total Hours</h4>
                  <p className="text-xs">in Space</p>
                </div>
              </div>

              <p className="text-xl font-semibold  ">10:30:00 Hours</p>

              <img
                src={clock}
                alt="Character"
                className="absolute -bottom-10 -right-16 w-60 opacity-100"
              />
            </div>

            {/* Card 3 */}
            <div
              className="rounded-xl px-4 py-6 text-white relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #00d2ff, #3a7bd5)",
              }}
            >
              <div className="flex justify-between items-center mb-2"></div>
              <div className="flex items-center gap-2 mb-2">
                <div>
                  <h4 className="text-lg font-semibold">Total Points </h4>
                  <p className="text-xs">in LoL Mobile</p>
                </div>
              </div>

              <p className=" mt-1">40000</p>
              <img
                src={coins}
                alt="Character"
                className="absolute -bottom-10 -right-4 w-42 opacit"
              />
            </div>
          </div>

          {/* Notifications + Map + Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            {/* Notifications */}
            <div className="col-span-1 bg-white p-4 rounded-lg shadow">
              <h3 className="font- text-lg mb-4">Past Bookings</h3>
             <div className="flex flex-col gap-4">
             <ScheduleCard
                jobId="68416"
                title="Cubispace"
                questions="Meeting Room"
                time="4:30 PM"
                date="Friday | Nov 23 2019"
              />
              <ScheduleCard
                jobId="68417"
                title="Workdesq"
                questions="Day Pass"
                time="4:30 PM"
                date="Monday | Nov 23 2019"
              />
             </div>
            </div>

            {/* Map + Location Stats */}
            <div className="col-span-2 bg-white p-4 rounded-lg shadow order-2 md:order-0">
              <div className="flex justify-between items-center mb-4">
                <h3 className=" text-lg">Latest Booking</h3>
                <a href="#" className="text-blue-600 text-sm">
                  View Full Report
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <WorkspaceCard data={sample} />
                <WorkspaceCard data={sample} />
              </div>
              {/* <div className="w-full h-48 mt-4 bg-blue-100 rounded-lg mb-4 flex flex-col items-center justify-center">
                
                <div className="w-full h-full">
                  {" "}
                  <iframe
                    className="w-full h-full rounded-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7661153930503!2d80.94388567543942!3d26.91091687664818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957732a46274b%3A0xe09917f505f98e8f!2sCubispace!5e0!3m2!1sen!2sin!4v1747381073508!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div> */}
            </div>
          </div>

          {/* Upcoming Schedules */}
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
