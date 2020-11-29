import { intersection } from "lodash";
const NUM_SECONDS_IN_MINUTE = 60;

export const getWordsPerMinute = (minutes, seconds, numWords) => {
  const totalSeconds = minutes * NUM_SECONDS_IN_MINUTE + seconds;
  console.log(`Total Seconds: ${totalSeconds}`);
  return (numWords / (totalSeconds / NUM_SECONDS_IN_MINUTE)).toFixed();
};
