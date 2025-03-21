const dayjs = require("dayjs");
const timezone = require("dayjs/plugin/timezone");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
dayjs.extend(timezone);


const testDatesMap = () => {
  // dates en UTC
  const testDates = [
  "2025-03-23T01:00:00+00:00",
  "2025-03-23T02:00:00+00:00",
  "2025-03-23T02:01:00+00:00",
  "2025-03-23T02:59:00+00:00",
  "2025-03-23T03:00:00+00:00",
  "2025-03-23T03:01:00+00:00",
  "2025-03-23T03:59:00+00:00",
  "2025-03-23T04:00:00+00:00",
  "2025-03-23T04:01:00+00:00",
  "2025-03-23T04:59:00+00:00",
  "2025-03-23T05:00:00+00:00",
];

const expectedDates = [
  "2025-03-22T22:00:00-03:00",
  "2025-03-22T23:00:00-03:00",
  "2025-03-22T23:01:00-03:00",
  "2025-03-22T23:59:00-03:00",
  "2025-03-23T00:00:00-03:00",
  "2025-03-23T00:01:00-03:00",
  "2025-03-23T00:59:00-03:00",
  "2025-03-23T01:00:00-03:00",
  "2025-03-23T01:01:00-03:00",
  "2025-03-23T01:59:00-03:00",
  "2025-03-23T02:00:00-03:00",
];

// console.table(
  testDates.map((date, index) => {
    console.debug('string date\t\t', date);
    const testA = dayjs(date).tz("America/Asuncion").format();
    console.debug('expected\t\t', expectedDates[index]);
    console.debug('result\t\t\t', testA, expectedDates[index] === testA? 'OK' : '\x1b[31m ERROR \x1b[0m');
    console.debug('\n');

    const testB = dayjs(date).tz("America/Sao_Paulo").format();
    console.debug('expected\t\t', expectedDates[index]);
    console.debug('result\t\t\t', testB, expectedDates[index] === testB? 'OK' : '\x1b[31m ERROR \x1b[0m');
    console.debug('\n');
  })
// );
}

const testFeeExpiration = () => {
  console.log('test fixed', dayjs('2025-03-27').tz('America/Asuncion').toDate());
  // console.log('test fixed1', dayjs('2025-03-27').tz('America/Asuncion').format());
  // console.log('test fixed2', dayjs('2025-03-27T03:00:00.000+00:00').tz('America/Asuncion').toDate());
  // console.log('test fixed3', dayjs('2025-03-27T03:00:00.000+00:00').tz('America/Asuncion').format());
  // console.log(dayjs('2025-03-23').tz('America/Asuncion').format('YYYY-MM-DD HH:mm:ss Z'));
  // console.log(dayjs('2025-03-24').tz('America/Asuncion').format('YYYY-MM-DD HH:mm:ss Z'));

  // const now = dayjs('2025-04-19').tz('America/Asuncion').startOf('day');
  // console.log('now', now.format('YYYY-MM-DD HH:mm:ss Z'));

  // const dueDate1 = dayjs('2025-04-19T03:00:00.000+00:00').tz('America/Asuncion').startOf('day');
  // console.log('dueDate1', dueDate1.format('YYYY-MM-DD HH:mm:ss Z'));

  // const dueDate2 = dayjs('2025-04-19T04:00:00.000+00:00').tz('America/Asuncion').startOf('day');
  // console.log('dueDate2', dueDate2.format('YYYY-MM-DD HH:mm:ss Z'));

  // console.log('test A', dueDate1.diff(now, 'day'));
  // console.log('test B', dueDate2.diff(now, 'day'));

  // loan dueDate search loan notifications
  let i = 1
  // dayjs.tz.setDefault('America/Asuncion');
  // console.log(`dueDate${i++}`, dayjs.tz('2025-03-04').add(3, 'day').startOf('day').toDate());
  // console.log(`dueDate${i++}`, dayjs.tz('2025-03-19').add(3, 'day').startOf('day').toDate());
  // console.log(`dueDate${i++}`, dayjs.tz('2025-03-20').add(3, 'day').startOf('day').toDate());
  // console.log(`dueDate${i++}`, dayjs.tz('2025-03-21').add(3, 'day').startOf('day').toDate());
  // console.log(`dueDate${i++}`, dayjs.tz('2025-03-22').add(3, 'day').startOf('day').toDate());
  // console.log(`dueDate${i++}`, dayjs.tz('2025-03-23').add(3, 'day').startOf('day').toDate());
  // console.log(`dueDate${i++}`, dayjs.tz('2025-03-24').add(3, 'day').startOf('day').toDate());
  // console.log(`dueDate${i++}`, dayjs.tz('2025-03-27').startOf('day').toDate());
}
const functions = {
  testDatesMap,
  testFeeExpiration
}

// receive function name as argument
const functionName = process.argv[2];

if (functionName) {
  functions[functionName]();
} else {
  console.log('No function name provided');
}