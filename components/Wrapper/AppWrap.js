import React from "react";
import {NavigationDots} from '..';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`w-full flex flex-row ${classNames}`}>
        <div className="flex-1 w-full pt-32 flex-col justify-center items-center">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
