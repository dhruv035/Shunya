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

const oneDay = 1000 * 60 * 60 * 24;

const CalendarCarousel = ({ data }) => {
  const firstDate = data[0]?.start;
  const dateToday = new Date();
  const [current, setCurrent] = useState(dateToday);
  const [date, setDate] = useState(current.getDate());
  const [day, setDay] = useState(current.getDay());
  const [currentYear, setCurrentYear] = useState(current.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(current.getMonth());
  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [showData, setShowData] = useState();
  const [backDisabled, setBackDisabled] = useState(false);

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
   initial:{y:150,opacity:0,transition:{duration:0.5}},
   display:{y:0,opacity:1,transition:{duration:0.5}}
  }
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
    const timeStamp = current.getTime();
    const newTime = timeStamp + 1000 * 60 * 60 * 24 * 7;
    const newDate = new Date(newTime);
    setEndDate(getWeekendDate(newDate));
    setStartDate(getStartDate(newDate));
    setCurrent(newDate);
  };

  const handleBack = () => {
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
            onClick={handleForward}
            style={{
              background: "transparent",
            }}
            icon={<ArrowRightIcon boxSize={"4vw"} color="#C0D065" />}
          />
        </div>
      </div>
      <motion.div
        key={showData}
        initial={"initial"}
        animate={"display"}
        variants={carouselVariant}
        className="mt-4 self-center w-[90%] z-10"
      >
        {showData &&
          days.map((day, index) => {
            const filteredData = showData.filter((innerData) => {
              console.log("INNERDATA", innerData);
              const buff = index * oneDay;
              if (
                innerData.startDate.getTime() >= startDate.getTime() + buff &&
                innerData.startDate.getTime() <=
                  startDate.getTime() + buff + oneDay
              )
                return innerData;
            });
            console.log("InnerData for ", day, " is ", filteredData);
            if (filteredData.length > 0)
              return (
                <div className="flex flex-row w-full my-8">
                  <div className="flex text-[5vw] font-bold self-center ml-[6vw] text-gold2 w-1/3">{day}</div>

                  {filteredData.map((myEvent,index) => {
                    return (
                      <div key={index} className="flex flex-col ml-[10vw] items-start w-full">
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
