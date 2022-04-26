export const stateTable = {
    startTime: {
      hour: 8,
      minute: 0,
      amPm: "AM",
    },
    stopTime: {
        hour: 9,
        minute: 0,
        amPm: "AM",
    }
  };

  export interface stateInterface {
      startTime: {
          hour: number,
          minute: number,
          amPm: string
      },
      stopTime: {
          hour: number,
          minute: number,
          amPm: string
      }
  }