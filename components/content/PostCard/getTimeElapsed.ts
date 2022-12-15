export default function getTimeElapsed(then: Date, now: Date) {
  const ellapsedMilis = now.getTime() - then.getTime();
  console.log(ellapsedMilis);

  return getUnit(ellapsedMilis);
}

// TODO: Test this function
function getUnit(time: number) {
  const SECOND = 1000;
  const MINUTE = 60000;
  const HOUR = 3.6e6;
  const DAY = 8.64e7;

  if (time < 60 * SECOND) {
    return `${Math.floor(time / SECOND)}s`;
  } else if (time < 60 * MINUTE) {
    return `${Math.floor(time / MINUTE)}m`;
  } else if (time < 24 * HOUR) {
    return `${Math.floor(time / HOUR)}h`;
  } else if (time < 7 * DAY) {
    return `${Math.floor(time / DAY)}d`;
  } else {
    return new Date(Date.parse(time.toString()))
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
      .toLowerCase();
  }
}
