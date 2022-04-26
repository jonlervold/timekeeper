import handleAmPmClick from "../app/util/handleAmPmClick";
import handleHourClick from "../app/util/handleHourClick";
import handleMinuteClick from "../app/util/handleMinuteClick";
import { stateInterface } from "../stateTable";

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

    return(<div>
        <h2>{startStop} Time</h2>
        <h3>Hour</h3>
        <table>
            <tbody>
                <tr>{possibleHours.slice(0,4).map((value:number, index: number) => (<td key={index}><button onClick={() => handleHourClick(stateData, setStateData, startStop, value)}>{value}</button></td>))}</tr>
                <tr>{possibleHours.slice(4,8).map((value:number, index: number) => (<td key={index}><button onClick={() => handleHourClick(stateData, setStateData, startStop, value)}>{value}</button></td>))}</tr>
                <tr>{possibleHours.slice(8,12).map((value:number, index: number) => (<td key={index}><button onClick={() => handleHourClick(stateData, setStateData, startStop, value)}>{value}</button></td>))}</tr>
            </tbody>
        </table>
        <h3>Minute</h3>
        <table>
        <tbody>
                <tr>{possibleMinutes.slice(0,10).map((value:number, index: number) => (<td key={index}><button onClick={() => handleMinuteClick(stateData, setStateData, startStop, value)}>{value}</button></td>))}</tr>
                <tr>{possibleMinutes.slice(10,20).map((value:number, index: number) => (<td key={index}><button onClick={() => handleMinuteClick(stateData, setStateData, startStop, value)}>{value}</button></td>))}</tr>
                <tr>{possibleMinutes.slice(20,30).map((value:number, index: number) => (<td key={index}><button onClick={() => handleMinuteClick(stateData, setStateData, startStop, value)}>{value}</button></td>))}</tr>
                <tr>{possibleMinutes.slice(30,40).map((value:number, index: number) => (<td key={index}><button onClick={() => handleMinuteClick(stateData, setStateData, startStop, value)}>{value}</button></td>))}</tr>
                <tr>{possibleMinutes.slice(40,50).map((value:number, index: number) => (<td key={index}><button onClick={() => handleMinuteClick(stateData, setStateData, startStop, value)}>{value}</button></td>))}</tr>
                <tr>{possibleMinutes.slice(50,60).map((value:number, index: number) => (<td key={index}><button onClick={() => handleMinuteClick(stateData, setStateData, startStop, value)}>{value}</button></td>))}</tr>
            </tbody>
        </table>
        <h3>AM/PM</h3>
        <table>
            <tbody>
                <tr>
                <td><button onClick={() => handleAmPmClick(stateData, setStateData, startStop, "AM")}>AM</button></td>
                <td><button onClick={() => handleAmPmClick(stateData, setStateData, startStop, "PM")}>PM</button></td>
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