export default function getTimeElapsed(then: Date, now: Date) {
  const ellapsedMilis = now.getTime() - then.getTime();

  return getUnit(ellapsedMilis);
}

function getUnit(time: number) {
  const SECOND = 10e3;
  const MINUTE = 1.67 * 10e5;
  const HOUR = 2.78 * 10e7;
  const DAY = 1.16 * 10e8;

  if (time < 60 * SECOND) {
    return `${Math.round(time / SECOND)}s`;
  } else if (time < 60 * MINUTE) {
    return `${Math.round(time / MINUTE)}m`;
  } else if (time < 24 * HOUR) {
    return `${Math.round(time / HOUR)}h`;
  } else if (time < 7 * DAY) {
    return `${Math.round(time / DAY)}d`;
  } else {
    return new Date(Date.parse(time.toString())).toLocaleDateString();
  }
}
