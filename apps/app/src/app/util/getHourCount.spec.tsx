import getHourCount from './getHourCount';

test('match amPm', () => {
  expect(getHourCount(2, 2, 'am', 'am')).toBe(0);
  expect(getHourCount(12, 2, 'am', 'am')).toBe(2);
  expect(getHourCount(2, 12, 'am', 'am')).toBe(22);
  expect(getHourCount(2, 11, 'am', 'am')).toBe(9);
  expect(getHourCount(11, 2, 'am', 'am')).toBe(15);

  expect(getHourCount(2, 2, 'pm', 'pm')).toBe(0);
  expect(getHourCount(12, 2, 'pm', 'pm')).toBe(2);
  expect(getHourCount(2, 12, 'pm', 'pm')).toBe(22);
  expect(getHourCount(2, 11, 'pm', 'pm')).toBe(9);
  expect(getHourCount(11, 2, 'pm', 'pm')).toBe(15);
});

test('opposite amPm', () => {
  expect(getHourCount(2, 2, 'pm', 'am')).toBe(12);
  expect(getHourCount(12, 2, 'pm', 'am')).toBe(14);
  expect(getHourCount(2, 12, 'pm', 'am')).toBe(10);
  expect(getHourCount(2, 11, 'pm', 'am')).toBe(21);
  expect(getHourCount(11, 2, 'pm', 'am')).toBe(3);

  expect(getHourCount(2, 2, 'am', 'pm')).toBe(12);
  expect(getHourCount(12, 2, 'am', 'pm')).toBe(14);
  expect(getHourCount(2, 12, 'am', 'pm')).toBe(10);
  expect(getHourCount(2, 11, 'am', 'pm')).toBe(21);
  expect(getHourCount(11, 2, 'am', 'pm')).toBe(3);
});
