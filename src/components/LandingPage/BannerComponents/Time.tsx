import React from "react";

export default function TimeSelector() {
  return (
    <div className="rounded-lg text-xs">
      <div className="flex">
        <select
          name="hours"
          className="bg-transparent appearance-none outline-none"
        >
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">10</option>
          <option value="12">12</option>
        </select>
        <span className="mr-1">:</span>
        <select
          name="minutes"
          className="bg-transparent appearance-none outline-none mr-1"
        >
          <option value="0">00</option>
          <option value="30">30</option>
        </select>
        <select
          name="ampm"
          className="bg-transparent appearance-none outline-none"
        >
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
      </div>
    </div>
  );
}
