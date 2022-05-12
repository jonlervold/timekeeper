const getHourCount = (
  startHour: number,
  stopHour: number,
  startAmPm: string,
  stopAmPm: string
) => {
  let hourCount = 0;

  if (startAmPm === stopAmPm) {
    if (stopHour < startHour) {
      hourCount = stopHour + 24 - startHour;
    } else {
      if (stopHour === 12) {
        hourCount = stopHour + 12 - startHour;
      } else {
        hourCount = stopHour - startHour;
      }
    }
  } else if (startAmPm !== stopAmPm) {
    if (stopHour !== 12) {
      hourCount = stopHour + 12 - startHour;
    } else {
      hourCount = stopHour - startHour;
    }
  }

  return hourCount;
};

export default getHourCount;
