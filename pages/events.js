import React, { useEffect, useState } from "react";
import Menu from "@/components/menu";
import { Text } from "@chakra-ui/react";
import Logo from "@/components/logo";
import CircleIcon from "@/components/circleIcon";
import CalendarCarousel from "@/components/calendarCarousel";
function parseICalDate(date) {
  const year = date.substr(0, 4);
  const month = parseInt(date.substr(4, 2), 10) - 1;
  const day = date.substr(6, 2);
  const hour = date.substr(9, 2);
  const minute = date.substr(11, 2);
  const second = date.substr(13, 2);
  return new Date(Date.UTC(year, month, day, hour, minute, second));
}

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const month = [
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

const Event = () => {
  const abc = new Date(1673531199000);
  console.log("Init", abc);
  const [current, setCurrent] = useState(abc);
  const next = new Date(abc.setDate(abc.getDate() + (7 - abc.getDay())));
  console.log("Upcoming", next);
  const [data, setData] = useState([]);
  console.log("STart", abc);
  useEffect(() => {
    async function data() {
      const response = await fetch("/api/calendar");
      const data = await response.json();
      var arr = Object.values(data);
      arr.forEach((element, index) => {
        element.startDate = parseICalDate(element.startDate);
      });
      const newData = arr
        .filter((a) => a.startDate > abc)
        .sort((a, b) => {
          return new Date(a.startDate) - new Date(b.startDate);
        });

      setData(newData);
    }
    data();
  }, []);
  useEffect(() => {
    console.log("aa", abc);
  }, [abc]);
  console.log(data);
  return (
    <div>
      <Menu />
      <div className="flex-col grow-1 px-6 py-10 bg-black w-[100vw] min-h-[100vh] h-max overflow-clip">
        <Logo />
        <div className="flex flex-col items-center mx-5">
          <Text className="text-[30px] md:text-[60px] text-amber-400 mb-10">
            Events
          </Text>
          <CalendarCarousel data={data}/>
          <div>
            <Text>Upcoming Events</Text>
            {data.map((element, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <div className="flex flex-row">
                    <Text className="mr-2 text-[16px]">
                      {month[element.startDate.getMonth()]}
                    </Text>
                    <Text className="mr-2 text-[16px]">
                      {element.startDate.getDate()}
                    </Text>
                    <Text className="mr-2 text-[16px]">
                      {weekday[element.startDate.getDay()]}
                    </Text>
                    <Text className="text-[16px]">
                      {(element.startDate.getHours() > 12
                        ? element.startDate.getHours() - 12
                        : element.startDate.getHours()) +
                        ":" +
                        (element.startDate.getMinutes() === 0
                          ? "00"
                          : element.startDate.getMinutes()) +
                        (element.startDate.getHours() >= 12 ? "pm" : "am")}
                    </Text>
                  </div>
                  <Text className="mb-4 text-[16px]">{element.summary}</Text>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
