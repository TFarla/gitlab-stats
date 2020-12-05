import Commit from "../graphql/types/commit";

export interface Task {
  sha: string,
  message: string,
  issue: number,
  totalTimeInMinutes: number
}

export interface Log {
  day: Date,
  commits: Commit[],
  tasks: Task[]
}

type LogMap = Map<string, Log>;
const issueRegex = /#(?<issue>\d+)\+(?<time>\w+)/g;
const timeRegex = /((?<day>\d+)d|(?<hour>\d+)h|(?<minute>\d+)m)/g;

export const buildTimeLog = (commits: Commit[]) =>
  commits.reduce<LogMap>((acc, commit) => {
    const isoDate = toIsoDate(commit.committed_date);
    const dateString = isoDate.toISOString();
    const tasks = toTasks(commit);
    if (acc.has(dateString)) {
      const entry = acc.get(dateString);
      if (entry) {
        entry.commits.push(commit);
        entry.tasks = [...entry.tasks, ...tasks];
        return acc;
      }
    }

    return acc.set(dateString, {
      day: isoDate,
      commits: [commit],
      tasks
    });
  }, new Map());

function toIsoDate(isoDateString: string) {
  const date = new Date(isoDateString);
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

const toTasks = (commit: Commit) =>
  Array.from(commit.message.matchAll(issueRegex)).reduce<Task[]>((acc, match) => {
    if (match.groups) {
      acc.push({
        sha: commit.id,
        issue: parseInt(match.groups['issue']),
        message: commit.message,
        totalTimeInMinutes: humanReadableTimeToMinutes(match.groups['time'])
      })
    }
    return acc;
  }, []);


export const humanReadableTimeToMinutes = (time: string) =>
  Array.from(time.matchAll(timeRegex)).reduce<number>((minutes, match) => {
    if (match.groups) {
      const { day, hour, minute } = match.groups;
      const dayInMinutes = parseInt(day || '0') * 1440;
      const hourInMinutes = parseInt(hour || '0') * 60;
      return minutes + parseInt(minute || '0') + dayInMinutes + hourInMinutes;
    }

    return minutes;
  }, 0);
