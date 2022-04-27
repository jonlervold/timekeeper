import handleAmPmClick from "../app/util/handleAmPmClick";
import handleHourClick from "../app/util/handleHourClick";
import handleMinuteClick from "../app/util/handleMinuteClick";
import { stateInterface } from "../stateTable";
import Button from "./Button";

type Props = {
    stateData: stateInterface;
    setStateData: React.Dispatch<React.SetStateAction<stateInterface>>;
    startStop: string;
  }

const TimeSelector = ({stateData, setStateData, startStop}: Props) => {

    const possibleHours: Array<number> = []
    for (let i = 1; i <= 12; i++) {
        possibleHours.push(i)
    }
    
    const possibleMinutes: Array<number> = []
    for (let i = 0; i <= 59; i++) {
        possibleMinutes.push(i)
    }

    const hoursLines: Array<Array<number>> = [[0, 4], [4, 8], [8, 12]]
    const minutesLines: Array<Array<number>> = [[0, 10], [10, 20], [20, 30], [30, 40], [40, 50], [50, 60]]

    return(<div>
        <h2>{startStop} Time</h2>
        <h3>Hour</h3>
        <table>
            <tbody>
                {hoursLines.map(innerArray => <tr>{possibleHours.slice(innerArray[0], innerArray[1]).map((value:number, index: number) => (<td key={index}><Button onClick={() => handleHourClick(stateData, setStateData, startStop, value)}>{value}</Button></td>))}</tr>)}
            </tbody>
        </table>
        <h3>Minute</h3>
        <table>
            <tbody>
                {minutesLines.map(innerArray => <tr>{possibleMinutes.slice(innerArray[0], innerArray[1]).map((value:number, index: number) => (<td key={index}><Button onClick={() => handleMinuteClick(stateData, setStateData, startStop, value)}>{value}</Button></td>))}</tr>)}
            </tbody>
        </table>
        <h3>AM/PM</h3>
        <table>
            <tbody>
                <tr>
                <td><Button onClick={() => handleAmPmClick(stateData, setStateData, startStop, "AM")}>AM</Button></td>
                <td><Button onClick={() => handleAmPmClick(stateData, setStateData, startStop, "PM")}>PM</Button></td>
                </tr>
            </tbody>
        </table>
        <h3>Current {startStop}</h3>
        {startStop === "Start" &&
        <h2>{stateData.startTime.hour} : {stateData.startTime.minute < 10 && 0}{stateData.startTime.minute} {stateData.startTime.amPm}</h2>}
        {startStop === "Stop" &&
        <h2>{stateData.stopTime.hour} : {stateData.stopTime.minute < 10 && 0}{stateData.stopTime.minute} {stateData.stopTime.amPm}</h2>}
    </div>)
}

export default TimeSelector