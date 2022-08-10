import React from 'react'

const Footer = () => {
  return (
    <div className="">
      <div className="w-full pb-0 flex flex-col justify-end items-end">
            <p className="text-xs text-left line lg:text-sm">@{new Date().getFullYear()} Aleksa</p>
            <p className="text-xs text-left line lg:text-sm mb-5">All rights reserved</p>
          </div>
    </div>
  )
}

export default Footer