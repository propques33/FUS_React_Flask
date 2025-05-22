import { FileText } from 'lucide-react';

const NotificationCard = ({ message, time }) => {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="mt-1">
        <FileText className="text-blue-600 w-5 h-5" />
      </div>
      <div>
        <p className="text-sm text-gray-700">{message}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
