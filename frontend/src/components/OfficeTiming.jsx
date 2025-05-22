import { Clock, CalendarCheck, CalendarX } from 'lucide-react';

const timings = [
  {
    days: 'Mon - Fri',
    time: '09:00 - 21:00',
    closed: false,
  },
  {
    days: 'Sat',
    time: '09:00 - 21:00',
    closed: false,
  },
  {
    days: 'Sun',
    time: 'Closed',
    closed: true,
  },
];

export default function OfficeTiming() {
  return (
    <div className="pb-10 bg-white rounded-lg">
      <div className="flex items-center space-x-2 mb-6">
        {/* <Clock className="text-blue-500" /> */}
        <h2 className="text-xl font-medium text-gray-700 border-l-4 border-zinc-500 pl-4">Office Timing</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {timings.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-start p-4 rounded-md border ${
              item.closed ? 'bg-gray-100' : 'bg-gray-50'
            }`}
          >
            <div className="mr-3">
              {item.closed ? (
                <CalendarX className="text-red-500" />
              ) : (
                <CalendarCheck className="text-black" />
              )}
            </div>
            <div>
              <div className="text-base font-medium text-gray-900">
                {item.days}
              </div>
              <div
                className={`text-sm ${
                  item.closed ? 'text-red-600 font-medium' : 'text-gray-700'
                }`}
              >
                {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
