"use client"; 
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className=" space-x-4 ">
        <span className=" mr-1 ">{days} Days</span>
        <span>{hours} Hours</span>
        <span>{minutes} Minutes</span>
        <span>{seconds} Seconds</span>
      </div>
    );
  }
};

interface CountDownProps {
  targetDate?: number;
}

export default function CountDown({ targetDate }: CountDownProps) {
  const [internalTargetDate, setInternalTargetDate] = useState<number | null>(null);

  useEffect(() => {
    if (targetDate) {
      setInternalTargetDate(targetDate);
    } else {
      const d = new Date("April 25, 2025 09:00:00.000").getTime();
      setInternalTargetDate(d);
    }
  }, [targetDate]);

  if (!internalTargetDate) return null;

  return <Countdown date={internalTargetDate} renderer={renderer} />;
}
