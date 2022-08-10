import React from "react";
import {NavigationDots, SocialMedia} from '..';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`w-full min-h-screen flex flex-row ${classNames}`}>
        <SocialMedia />
        <div className="flex-1 w-full flex-col justify-center items-center">
          <Component />

          <div className="w-full pb-0 flex flex-col justify-end items-end">
            <p className="text-xs text-left line lg:text-sm">@{new Date().getFullYear()} Aleksa</p>
            <p className="text-xs text-left line lg:text-sm">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
