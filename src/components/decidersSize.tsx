import { useState, useEffect } from "react";
import "./decidersSize.css";

const DecidersSize = (props: any) => {
  const [size, setSize] = useState(props.selected);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const sizeChangeHandler = (event: any) => {
    setSize(event.target.value);
    props.onChangeSize(event.target.value);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);

      if (isMobileView) {
        setSize(20);
        props.onChangeSize(20);
      } else {
        setSize(props.selected);
      }
    };

    // Check screen size on mount and on window resize
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [props]);

  return (
    <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Set Size (20-50)
      </label>
      <input
        value={size}
        onChange={sizeChangeHandler}
        type="range"
        min="20"
        max="50"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        disabled={isMobile} // Disable slider on mobile
      />
    </div>
  );
};

export default DecidersSize;
