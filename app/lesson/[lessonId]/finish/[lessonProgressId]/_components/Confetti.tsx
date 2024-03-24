"use client";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useAudio } from "react-use";

const ConfettiPage = () => {
  const [finishAudio] = useAudio({
    src: "/finish.mp3",
    autoPlay: true,
  });
  const { width, height } = useWindowSize();

  return (
    <>
      {finishAudio}
      <Confetti
        width={width}
        height={window.innerHeight}
        numberOfPieces={500}
        recycle={false}
        tweenDuration={10000}
      />
    </>
  );
};

export default ConfettiPage;
