export interface Commit {
  id: string
  title: string
  message: string
  short_id: string
  created_at: string
  author_name: string
  author_email: string
  authored_date: string
  committer_name: string
  committer_email: string
  committed_date: string
  web_url: string
}

export default Commit;
