import getDisplayTotals from '../app/util/getDisplayTotals';
import getHourCount from '../app/util/getHourCount';
import { stateInterface } from '../defaultState';
import HeaderBig from './styles/HeaderBig';

type Props = {
  stateData: stateInterface;
};

type DisplayTotalsProps = {
  displayHourTotal: number;
  displayMinuteTotal: number;
  decimalVersion: number;
};

const DurationDisplay = ({ stateData }: Props) => {
  let hourCount = getHourCount(
    stateData.startTime.hour,
    stateData.stopTime.hour,
    stateData.startTime.amPm,
    stateData.stopTime.amPm
  );
  const minuteCount = stateData.stopTime.minute - stateData.startTime.minute;

  if (hourCount === 0 && minuteCount < 0) {
    hourCount += 24;
  }

  const displayTotals: DisplayTotalsProps = getDisplayTotals(
    hourCount,
    minuteCount
  );

  return (
    <HeaderBig>
      {displayTotals.displayHourTotal > 0 && (
        <>
          {displayTotals.displayHourTotal} hour
          {displayTotals.displayHourTotal !== 1 && 's'} &{' '}
        </>
      )}
      {displayTotals.displayMinuteTotal} minutes /{' '}
      {displayTotals.decimalVersion.toFixed(2)} hours
    </HeaderBig>
  );
};

export default DurationDisplay;
