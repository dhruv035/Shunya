import React, { useEffect, useState } from "react";
import Menu from "@/components/menu";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
  //console.log("Init", abc);
  const [current, setCurrent] = useState(abc);
  const next = new Date(abc.setDate(abc.getDate() + (7 - abc.getDay())));
  //console.log("Upcoming", next);
  const [data, setData] = useState([]);
  //console.log("STart", abc);
  useEffect(() => {
    async function data() {
      const response = await fetch("/api/calendar");
      const data = await response.json();
      var arr = Object.values(data);
      arr.forEach((element, index) => {
        element.startDate = parseICalDate(element.startDate);
        element.endDate = parseICalDate(element.endDate);
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
    //console.log("aa", abc);
  }, [abc]);
  //console.log(data);
  return (
    <div>
      <Menu />
      <LazyLoadImage
        className="object-cover contrast-110 h-[100vh] w-[100vw] brightness-10 opacity-40 z-[-40]"
        src={"/images/bg-events.jpg"}
      ></LazyLoadImage>
      <div className="flex-col grow-1 px-6 py-10 bg-black w-[100vw] min-h-[100vh] mt-[-100vh] h-max overflow-clip">
        <Logo />
        <div className="flex flex-col">
          <Text className="text-[30px] self-center md:text-[60px] text-amber-400 mt-16 mb-10">
            Upcoming Events
          </Text>
          {data.length > 0 && <CalendarCarousel data={data} />}
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Event;
