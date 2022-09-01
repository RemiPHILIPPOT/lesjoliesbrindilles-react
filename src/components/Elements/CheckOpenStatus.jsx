import React, { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";

const CheckOpenStatus = () => {
  // Check time and day of the week to see if we are open or closed and display the appropriate message
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const today = new Date();
    const day = today.getDay();
    const hour = today.getHours();
    const openHour = 10;
    const openHour2 = 15;
    const closeHour = 12.3;
    const closeHour2 = 19;
    const closeSunday = 13;

    if (day === 1) {
      setIsOpen(false);
    } else if (hour >= openHour && hour < closeHour) {
      setIsOpen(true);
    } else if (hour >= openHour2 && hour < closeHour2) {
      setIsOpen(true);
    } else if (day === 0 && hour >= openHour && hour < closeSunday) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  return (
    <div>
      {isOpen ? (
        <Tooltip title="Ouvert en ce moment">
          <p>🟢</p>
        </Tooltip>
      ) : (
        <Tooltip title="Fermé en ce moment">
          <p>🔴</p>
        </Tooltip>
      )}
    </div>
  );
};

export default CheckOpenStatus;

// useEffect (() => {

//   const today = new Date();
//   const day = today.getDay();
//   const time = today.getHours();
//   const open = 10;
//   const open2 = 15;
//   const close = 12.3;
//   const close2 = 19;
//   const closeSunday = 13;
//   const closed = "🔴";
//   const openMessage = "🟢";

//   if (day === 1 || day === 6) {
//     return  <p>{closed}</p>;
//   } else if (time >= open && time < close) {
//     return <p>{openMessage}</p>;
//   } else if (time >= open2 && time < close2) {
//     return <p>{openMessage}</p>;
//   } else if (day === 0 && time >= open && time < closeSunday) {
//     return <p>{openMessage}</p>;
//   } else {
//     return <p>{closed}</p>;
//   }
// };}, [isOpen]);
