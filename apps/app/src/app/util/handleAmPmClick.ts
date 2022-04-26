import { stateInterface } from './../../stateTable';
const handleAmPmClick = (stateData: stateInterface, setStateData: React.Dispatch<React.SetStateAction<stateInterface>>, startStop: string, amPm: string) => {

    if (startStop === "Start") {
        if (amPm === "AM") {
            const newState = {
                ...stateData,
                startTime: {
                  ...stateData.startTime,
                  amPm: "AM",
                },
              };
              setStateData(newState);
        }
    }

    if (startStop === "Start") {
        if (amPm === "PM") {
            const newState = {
                ...stateData,
                startTime: {
                  ...stateData.startTime,
                  amPm: "PM",
                },
              };
              setStateData(newState);
        }
    }

    if (startStop === "Stop") {
        if (amPm === "AM") {
            const newState = {
                ...stateData,
                stopTime: {
                  ...stateData.stopTime,
                  amPm: "AM",
                },
              };
              setStateData(newState);
        }
    }
    
    if (startStop === "Stop") {
        if (amPm === "PM") {
            const newState = {
                ...stateData,
                stopTime: {
                  ...stateData.stopTime,
                  amPm: "PM",
                },
              };
              setStateData(newState);
        }
    }

}

export default handleAmPmClick