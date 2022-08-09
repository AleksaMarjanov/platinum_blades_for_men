import React from "react";
import {NavigationDots, SocialMedia} from '..';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`w-full min-h-screen flex flex-row${classNames}`}>
        <SocialMedia />
        <div className="flex justify-center items-center flex-1 w-full flex-col p-16 p-4 ">
          <Component />

          <div className="w-full pt-8 pr-0 pb-0 flex flex-col justify-end items-end">
            <p className="text-sm text-left line lg:text-xl">@{new Date().getFullYear()} Aleksa</p>
            <p className="text-sm text-left line lg:text-xl">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
// flex-1 w-full flex-col pt-16 pr-8 marker:flex justify-center items-center -- above component 
// w-full min-h-screen flex flex-row idName first div