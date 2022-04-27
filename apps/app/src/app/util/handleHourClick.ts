import { stateInterface } from './../../defaultState';

const handleHourClick = (stateData: stateInterface, setStateData: React.Dispatch<React.SetStateAction<stateInterface>>, startStop: string, hour: number) => {

    if (startStop === "Start") {
            const newState = {
                ...stateData,
                startTime: {
                  ...stateData.startTime,
                  hour: hour,
                },
              };
              setStateData(newState);
        
    }
    if (startStop === "Stop") {
            const newState = {
                ...stateData,
                stopTime: {
                  ...stateData.stopTime,
                  hour: hour,
                },
              };
              setStateData(newState);
        
    }
}

export default handleHourClick
