const dayjs = require("dayjs");
const timezone = require("dayjs/plugin/timezone");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
dayjs.extend(timezone);

// dates en UTC
const testDates = [
  // "2024-03-10T00:00:00+00:00",
  // "2024-04-20T00:00:00+00:00",
  // "2025-03-10T00:00:00+00:00",
  // "2025-04-20T00:00:00+00:00",
  // "skip",
  "2025-03-23T01:00:00+00:00",
  "2025-03-23T02:00:00+00:00",
  "2025-03-23T03:00:00+00:00",
  "2025-03-23T04:00:00+00:00",
  "2025-03-23T05:00:00+00:00",
];

const expectedDates = [
  "2025-03-22T22:00:00-03:00",
  "2025-03-22T23:00:00-03:00",
  "2025-03-23T00:00:00-03:00",
  "2025-03-23T01:00:00-03:00",
  "2025-03-23T02:00:00-03:00",
];

// console.table(
  testDates.map((date, index) => {
    console.debug('string date\t\t', date);
    const result = dayjs(date).tz("America/Asuncion").format();
    console.debug('result\t\t\t', result, 
      expectedDates[index] === result? 'OK' : '\x1b[31m ERROR \x1b[0m');
    console.debug('\n');
  })
// );
