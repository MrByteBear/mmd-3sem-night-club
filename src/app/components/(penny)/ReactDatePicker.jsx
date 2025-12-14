"use client";

import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import { da } from "date-fns/locale/da";
registerLocale("da", da);

// Use the DatePicker library to use in our BookingForm component
const DateInput = forwardRef(function DateInput(
  { value, onClick, error },
  ref,
) {
  return (
    <div className="relative w-full">
      <input
        readOnly
        ref={ref}
        onClick={onClick}
        value={value}
        placeholder="Select Date"
        className={`w-full border bg-transparent px-4 py-3 text-sm outline-red-400 ${
          error ? "border-red-500" : "border-white"
        }`}
      />
      <button
        type="button"
        onClick={onClick}
        className="absolute top-1/2 right-3 -translate-y-1/2"
      >
        {/* React icon to make the datepicker open when clicking the calendar */}
        <FaCalendarAlt className="h-4 w-4 text-gray-200" />
      </button>
    </div>
  );
});

export default function DatePickerField({ value, onChange, error }) {
  //   has the normal format that is later changed to make HTML compatible
  const displayValue = value ? format(value, "dd-MM-yyyy") : "";

  return (
    <div className="w-full">
      <DatePicker
        locale="da"
        selected={value}
        onChange={onChange}
        customInput={<DateInput error={error} />}
        // make the datepicker take full width
        wrapperClassName="w-full"
        // this makes the popup align under the input
        popperClassName="z-50"
        showTimeSelect
        dateFormat="Pp"
      />

      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
