import { stateInterface } from "../../stateTable";

const handleMinuteClick = (stateData: stateInterface, setStateData: React.Dispatch<React.SetStateAction<stateInterface>>, startStop: string, minute: number) => {
    console.log(startStop, minute)

    if (startStop === "Start") {
            const newState = {
                ...stateData,
                startTime: {
                  ...stateData.startTime,
                  minute: minute,
                },
              };
              setStateData(newState);
        
    }
    if (startStop === "Stop") {
            const newState = {
                ...stateData,
                stopTime: {
                  ...stateData.stopTime,
                  minute: minute,
                },
              };
              setStateData(newState);
        
    }
}

export default handleMinuteClick
