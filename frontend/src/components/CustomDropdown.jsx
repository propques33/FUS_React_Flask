import { ChevronDown } from "lucide-react";

const CustomDropdown = ({ label, value, options, onChange }) => {
  return (
    <div className="relative min-w-[120px] sm:min-w-[180px] shrink-0">
      <label className="md:text-xs text-[0.6rem] text-gray-500 absolute left-3  top-1 pointer-events-none">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full md:pt-5 pt-4 pb-2 px-3 border md:text-sm text-xs rounded-md bg-gray-50 border-blue-600 text-gray-800 font-medium focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" size={16} />
    </div>
  );
};

export default CustomDropdown;
