export interface Milestone {
  id: number;
  iid: number;
  project_id: number;
  title: string;
  description: string;
  state: string;
  created_at: Date;
  updated_at: Date;
  due_date?: any;
  start_date?: any;
  expired?: any;
  web_url: string;
}

export default Milestone;
