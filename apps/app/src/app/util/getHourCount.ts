const getHourCount = (startHour: number, stopHour: number, startAmPm: string, stopAmPm: string) => {

let hourCount = 0

    if (startAmPm === stopAmPm) {
        if (stopHour < startHour){
        hourCount = stopHour + 24 - startHour
        } else {
            hourCount = stopHour - startHour
        }
    } else if (startAmPm !== stopAmPm) {
        hourCount = stopHour + 12 - startHour
    }

    return hourCount

}

export default getHourCount