import React, { useState, useEffect } from "react";
import CircleIcon from "./circleIcon";
const launchDate = new Date("July 1, 1999, 12:00:00");

const leapyear = (year) => {
   return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

const CalendarCarousel = ({ data }) => {

   var months;
   const dateToday = new Date();
   const firstDate = data[0]?.start;
   const [month,setMonth]=useState();
   const [date,setDate]=useState();
   
   var pages = 0;
   var timeskip
   if (firstDate?.startDate.getDay()) {
      timeskip = 7 - firstDate.startDate.getDay();
      var feb=leapyear(firstDate.getYear())?29:28
      months=[31,feb,31,30,31,30,31,31,30,31,30,31]
      if(firstDate.getDate()+timeskip>months[firstDate.getMonth]){
      }
   }
   console.log("here", pages)
   return (
      <>
         <CircleIcon color={"red.400"} />
      </>
   );
};
export default CalendarCarousel;
