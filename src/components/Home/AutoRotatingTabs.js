import { useEffect, useRef, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const AutoRotatingTabs = ({ tabs, panels }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false); // State to track hovering over the panel
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    let interval;
    if (!isHovering && isInView) {
      interval = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % tabs.length);
      }, 5000); // Rotate tabs every 5000 ms (5 seconds)
    }

    return () => clearInterval(interval);
  }, [tabs.length, isHovering, isInView]); // Include isHovering in the dependency array

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
    <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <TabList className="space-x-5 flex md:justify-center border-b pb-5 mb-5 overflow-auto">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={`whitespace-nowrap hover:bg-theme-gradient hover:text-white px-4 py-2 rounded-lg border-${
              selectedIndex === index ? "theme-gradient" : "[#4D4D4D]"
            } border data-[selected]:bg-theme-gradient data-[selected]:text-white`}
          >
            {tab}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {panels.map((panel, index) => (
          <TabPanel
            key={index}
            className="flex justify-center"
            onMouseEnter={() => setIsHovering(true)} // Pause the rotation when the mouse enters the panel
            onMouseLeave={() => setIsHovering(false)} // Resume the rotation when the mouse leaves the panel
          >
            <div>{panel}</div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
    </div>
  );
};

export default AutoRotatingTabs;
