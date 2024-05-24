import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = () => {
  return (
    <div className="flex border-b border-gray-300">
      <NavLink 
        to="/events" 
        exact
        className={({ isActive }) => 
          isActive 
            ? "px-4 py-2 text-green-700 border-b-2 border-green-700"
            : "px-4 py-2 text-gray-600"
        }
      >
        Overview
      </NavLink>
      <NavLink 
        to="/setting_event" 
        className={({ isActive }) => 
          isActive 
            ? "px-4 py-2 text-green-700 border-b-2 border-green-700"
            : "px-4 py-2 text-gray-600"
        }
      >
        Setting Event
      </NavLink>
      <NavLink 
        to="/report_event" 
        className={({ isActive }) => 
          isActive 
            ? "px-4 py-2 text-green-700 border-b-2 border-green-700"
            : "px-4 py-2 text-gray-600"
        }
      >
        Report
      </NavLink>
    </div>
  );
};

export default Tabs;
