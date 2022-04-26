import { stateInterface } from "../stateTable"

type Props = {
    stateData: stateInterface;
  }

const DurationDisplay = ({stateData}: Props) => {

    const startAmPm = stateData.startTime.amPm
    const stopAmPm = stateData.stopTime.amPm
    const startHour = stateData.startTime.hour
    const stopHour = stateData.stopTime.hour
    const startMinute = stateData.startTime.minute
    const stopMinute = stateData.stopTime.minute
    

    let hourCount = 0

    if ((startAmPm === "AM" && stopAmPm === "AM") || (startAmPm === "PM" && stopAmPm === "PM")) {
        if (stopHour < startHour){
        hourCount = stopHour + 24 - startHour
        } else {
            hourCount = stopHour - startHour
        }
    } else if ((startAmPm === "AM" && stopAmPm === "PM") || (startAmPm === "PM" && stopAmPm === "AM")) {
        hourCount = stopHour + 12 - startHour
    }

    const minuteCount = stopMinute - startMinute

    let displayHourTotal = hourCount
    let displayMinuteTotal = minuteCount

    if (minuteCount < 0) {
        displayHourTotal = hourCount - 1;
        displayMinuteTotal = 60 - Math.abs(minuteCount)
    }

    const decimalVersion = displayHourTotal + (displayMinuteTotal / 60)




    return (<div>
        <h1>Duration:<br/>{displayHourTotal > 0 && <>{displayHourTotal} hours & </>}{displayMinuteTotal} minutes<br/>
        or<br/>
        {decimalVersion.toFixed(2)} hours
        </h1>
    </div>)
}

export default DurationDisplay