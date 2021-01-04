import React, { createContext, useEffect, useState, useContext } from "react";

import "./App.css";


import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

// pull user from data store

const viewportProvider = createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handlewindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handlewindowResize);
    return () => window.removeEventListener("resize", handlewindowResize);
  }, []);

  return (
    <viewportProvider.Provider value={{ width, height }}>
      {children}
    </viewportProvider.Provider>
  );
};

const useViewport = () => {
  const { width, height } = useContext(viewportProvider);
  return { width, height };
};

const MobileComponent = () => {
  return <div className="app">
    <MobileView />
  </div>;
};

const DesktopComponent = () => {
  return <DesktopView />;
};

const Component = () => {
  const { width } = useViewport();
  const breakpoint = 800;
  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function App() {
  return (
    <ViewportProvider>
      <Component />
    </ViewportProvider>
  );
}
