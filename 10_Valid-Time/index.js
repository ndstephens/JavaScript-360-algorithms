// Valid Time
// Write a function that takes in a string (in time format, '21:30') and finds out if it is a valid time or not (on the 24-hour time clock, aka military time)
// Verify the 'hours' are single or double digit, between 0 and 23
// Verify the 'minutes' are always double digit, between 00 and 59 (can check between 0 and 59 b/c already verified it was double-digit and parseInt will remove a leading zero)

const isValidTime = strTime => {
  const timeSplit = strTime.split(':');
  if ([1, 2].includes(timeSplit[0].length) && timeSplit[1].length === 2) {
    const timeNums = timeSplit.map(el => parseInt(el));
    return (
      timeNums[0] >= 0 &&
      timeNums[0] <= 23 &&
      (timeNums[1] >= 0 && timeNums[1] <= 59)
    );
  }
  return false;
};

console.log(isValidTime('24:00'));
console.log(isValidTime('23:0'));
console.log(isValidTime('23:60'));
console.log(isValidTime(':01'));
console.log(isValidTime('23:'));
console.log(isValidTime('23:59'));
console.log(isValidTime('00:00'));
console.log(isValidTime('4:00'));
