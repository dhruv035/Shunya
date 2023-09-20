import React, { useRef, useState } from "react";
import { delay, motion } from "framer-motion";
import {
  Input,
  Text,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import Menu from "@/components/menu";
const Contact = () => {
  const ref = useRef();
  const [opacity, setOpacity] = useState(0.2);
  return (
    <main className="flex-col grow-1 px-6 py-10 bg-black w-full h-[100vh]">
      {/*<motion.img
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={"/banyan.jpg"}
        style={{
          opacity: 1,
          filter: "grayscale(100%)",
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
      />*/}
      <Menu />
      <div className="flex flex-col items-center mx-5">
        <Text className="text-[30px] md:text-[60px] text-amber-400 mb-10">Contact Us</Text>

        <div className="flex flex-col self-start">
          <FormLabel fontSize={"20px"}>Name</FormLabel>
          <Input
            className="mb-6"
            width={[0.7, "400px"]}
            variant="flushed"
            textColor="#fbbf24"
            placeholder="Enter Name..."
            _placeholder={{ opacity: 0.2, color: "inherit" }}
          />

          <FormLabel fontSize={"20px"}>Contact</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <Select variant="flushed">
              <option value="" />
              </Select>
            </InputLeftElement>
            <Input
              className="ml-3"
              width={[0.67, "400px"]}
              type="number"
              variant="flushed"
              textColor="#fbbf24"
              placeholder="Contact No..."
              _placeholder={{ opacity: 0.2, color: "inherit" }}
            />
          </InputGroup>

          <div className="flex flex-row mt-10">
            <div className="flex flex-col mr-10">
              <FormLabel fontSize={"20px"}>Check-In</FormLabel>
              <Input
                width={[0.3, "200px"]}
                ref={ref}
                onChange={(e) => {
                  console.log(e.target.value);
                  if (e.target.value) setOpacity("1");
                  else {
                    ref.current.type = "text";

                    setOpacity("0.2");
                  }
                }}
                onBlur={(e) => {
                  if (!e.target.value) ref.current.type = "text";
                }}
                onClick={() => {
                  ref.current.type = "date";
                  ref.current.showPicker();
                }}
                variant="flushed"
                textColor="#fbbf24"
                opacity={opacity}
                placeholder="Select Date"
                _placeholder={{ color: "inherit" }}
                size="md"
                type="text"
              />
            </div>
            <div className="flex-flex-col">
              <FormLabel fontSize={"20px"}>Check-Out</FormLabel>
              <Input
                width={[0.3, "200px"]}
                ref={ref}
                onChange={(e) => {
                  console.log(e.target.value);
                  if (e.target.value) setOpacity("1");
                  else {
                    ref.current.type = "text";

                    setOpacity("0.2");
                  }
                }}
                onBlur={(e) => {
                  if (!e.target.value) ref.current.type = "text";
                }}
                onClick={() => {
                  ref.current.type = "date";
                  ref.current.showPicker();
                }}
                variant="flushed"
                textColor="#fbbf24"
                opacity={opacity}
                placeholder="Select Date"
                _placeholder={{ color: "inherit" }}
                size="md"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contact;
