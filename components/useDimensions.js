import React,{useState, useEffect} from "react";



  const useDimensions = ()=>{
    const [windowDimensions, setWindowDimensions] = useState({
      width: 0,
      height: 0,
    }); // <-- don't invoke here
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        console.log("hey", width, height);
        return {
          width,
          height,
        };
      }
      useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        handleResize(); // <-- invoke this on component mount
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
      return windowDimensions
  }
  export default useDimensions
  