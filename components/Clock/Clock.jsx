import { useEffect, useState } from "react";
import { nowToHHMM } from "../../utils/date-time";
import Txt from "../Txt/Txt";
import { s } from "./Clock.Style";

export default function Clock() {
  const [time, setTime] = useState(nowToHHMM());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <Txt style={s.time}>{nowToHHMM()}</Txt>
    </>
  );
}
