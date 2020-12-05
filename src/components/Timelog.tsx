import { buildTimeLog } from "../functions";
import Commit from "../graphql/types/commit";
import CalendarHeatmap from 'react-calendar-heatmap';
import React from "react";
import 'react-calendar-heatmap/dist/styles.css';


export interface Props {
  commits: Commit[]
}

interface HeatmapEntry {
  date: string,
  count: number
}

export const Timelog = (props: Props) => {
  const logs = Array.from(buildTimeLog(props.commits || []));
  const values = logs.map<HeatmapEntry>(([date, log]) => ({
    date,
    count: log.tasks.reduce<number>((acc, task) => acc + task.totalTimeInMinutes, 0)
  }));

  if (logs.length === 0) {
    return <div>No commits found</div>
  }

  return (
    <div>
      <CalendarHeatmap
        startDate={'2020-01-01'}
        endDate={'2020-12-31'}
        values={values || []}
      />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Issue</th>
            <th>Message</th>
            <th>Minutes</th>
          </tr>
        </thead>
        <tbody>
          {
            logs.map(([date, log]) => (
              <React.Fragment key={date}>
                <tr>
                  <td rowSpan={log.tasks.length + 1}>{
                    (new Date(date)).toLocaleDateString()
                  }</td>
                </tr>
                {log.tasks.map((task) => (
                  <tr>
                    <td>{task.issue}</td>
                    <td>{task.message}</td>
                    <td>{task.totalTimeInMinutes}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
