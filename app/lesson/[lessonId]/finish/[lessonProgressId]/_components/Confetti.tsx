"use client";
import React, { useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useAudio } from "react-use";

const ConfettiPage = () => {
  const [finishAudio] = useAudio({
    src: "/finish.mp3",
    autoPlay: true,
  });
  const { width, height } = useWindowSize();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  if (!loading) return null;

  return (
    <>
      {loading && finishAudio}
      <Confetti
        width={width}
        height={window?.innerHeight || height}
        numberOfPieces={500}
        recycle={false}
        tweenDuration={10000}
      />
    </>
  );
};

export default ConfettiPage;
