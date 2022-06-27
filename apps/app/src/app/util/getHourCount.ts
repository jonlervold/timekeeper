const getHourCount = (
  startHour: number,
  stopHour: number,
  startAmPm: string,
  stopAmPm: string
) => {
  let hourCount = 0;

  if (startAmPm === stopAmPm) {
    if (startHour === stopHour) {
      hourCount = 0;
    } else {
      if (startHour === 12) {
        hourCount = stopHour;
      } else {
        if (stopHour === 12) {
          hourCount = stopHour + 12 - startHour;
        } else {
          if (stopHour > startHour) {
            hourCount = stopHour - startHour;
          } else {
            hourCount = stopHour + 24 - startHour;
          }
        }
      }
    }
  }

  if (startAmPm !== stopAmPm) {
    if (startHour === stopHour) {
      hourCount = 12;
    } else {
      if (startHour === 12) {
        hourCount = stopHour + 12;
      } else {
        if (stopHour === 12) {
          hourCount = stopHour - startHour;
        } else {
          // startHour > stopHour & startHour < stopHour same formula
          hourCount = stopHour + 12 - startHour;
        }
      }
    }
  }

  return hourCount;
};

export default getHourCount;
