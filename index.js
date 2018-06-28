const { interval } = require('rxjs');
const { takeWhileInclusive } = require('rxjs-take-while-inclusive');

interval(100)
  .pipe(takeWhileInclusive(x => x < 10))
  .subscribe(console.log);
