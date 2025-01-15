import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Dates() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="bg-slate-950">
      <h3>DUE DATE</h3>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        dateFormat="Pp"
      />
    </div>
  );
}

export default Dates;
