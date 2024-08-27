import React, { useState } from "react";
import "./Filter.css";

const dates = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Now",
  },
  {
    id: 3,
    title: "Last month",
  },
  {
    id: 4,
    title: "Last year",
  },
];

const Filter = () => {
  const [selectedDate, setSelectedDate] = useState(1);

  function handleChangeDate(id) {
    setSelectedDate(id);
  }

  return (
    <aside className="proj-header-filter">
      <div className="filters">
        <div className="filter-date">
          <p>Date</p>
          <div className="dates">
            {dates.map((item) => (
              <button
                className={`${selectedDate === item.id ? "selected-date" : ""}`}
                key={item.id}
                onClick={() => handleChangeDate(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-lang">
          <p>Languages</p>
          <div className="languages desktop">
            <button>HTML</button>
            <button>CSS</button>
            <button>Delphi (Object Pascal)</button>
            <button>Python</button>
            <button>Javascript</button>
            {/* <button>ReactJs</button>
            <button>NodeJs</button>
            <button>ElectronJS</button>
            <button>FastAPI</button> */}
          </div>
          <select className="languages mobile">
            <option>HTML</option>
            <option>CSS</option>
            <option>Delphi (Object Pascal)</option>
            <option>Python</option>
            <option>Javascript</option>
            <option>ReactJs</option>
            <option>NodeJs</option>
            <option>FastAPI</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default Filter;
