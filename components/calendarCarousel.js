import React, { useState, useEffect } from "react";
import CircleIcon from "./circleIcon";
import { Text } from "@chakra-ui/react";
import { IconButton, filter } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const leapyear = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const monthToStringShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const monthToString = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
 ];

const oneDay = 1000 * 60 * 60 * 24;

const CalendarCarousel = ({ data }) => {
  const dateToday = new Date();

  const [start,setStart]=useState(0)
  const [current, setCurrent] = useState(dateToday);
  const [currentYear, setCurrentYear] = useState(current.getFullYear());
  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [showData, setShowData] = useState();
  const [backDisabled, setBackDisabled] = useState(false);
  const [forwardDisabled, setForwardDisabled] = useState(false);
  const feb = leapyear(currentYear) ? 29 : 28;
  const months = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  useEffect(() => {
    const end = getWeekendDate(current, "end");
    const start = getStartDate(current);
    setEndDate(end);
    setStartDate(start);
  }, []);

  useEffect(() => {
    if (!endDate) return;
    const filteredData = data.filter(
      (a) => a.startDate > current && a.startDate < endDate
    );
    setShowData(filteredData);
    console.log("FILTERED DATA IS", filteredData);

    if (dateToday > startDate) {
      setBackDisabled(true);
    } else setBackDisabled(false);

    if (data[data.length - 1].startDate < endDate) {
      setForwardDisabled(true);
    } else {
      setForwardDisabled(false);
    }
  }, [endDate, startDate]);
  const getWeekendDate = (currentDate, time) => {
    let fDate = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let fDay = currentDate.getDay();
    let weekend = 7 - fDay;
    let end;
    if (fDay === 0) end = currentDate;
    else if (months[month] >= fDate + weekend) {
      let aDate = new Date(year + "-" + (month + 1) + "-" + (fDate + weekend));
      end = aDate;
    } else {
      const diff = fDate + weekend - months[month];
      let aDate;
      if (month === 11) {
        aDate = new Date(year + 1 + "-" + 1 + "-" + diff);
        end = aDate;
      } else {
        aDate = new Date(year + "-" + (month + 2) + "-" + diff);
        end = aDate;
      }
    }

    end.setHours(23);
    end.setMinutes(59);
    end.setSeconds(59);
    return end;
  };
  const carouselVariant = {
    initial: { y: 150, opacity: 0, transition: { duration: 0.5 } },
    display: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  const getStartDate = (currentDate) => {
    let fDate = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let fDay = currentDate.getDay() === 0 ? 7 : currentDate.getDay() - 1;
    let start;

    if (fDate < fDay) {
      if (month === 0) {
        start = new Date(
          year - 1 + "-" + 12 + "-" + (months[11] + fDate - fDay)
        );
      } else {
        start = new Date(
          year + "-" + month + "-" + (months[month - 1] + fDate - fDay)
        );
      }
    } else {
      start = new Date(year + "-" + (month + 1) + "-" + (fDate - fDay));
    }
    start.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);
    return start;
  };

  const handleForward = () => {
   if(forwardDisabled)
   return;
    const timeStamp = current.getTime();
    const newTime = timeStamp + 1000 * 60 * 60 * 24 * 7;
    const newDate = new Date(newTime);
    setEndDate(getWeekendDate(newDate));
    setStartDate(getStartDate(newDate));
    setCurrent(newDate);
  };

  const handleBack = () => {
   if(backDisabled)
   return;
    const timeStamp = current.getTime();
    const newTime = timeStamp - 1000 * 60 * 60 * 24 * 7;
    const newDate = new Date(newTime);
    setEndDate(getWeekendDate(newDate));
    setStartDate(getStartDate(newDate));
    setCurrent(newDate);
  };
  return (
    <>
      <div className="flex flex-col items-center z-10">
        <div className="flex flex-row items-center w-[90%] justify-center ">
          <IconButton
            className="fixed z-[100] bg-transparent "
            aria-label="Back-Icon"
            isDisabled={backDisabled}
            onClick={handleBack}
            style={{
              background: "transparent",
            }}
            icon={
              <ArrowLeftIcon
                boxSize={"4vw"}
                color={backDisabled ? "ffffff" : "#C0D065"}
              />
            }
          />
          {startDate && endDate && (
            <div className=" text-amber-200 text-center text-[6vw] w-3/4">
              {startDate.getDate() +
                " " +
                monthToStringShort[startDate.getMonth()] +
                " - " +
                endDate.getDate() +
                " " +
                monthToStringShort[endDate.getMonth()]}
            </div>
          )}
          <IconButton
            className="fixed z-[100] bg-transparent"
            aria-label="Back-Icon"
            isDisabled={forwardDisabled}
            onClick={handleForward}
            style={{
              background: "transparent",
            }}
            icon={
              <ArrowRightIcon
                boxSize={"4vw"}
                color={forwardDisabled ? "ffffff" : "#C0D065"}
              />
            }
          />
        </div>
      </div>
      <motion.div
         onTouchStart={(e)=>setStart(e.changedTouches[0].clientX)}
         onTouchEnd={(e)=>{
            if(e.changedTouches[0].clientX>start){
               handleBack();
            }
            else{
               handleForward();
            }
            setStart(0)
         }}
         draggable="true"
        key={showData}
        initial={"initial"}
        animate={"display"}
        variants={carouselVariant}
        className="flex flex-col mt-4 self-center w-[90%] z-10 h-max"
      >
        {showData &&
          days.map((day, index) => {
            const filteredData = showData.filter((innerData) => {
              const buff = index * oneDay;
              if (
                innerData.startDate.getTime() >= startDate.getTime() + buff &&
                innerData.startDate.getTime() <=
                  startDate.getTime() + buff + oneDay
              )
                return innerData;
            });
            const month = startDate.getMonth();
            const date = startDate.getDate();
            let effectiveDate;
            let effectiveMonth;
            if (date + index > months[month]) {
              effectiveDate = date + index - months[month];
              effectiveMonth = month + 1;
            } else {
              effectiveDate = date + index;
              effectiveMonth = month;
            }
            let prefix;
            switch (effectiveDate % 10) {
              default:
                prefix = "th";
                break;
              case 1:
                if (Math.floor(effectiveDate / 10) !== 1) prefix = "st";
                else prefix = "th";
                break;
              case 2:
                prefix = "2nd";
                break;
              case 3:
                prefix = "3rd";
                break;
            }
            if (filteredData.length > 0)
              return (
                <div key={index} className="flex flex-row w-full my-8">
                  <div className="flex flex-col text-[5vw] font-bold self-center ml-[6vw] text-gold2 w-1/3">
                    {day}
                    <p className="text-[3vw] text-center">
                       {monthToStringShort[effectiveMonth]}
                     
                     {" "+effectiveDate}<sup>{prefix}</sup>
                    </p>
                  </div>

                  {filteredData.map((myEvent, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col ml-[10vw] items-start w-full"
                      >
                        <div className="flex w-3/4 text-bold text-[5vw] text-center justify-center text-limeDark w-full font-bold">
                          {myEvent.summary}
                        </div>
                        <div className="text-[4vw] text-center text-amber-400 w-full">
                          {myEvent.startDate.getHours() === 0
                            ? 12
                            : myEvent.startDate.getHours() > 12
                            ? myEvent.startDate.getHours() - 12
                            : myEvent.startDate.getHours()}
                          :
                          {(myEvent.startDate.getMinutes() < 10 ? "0" : "") +
                            myEvent.startDate.getMinutes()}
                          {" " +
                            (myEvent.startDate.getHours() > 11 ? "pm" : "am") +
                            " - "}
                          {myEvent.endDate.getHours() === 0
                            ? 12
                            : myEvent.endDate.getHours() > 12
                            ? myEvent.endDate.getHours() - 12
                            : myEvent.endDate.getHours()}
                          :
                          {(myEvent.endDate.getMinutes() < 10 ? "0" : "") +
                            myEvent.startDate.getMinutes()}
                          {" " +
                            (myEvent.endDate.getHours() > 11 ? "pm" : "am")}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
          })}
      </motion.div>
    </>
  );
};
export default CalendarCarousel;
