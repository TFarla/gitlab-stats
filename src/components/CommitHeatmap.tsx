import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import Commit from '../graphql/types/commit';

export interface Props {
  startDate: Date,
  endDate: Date,
  commits: Commit[]
}

export const CommitHeatmap = (props: Props) => {
  const values = (props.commits || []).reduce<Map<string, number>>((acc, commit) => {
    const key = format(commit);
    acc.set(key, (acc.get(key) || 0) + 1)
    return acc;
  }, new Map());

  return (
    <CalendarHeatmap
      startDate={props.startDate}
      endDate={props.endDate}
      values={Array.from(values).map(([date, count]) => ({date, count}))}
    />
  );
};

function format({created_at}: Commit) {
  const date = new Date(created_at);
  const formatted = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;

  return formatted;
}

export default CommitHeatmap;
