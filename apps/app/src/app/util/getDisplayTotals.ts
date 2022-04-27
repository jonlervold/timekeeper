const getDisplayTotals = (hourCount: number, minuteCount: number) => {

    let displayHourTotal = hourCount
    let displayMinuteTotal = minuteCount

    if (minuteCount < 0) {
        displayHourTotal = hourCount - 1;
        displayMinuteTotal = 60 - Math.abs(minuteCount)
    }

    const decimalVersion = displayHourTotal + (displayMinuteTotal / 60)

    return {
        displayHourTotal: displayHourTotal, 
        displayMinuteTotal: displayMinuteTotal, 
        decimalVersion: decimalVersion}}


export default getDisplayTotals