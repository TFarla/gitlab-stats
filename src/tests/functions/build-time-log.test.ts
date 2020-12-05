import { buildTimeLog, humanReadableTimeToMinutes } from "../../functions";
import commits from './commits.json';

describe('build-time-log', () => {
  it('should be empty on no commits', () => {
    const log = buildTimeLog([]);
    expect(Array.from(log)).toHaveLength(0);
  })

  it('should group commits', () => {
    expect(buildTimeLog(commits)).toMatchSnapshot();
  })

  it.each`
    time                | minutes
    ${'1h30m'}          | ${90}
    ${'2h'}             | ${120}
    ${'1d'}             | ${1440}
    ${'2h1h1h'}         | ${240}
    ${'nonsense #2+3h'} | ${180}
    `('should convert to time notation', ({ time, minutes }) => {
    expect(humanReadableTimeToMinutes(time)).toEqual(minutes);
  })
})
