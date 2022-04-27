import handleAmPmClick from "../app/util/handleAmPmClick";
import handleHourClick from "../app/util/handleHourClick";
import handleMinuteClick from "../app/util/handleMinuteClick";
import { stateInterface } from "../defaultState";

import MainButton from "./MainButton";
import MainTable from "./MainTable";
import SelectorFlex from "./SelectorFlex";
import { hoursLines, minutesLines, possibleHours, possibleMinutes } from "./timeSelectorElements";

type Props = {
    stateData: stateInterface;
    setStateData: React.Dispatch<React.SetStateAction<stateInterface>>;
    startStop: string;
  }

const TimeSelector = ({stateData, setStateData, startStop}: Props) => {

    return(<SelectorFlex>
        <h2>{startStop} Time</h2>
        <h3>Hour</h3>
        <MainTable>
            <tbody>
                {hoursLines.map(innerArray => <tr>{possibleHours.slice(innerArray[0], innerArray[1]).map((value:number, index: number) => (<td key={index}><MainButton onClick={() => handleHourClick(stateData, setStateData, startStop, value)}>{value}</MainButton></td>))}</tr>)}
            </tbody>
        </MainTable>
        <h3>Minute</h3>
        <MainTable>
            <tbody>
                {minutesLines.map(innerArray => <tr>{possibleMinutes.slice(innerArray[0], innerArray[1]).map((value:number, index: number) => (<td key={index}><MainButton onClick={() => handleMinuteClick(stateData, setStateData, startStop, value)}>{value}</MainButton></td>))}</tr>)}
            </tbody>
        </MainTable>
        <h3>AM/PM</h3>
        <MainTable>
            <tbody>
                <tr>
                <td><MainButton onClick={() => handleAmPmClick(stateData, setStateData, startStop, "AM")}>AM</MainButton></td>
                <td><MainButton onClick={() => handleAmPmClick(stateData, setStateData, startStop, "PM")}>PM</MainButton></td>
                </tr>
            </tbody>
        </MainTable>
        <br/>
        {startStop === "Start" &&
        <h2>{stateData.startTime.hour} : {stateData.startTime.minute < 10 && 0}{stateData.startTime.minute} {stateData.startTime.amPm}</h2>}
        {startStop === "Stop" &&
        <h2>{stateData.stopTime.hour} : {stateData.stopTime.minute < 10 && 0}{stateData.stopTime.minute} {stateData.stopTime.amPm}</h2>}
        <br/>
    </SelectorFlex>)
}

export default TimeSelector