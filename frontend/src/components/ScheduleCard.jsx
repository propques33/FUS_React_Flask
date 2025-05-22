import { Calendar, Clock, Download } from "lucide-react";

const ScheduleCard = ({ title, questions, time, date, onDownload }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5   flex flex-col justify-between   transition">
      {/* Title & Questions */}
      <div>
       <div className="flex w-full justify-between items-">
       <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
          <p className="text-sm text-gray-600">{questions}</p>
        </div>

        <button
          onClick={onDownload}
          className="mt-1 inline-flex items-center md:gap-2 gap-1 self-start px-3 py-1.5 md:text-sm text-xs text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
        >
          <Download className="w-4 h-4" />
          <span className="md:block hidden">
          Invoice

          </span>
        </button>
       </div>

        {/* Time & Date */}
        <div className="flex items-center text-sm text-gray-500 mt-3 space-x-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>

        <button
          onClick={onDownload}
          className="mt-3 inline-flex items-center md:gap-2 gap-1 self-start px-3 py-1.5 md:text-sm text-xs text-zinc-700 bg-yellow-400 hover:bg-yellow-500 rounded-md transition"
        >
       Book Again
        </button>
      </div>

      {/* Download Button */}
    </div>
  );
};

export default ScheduleCard;
