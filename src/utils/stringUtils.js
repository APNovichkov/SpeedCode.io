export const formatTime = (minutes, seconds) => {
  let formattedTime = "";
  if (minutes <= 9) {
    formattedTime += `0${minutes}:`;
  } else {
    formattedTime += `${minutes}:`;
  }

  if (seconds <= 9) {
    formattedTime += `0${seconds}`;
  } else {
    formattedTime += seconds;
  }

  return formattedTime;
};


