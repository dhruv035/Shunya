import React, { useEffect } from "react";
import Menu from "@/components/menu";
import { Text } from "@chakra-ui/react";


const Carnival = () => {
  useEffect(() => {
    async function data() {
      const response = await fetch(
        "/api/calendar"
      );
      console.log(await response.json())
    }
    data();
  }, []);
  return (
    <div>
      <main className="flex-col grow-1 px-6 py-10 bg-black w-full h-[100vh]">
        <Menu />
        <div className="flex flex-col items-center mx-5">
          <Text className="text-[30px] md:text-[60px] text-amber-400 mb-10">
            Carnival
          </Text>
        </div>
      </main>
    </div>
  );
};
export default Carnival;
