"use client";

import React from 'react'
import { GridLoader } from "react-spinners"

const ErrorMessage = () => {
  return (
    <div>
      <GridLoader color="red" />
      <div className="text-[50px]">Oops!</div>
      <div>잠시 루 다시 확인해주세요.</div>
    </div>
  )
}

export default ErrorMessage
