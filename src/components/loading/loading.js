"use client";

import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";
const Loading = () => {
  return (
    <div className="flex-1 bg-green-800 flex items-center justify-center">
      <Player
        src="https://assets7.lottiefiles.com/packages/lf20_kyh1ahfr.json"
        // https://assets7.lottiefiles.com/packages/lf20_kyh1ahfr.json 1
        // https://assets7.lottiefiles.com/packages/lf20_EImOK3.json 2
        // https://assets4.lottiefiles.com/packages/lf20_n2nxpuho.json 3
        // https://assets1.lottiefiles.com/packages/lf20_poqmycwy.json 4
        className="player h-[100%]"
        loop
        autoplay
      />
    </div>
  );
};

export default Loading;
