import React from "react";
import Menu from "@/components/menu";
import { Text } from "@chakra-ui/react";
const Ecstatic = () => {
  return (
    <div>
      <main className="flex-col grow-1 px-6 py-10 bg-black w-full h-[100vh]">
        <Menu/>
          <div className="flex flex-col items-center mx-5">
            <Text className="text-[30px] md:text-[60px] text-amber-400 mb-10">
              Ecstatic Dance
            </Text>
          </div>
      </main>
    </div>
  );
};
export default Ecstatic;
