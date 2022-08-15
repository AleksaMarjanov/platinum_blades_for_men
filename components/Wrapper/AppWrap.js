import React from "react";
import {NavigationDots} from '..';
import SocialMedia from './../SocialMedia';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`w-full flex flex-row ${classNames}`}>
        <SocialMedia />
        <div className="flex-1 w-full flex-col justify-center items-center">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
